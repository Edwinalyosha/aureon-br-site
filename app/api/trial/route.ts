import { NextRequest, NextResponse } from "next/server";

const REQUIRED = ["name", "businessName", "phone", "email"] as const;

// Unlike /api/intake, a trial signup is a lead we cannot afford to lose silently:
// report failure so the form can show the phone/email fallback.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => typeof body[k] !== "string" || !(body[k] as string).trim());
  if (missing.length) {
    return NextResponse.json({ ok: false, error: "missing_fields", missing }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[trial] N8N_WEBHOOK_URL is not set; signup not delivered");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 502 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "trial_signup",
        source: "aureonnbridge.com",
        timestamp: new Date().toISOString(),
        name: String(body.name).trim().slice(0, 200),
        businessName: String(body.businessName).trim().slice(0, 200),
        businessType: String(body.businessType ?? "").trim().slice(0, 100),
        phone: String(body.phone).trim().slice(0, 50),
        email: String(body.email).trim().slice(0, 200),
        website: String(body.website ?? "").trim().slice(0, 300),
      }),
    });
    if (!res.ok) {
      console.error("[trial] n8n webhook returned", res.status);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[trial] n8n webhook error:", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

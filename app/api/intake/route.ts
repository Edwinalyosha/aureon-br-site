import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "aureonbridge.com",
          timestamp: new Date().toISOString(),
          ...body,
        }),
      });
    } catch (err) {
      // Log but never block the user on webhook failure
      console.error("[intake] n8n webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}

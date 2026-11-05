import type { Metadata } from "next";
import { PhoneForwarded, PhoneCall, PhoneOff } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrintButton } from "@/components/ui/PrintButton";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Call Forwarding Setup",
  description:
    "How to forward the calls your shop doesn't answer to your Aureon Bridge AI receptionist, for Verizon, AT&T, T-Mobile and office phone systems.",
  // A setup sheet for clients, not a landing page.
  robots: { index: false, follow: false },
};

// Codes match the admin panel's forwarding step (scripe ai/aureon components/admin/forwarding-admin.tsx
// and docs/onboarding-numbers.md). Change both together.
//
// ?n=2405551234 fills in the shop's Aureon number, so a link can be sent to one owner.

/** 10 digits from ?n=, or null. Accepts "(240) 555-1234", "+12405551234" and the like. */
function aureonDigits(n: string | string[] | undefined): string | null {
  const raw = (Array.isArray(n) ? n[0] : n ?? "").replace(/\D/g, "");
  const ten = raw.length === 11 && raw.startsWith("1") ? raw.slice(1) : raw;
  return /^\d{10}$/.test(ten) ? ten : null;
}

const pretty = (d: string) => `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sm font-semibold text-navy bg-cream border border-gray-200 px-2 py-0.5 whitespace-nowrap">
      {children}
    </code>
  );
}

export default async function ForwardingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const digits = aureonDigits((await searchParams).n);
  const num = digits ?? "AUREONNUMBER";
  const shown = digits ? pretty(digits) : "your Aureon number";

  const mobile = [
    { carrier: "Verizon", on: `*71${num}`, off: "*73" },
    { carrier: "AT&T", on: `**004*1${num}#`, off: "##004#" },
    { carrier: "T-Mobile", on: `**004*1${num}#`, off: "##004#" },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 print:py-0">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <SectionLabel>Setup Guide</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Forward your missed calls to Aureon
            </h1>
          </div>
          <PrintButton />
        </div>

        <p className="text-grey text-base leading-relaxed mb-4">
          Your phones keep ringing as normal. When nobody picks up, your phone company passes the
          call to your AI receptionist, which answers, takes the caller&apos;s details and emails you
          a summary. You keep your number, and you can switch it off any time.
        </p>

        <div className="border-l-4 border-gold bg-cream px-5 py-4 mb-10">
          <p className="text-sm text-grey leading-relaxed">
            <strong className="text-navy">Your Aureon number:</strong>{" "}
            {digits ? (
              <span className="font-mono font-semibold text-navy">{pretty(digits)}</span>
            ) : (
              <>
                <span className="inline-block min-w-[10rem] border-b border-navy align-bottom">&nbsp;</span>{" "}
                <span className="text-grey/80">(we give you this at setup)</span>
              </>
            )}
          </p>
          {!digits && (
            <p className="text-xs text-grey/80 mt-2">
              In the codes below, replace <Code>AUREONNUMBER</Code> with its 10 digits, no spaces or dashes.
            </p>
          )}
        </div>

        {/* ── Mobile phones ─────────────────────────────────────────── */}
        <section className="mb-10 break-inside-avoid">
          <div className="flex items-center gap-3 mb-3">
            <PhoneForwarded size={20} className="text-gold" />
            <h2 className="text-xl font-bold text-navy">If your business number is a mobile phone</h2>
          </div>
          <p className="text-sm text-grey leading-relaxed mb-4">
            On the phone that has your business number, dial the code and press Call. You&apos;ll hear a
            tone or see a message confirming it.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[11px] font-bold tracking-widest uppercase text-gold">
                  <th className="py-2 pr-4">Carrier</th>
                  <th className="py-2 pr-4">Turn on (calls you don&apos;t answer)</th>
                  <th className="py-2">Turn off</th>
                </tr>
              </thead>
              <tbody>
                {mobile.map((m) => (
                  <tr key={m.carrier} className="border-t border-gray-100">
                    <td className="py-3 pr-4 font-semibold text-navy">{m.carrier}</td>
                    <td className="py-3 pr-4"><Code>{m.on}</Code></td>
                    <td className="py-3"><Code>{m.off}</Code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey/80 mt-3">
            Other mobile carriers usually use the AT&amp;T / T-Mobile codes. If a code doesn&apos;t work,
            your carrier can turn on &quot;forward when unanswered&quot; for you.
          </p>
        </section>

        {/* ── Office phones / VoIP ──────────────────────────────────── */}
        <section className="mb-10 break-inside-avoid">
          <div className="flex items-center gap-3 mb-3">
            <PhoneForwarded size={20} className="text-gold" />
            <h2 className="text-xl font-bold text-navy">If it&apos;s an office line or internet phone</h2>
          </div>
          <p className="text-sm text-grey leading-relaxed mb-3">
            Comcast Business, Verizon Business, RingCentral, Spectrum, Vonage and similar services set
            this in their online portal or app, not with a code:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-grey leading-relaxed">
            <li>Sign in to your phone provider&apos;s portal or app.</li>
            <li>
              Find <strong className="text-navy">Call Forwarding</strong> and choose{" "}
              <strong className="text-navy">&quot;When there&apos;s no answer&quot;</strong> (it may say
              &quot;No answer / busy&quot; or &quot;When unavailable&quot;). Not &quot;All calls&quot;.
            </li>
            <li>Enter {shown} and save. If it asks how many rings, choose 4 or 5.</li>
          </ol>
          <p className="text-xs text-grey/80 mt-3">
            Can&apos;t find it? Call your phone company and ask them to forward unanswered calls to {shown}.
            We&apos;re also happy to do it with you.
          </p>
        </section>

        {/* ── Test ──────────────────────────────────────────────────── */}
        <section className="mb-10 break-inside-avoid">
          <div className="flex items-center gap-3 mb-3">
            <PhoneCall size={20} className="text-gold" />
            <h2 className="text-xl font-bold text-navy">Test it</h2>
          </div>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-grey leading-relaxed">
            <li>From a different phone, call your shop&apos;s number.</li>
            <li>Don&apos;t answer. After a few rings the AI receptionist should pick up.</li>
            <li>Leave a test message. The summary arrives in your email within a few minutes.</li>
          </ol>
        </section>

        {/* ── Off ───────────────────────────────────────────────────── */}
        <section className="mb-10 break-inside-avoid">
          <div className="flex items-center gap-3 mb-3">
            <PhoneOff size={20} className="text-gold" />
            <h2 className="text-xl font-bold text-navy">Turning it off</h2>
          </div>
          <p className="text-sm text-grey leading-relaxed">
            Dial the &quot;turn off&quot; code above, or switch call forwarding off in your provider&apos;s
            portal. Your calls go back to ringing out or to voicemail straight away.
          </p>
        </section>

        <div className="border-t border-gray-100 pt-6 text-sm text-grey">
          Need a hand? Call us at{" "}
          <a href={CONTACT.phoneHref} className="text-gold font-semibold">{CONTACT.phoneDisplay}</a> or email{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-gold font-semibold">{CONTACT.email}</a>.
        </div>
      </div>
    </div>
  );
}

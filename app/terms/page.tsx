import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Aureon Bridge LLC.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <h1 className="text-3xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-xs text-grey mb-10">Last updated: [DATE — insert before launch]</p>

        {/* Launch blocker notice */}
        <div className="border border-dashed border-gold/40 bg-gold/5 px-5 py-4 mb-12">
          <p className="text-xs font-bold tracking-wider uppercase text-gold/70 mb-1">
            Placeholder — Requires Attorney-Reviewed Content Before Launch
          </p>
          <p className="text-xs text-grey/70 leading-relaxed">
            This page must cover: scope of services, payment terms and fee
            schedule, service agreement and exit terms, liability limitation,
            dispute resolution, Wyoming LLC governing law, and AI tool use
            disclosure. Reference the Legal Brief PDF and confirm exact Wyoming
            LLC registered name.
          </p>
        </div>

        <div className="space-y-8 text-grey">
          <Section title="1. The Service">
            Aureon Bridge LLC (&quot;Aureon Bridge,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides custom
            AI automation services under a simple month-to-month service agreement.
            Services begin upon execution of a signed proposal and receipt of the
            one-time setup fee.
          </Section>

          <Section title="2. Payment Terms">
            A one-time setup fee is due before we begin building your system. The
            monthly retainer is billed on the same calendar date each month. Retainer
            invoices unpaid after 14 days are subject to service suspension. All prices
            are in USD.
          </Section>

          <Section title="3. Service Agreement and Exit Terms">
            Starter and Starter Complete tier clients may terminate with 30 days
            written notice. Professional and Enterprise clients may terminate with 60
            days written notice. No early-termination penalties apply. Final month
            prorated if applicable.
          </Section>

          <Section title="4. What You Own">
            All data you provide — customer records, booking history, campaign results
            — is yours. Upon termination, we deliver a full data export within 5
            business days. We do not retain your data after 90 days of service
            termination.
          </Section>

          <Section title="5. Limitation of Liability">
            [Attorney-reviewed limitation of liability clause — required before launch.
            Wyoming LLC governing law applies.]
          </Section>

          <Section title="6. AI Tools Disclosure">
            Some services use AI-assisted processing. We disclose the use of AI tools
            where required by applicable law. AI-generated outputs are reviewed before
            deployment in any customer-facing context unless you have explicitly opted
            into automatic publishing.
          </Section>

          <Section title="7. Dispute Resolution">
            [Attorney-reviewed dispute resolution clause — required before launch.]
          </Section>

          <Section title="8. Governing Law">
            These Terms are governed by the laws of the State of Wyoming, without
            regard to conflict of law principles.
          </Section>

          <Section title="9. Contact">
            Questions about these Terms:{" "}
            <a href="mailto:hello@aureonbridge.com" className="text-gold hover:text-goldlight">
              hello@aureonbridge.com
            </a>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-navy mb-2">{title}</h2>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

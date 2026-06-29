import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Aureon Bridge LLC.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-xs text-grey mb-10">Last updated: [DATE — insert before launch]</p>

        {/* Launch blocker notice */}
        <div className="border border-dashed border-gold/40 bg-gold/5 px-5 py-4 mb-12">
          <p className="text-xs font-bold tracking-wider uppercase text-gold/70 mb-1">
            Placeholder — Requires Attorney-Reviewed Content Before Launch
          </p>
          <p className="text-xs text-grey/70 leading-relaxed">
            This page must cover: data collection practices, TCPA disclosure,
            CAN-SPAM compliance, MODPA data handling (Maryland Online Data
            Privacy Act, effective Oct 2025), FTC AI disclosure, cookie policy,
            and data retention. Reference the Legal Brief PDF.
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-grey">
          <Section title="1. Who We Are">
            Aureon Bridge LLC (&quot;Aureon Bridge,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an AI automation
            agency providing custom automation services to businesses. Our registered
            address is [Wyoming LLC registered address — add before launch].
          </Section>

          <Section title="2. Information We Collect">
            We collect information you provide directly, including: name, email address,
            business name, and responses to our intake questionnaire. We also collect
            standard analytics data (pages visited, time on site) through [analytics
            provider — add before launch].
          </Section>

          <Section title="3. How We Use Your Information">
            We use the information you provide to: schedule and prepare for consultation
            calls, send automated booking confirmations and reminders, and improve our
            services. We do not sell your personal information to third parties.
          </Section>

          <Section title="4. SMS and Email Communications (TCPA / CAN-SPAM)">
            By submitting our intake form, you consent to receive transactional
            communications related to your consultation booking. You may opt out at
            any time by replying STOP to any SMS or using the unsubscribe link in any
            email. [Full TCPA disclosure — attorney review required.]
          </Section>

          <Section title="5. Maryland Online Data Privacy Act (MODPA)">
            [MODPA-compliant disclosure required — effective October 2025. Attorney
            review required before launch.]
          </Section>

          <Section title="6. Data Retention">
            We retain your intake data for [period — define before launch]. You may
            request deletion of your data at any time by contacting{" "}
            <a href="mailto:info@aureonnbridge.com" className="text-gold hover:text-goldlight">
              info@aureonnbridge.com
            </a>
            .
          </Section>

          <Section title="7. AI Disclosure">
            Our booking intake uses AI-assisted processing to generate personalized
            responses. No automated decisions are made solely by AI without human
            review for consequential matters.
          </Section>

          <Section title="8. Contact">
            Questions about this policy:{" "}
            <a href="mailto:info@aureonnbridge.com" className="text-gold hover:text-goldlight">
              info@aureonnbridge.com
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

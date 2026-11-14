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
        <p className="text-xs text-grey mb-10">Last updated: November 14, 2026</p>


        <div className="prose prose-sm max-w-none space-y-8 text-grey">
          <Section title="1. Who We Are">
            Aureon Bridge LLC (&quot;Aureon Bridge,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an AI automation
            agency providing custom automation services to businesses. Aureon Bridge LLC is a
            Wyoming limited liability company. You can reach us at{" "}
            <a href="mailto:info@aureonnbridge.com" className="text-gold hover:text-goldlight">
              info@aureonnbridge.com
            </a> or (240) 660-4547.
          </Section>

          <Section title="2. Information We Collect">
            We collect information you provide directly, including: name, phone number,
            email address, business name, and what you tell us about your business in our forms or our
            website chat assistant. When you first arrive on our site, your browser keeps a
            note of how you found us (the page you landed on, the site that referred you, and
            any campaign tags in the link) for up to 30 days. It is sent to us only if you
            submit a form, so we know which of our marketing brought you in. We don&apos;t use
            advertising cookies.
          </Section>

          <Section title="3. How We Use Your Information">
            We use the information you provide to: schedule and prepare for consultation
            calls, send automated booking confirmations and reminders, and improve our
            services. We do not sell your personal information to third parties.
          </Section>

          <Section title="4. Text Messages and Email (TCPA / CAN-SPAM)">
            <strong className="text-navy">Text messages.</strong> If you give us your mobile
            number and agree to receive texts, we use it to reply to you, arrange and remind
            you of your consultation, and send occasional information about our services.
            Message frequency varies (up to 4 a month). Message and data rates may apply.
            Reply STOP to stop, HELP for help.
            <br />
            <br />
            <strong className="text-navy">
              No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes. Text messaging opt-in data and consent will
              not be shared with any third parties.
            </strong>{" "}
            Information may be shared with service providers who help us deliver messages
            and support (for example, our messaging carrier), only for that purpose.
            <br />
            <br />
            <strong className="text-navy">Email.</strong> You can stop our emails at any time
            with the unsubscribe link in any email.
          </Section>

          <Section title="5. Your Privacy Rights (including Maryland MODPA)">
            If you live in Maryland or another state with a consumer privacy law, you can ask
            us to confirm whether we hold personal data about you, to give you a copy, to
            correct it, or to delete it. You can also opt out of targeted advertising, the sale
            of your data, and profiling. We don&apos;t sell personal data or use it for targeted
            advertising. To make a request, email{" "}
            <a href="mailto:info@aureonnbridge.com" className="text-gold hover:text-goldlight">
              info@aureonnbridge.com
            </a>
            . We respond within 45 days.
          </Section>

          <Section title="6. Data Retention">
            We keep enquiry and consultation details for as long as we need them to follow up
            with you and run our business, and client data as set out in our Terms of Service.
            You may request deletion of your data at any time by contacting{" "}
            <a href="mailto:info@aureonnbridge.com" className="text-gold hover:text-goldlight">
              info@aureonnbridge.com
            </a>
            .
          </Section>

          <Section title="7. AI Disclosure">
            Our website chat assistant and our AI phone receptionist use AI to answer questions
            and take messages. No automated decisions are made solely by AI without human
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

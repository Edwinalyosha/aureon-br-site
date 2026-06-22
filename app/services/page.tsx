import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  MessageSquare,
  BarChart3,
  GitMerge,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Booking intake, automated follow-up, review management, operational dashboards, and CRM integration — built custom for your operation.",
};

const SERVICES = [
  {
    icon: <CalendarCheck size={28} />,
    title: "AI Booking Intake",
    what: "A conversational flow that handles inbound booking requests around the clock. Customers answer a few questions, get placed in your calendar, and receive confirmation — without a phone call or manual scheduling step on your end.",
    solves:
      "Missed inbound calls. Voicemails that don't get returned. Estimates that never get followed up because scheduling fell through the cracks.",
    get: "More confirmed appointments. Less phone tag. A booking process your customers can use at midnight on a Sunday.",
  },
  {
    icon: <Mail size={28} />,
    title: "Automated Follow-Up Sequences",
    what: "Email and SMS sequences that fire automatically after a visit, an estimate, or an inquiry. We design the messaging, set the timing, and manage delivery. You approve the content once. It runs.",
    solves:
      "Customers who go cold after an estimate. Low Google review volume. Lapsed clients who haven't been back in over a year.",
    get: "More reviews. More returned customers. More closed estimates. All without sending a single manual follow-up.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Review Management",
    what: "AI-assisted responses to your Google reviews — positive and negative — drafted in your voice. Review before posting, or set it to run automatically. Your call.",
    solves:
      "Unanswered reviews hurting your rating and ranking. The feeling that you should be responding but never have time.",
    get: "A consistent, professional presence on Google that builds trust and signals to search algorithms that you're an active, engaged business.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Operational Dashboard",
    what: "A single view of your business — booking volume, follow-up campaign performance, review scores, and revenue trends — all in one place, updated automatically.",
    solves:
      "Not knowing if your campaigns are working. Blind spots in your week-over-week numbers. Managing by gut feel instead of data.",
    get: "Clarity. One number for each metric that matters. The ability to catch a slow week before it becomes a slow month.",
  },
  {
    icon: <GitMerge size={28} />,
    title: "CRM & Tool Integration",
    what: "We connect your existing tools — or recommend and configure new ones — so customer data flows between systems without manual entry.",
    solves:
      "Duplicate data. Missed touchpoints because the follow-up tool didn't know the booking happened. Tools that each work fine individually but don't work together.",
    get: "A single source of truth for your customer relationships. Less switching tabs. Less copying and pasting. Less margin for human error.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="bg-navy text-white dot-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1
              className="hero-anim text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ animationDelay: "0ms" }}
            >
              What we build.
            </h1>
            <p
              className="hero-anim text-base sm:text-lg text-cream/80 leading-relaxed"
              style={{ animationDelay: "150ms" }}
            >
              Every system is custom-built for your operation. But here&apos;s what
              most systems include — and why each piece matters.
            </p>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#1A1A2E" to="#ffffff" />

      {/* ── Services list ─────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-0">
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 60}>
                <div className="py-12 border-b border-gray-100 last:border-b-0 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-16">
                  {/* Left: icon + title */}
                  <div>
                    <div className="text-gold mb-4">{svc.icon}</div>
                    <h2 className="text-xl font-bold text-navy">{svc.title}</h2>
                  </div>

                  {/* Right: details */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                        What it is
                      </p>
                      <p className="text-sm text-grey leading-relaxed">{svc.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                        What it solves
                      </p>
                      <p className="text-sm text-grey leading-relaxed">{svc.solves}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                        What you get
                      </p>
                      <p className="text-sm text-grey leading-relaxed">{svc.get}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#FAF7F0" />

      {/* ── Industries ────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <FadeUp>
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 max-w-xl">
              We work across verticals.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                name: "Auto Repair",
                note: "Primary vertical. Morgatech is live.",
                active: true,
              },
              {
                name: "Engineering Firms",
                note: "Active client. Systems in production.",
                active: true,
              },
              {
                name: "Real Estate",
                note: "Coming soon.",
                active: false,
              },
            ].map((ind, i) => (
              <FadeUp key={ind.name} delay={i * 80}>
                <div
                  className={`p-6 border-l-4 ${
                    ind.active ? "border-gold bg-white" : "border-gray-200 bg-white/60"
                  }`}
                >
                  <p
                    className={`text-base font-bold mb-1 ${
                      ind.active ? "text-navy" : "text-grey"
                    }`}
                  >
                    {ind.name}
                  </p>
                  <p className="text-xs text-grey/70">{ind.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#1A1A2E" flip />

      {/* ── Page CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeUp>
            <SectionLabel light>Get Started</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl mx-auto">
              Every system starts with a free audit.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              We don&apos;t quote before we understand your operation. Book a
              consultation and we&apos;ll map your workflows, identify the
              highest-impact automations, and give you a clear proposal with a
              fixed price.
            </p>
            <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Book a Free Consultation <ArrowRight size={16} className="ml-1" />
            </CTAButton>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

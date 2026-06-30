import type { NavItem, Service, PricingTier } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Services",      href: "/services" },
  { label: "How It Works",  href: "/#how-it-works" },
  { label: "Pricing",       href: "/pricing" },
];

export const FOOTER_NAV: NavItem[] = [
  { label: "Services",      href: "/services" },
  { label: "How It Works",  href: "/#how-it-works" },
  { label: "Pricing",       href: "/pricing" },
  { label: "For Shops",     href: "/for-shops" },
  { label: "Contact",       href: "/contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const SERVICES: Service[] = [
  {
    id: "booking",
    title: "Booking Automation",
    description:
      "AI-powered scheduling that handles inbound requests, confirms appointments, and sends reminders — without a single manual touchpoint.",
    icon: "calendar",
  },
  {
    id: "followup",
    title: "Automated Follow-Up",
    description:
      "Email and SMS sequences that nurture customers post-visit, request reviews, and re-engage lapsed clients on a schedule you set once and forget.",
    icon: "mail",
  },
  {
    id: "communication",
    title: "Customer Communication",
    description:
      "AI-assisted responses to inquiries and reviews, plus a conversational booking intake that feels human even when it's not.",
    icon: "message",
  },
  {
    id: "reporting",
    title: "Reporting & Visibility",
    description:
      "A single dashboard showing your booking rate, follow-up performance, review scores, and revenue trends — updated in real time.",
    icon: "chart",
  },
  {
    id: "crm",
    title: "CRM Integration",
    description:
      "Your customer data in one place, connected to every other tool we build. No more copying and pasting between systems.",
    icon: "network",
  },
];

// Ordered high-to-low for anchoring effect — Momentum anchors Pipeline as the obvious choice
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "momentum",
    name: "Momentum",
    tagline: "The full growth engine.",
    monthly: 849,
    regularPrice: 1097,
    description: "Everything in Pipeline, plus active marketing and personal follow-up that turns your customer base into recurring revenue.",
    features: [
      "Everything in Pipeline",
      "Personal phone follow-up on pricing inquiries (up to 15/month)",
      "Marketing list building from captured leads",
      "Advanced email campaigns and repeat business nurture sequences",
      "Social media content generation",
      "Monthly performance report — bookings, leads, coverage rate, reviews",
    ],
  },
  {
    id: "pipeline",
    name: "Pipeline",
    tagline: "Turn inquiries into bookings.",
    monthly: 499,
    regularPrice: 647,
    description: "Everything in Presence, plus the tools that convert interest into confirmed appointments and captured leads.",
    features: [
      "Everything in Presence",
      "Booking automation — customers book directly through chat or voice",
      "Email capture at point of pricing inquiry",
      "AI-generated price estimate delivered via email (inflation-adjusted)",
      "Structured call and chat summaries sent to owner and technician",
      "Automated follow-up sequences for unconverted leads",
      "Google Reviews automation — AI drafts, you approve before posting",
      "Question coverage tracking dashboard",
    ],
    highlighted: true,
  },
  {
    id: "presence",
    name: "Presence",
    tagline: "Always there. Never miss a signal.",
    monthly: 299,
    regularPrice: 397,
    description: "Your foundation. The AI handles every call and chat so no inquiry goes unanswered.",
    features: [
      "AI voice receptionist — answers every missed call, captures name, number, and reason",
      "Chatbot handles common questions (hours, services, basic pricing inquiries)",
      "Inquiry capture log — every call and chat recorded",
      "Call and chat transcript delivered to your inbox after each interaction",
    ],
  },
];

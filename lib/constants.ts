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

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "foundation",
    name: "Foundation",
    monthly: 300,
    description: "Automate the basics. Answer questions, book appointments, track coverage.",
    features: [
      "AI chatbot — handles common questions (hours, services, pricing)",
      "Booking automation via chatbot",
      "Question coverage tracking dashboard",
      "Email support — 72hr response",
    ],
  },
  {
    id: "expectation-management",
    name: "Expectation Management",
    monthly: 450,
    description: "Set the right expectations before the car even comes in.",
    features: [
      "Everything in Foundation",
      "Structured chat summaries sent to customer and technician",
      "Email capture at point of pricing inquiry",
      "AI-generated price range estimate delivered via email",
      "Clear variable language to reduce surprise at pickup",
    ],
  },
  {
    id: "marketing-followup",
    name: "Marketing & Follow-Up",
    monthly: 700,
    description: "Capture leads, build your reputation, and bring customers back.",
    features: [
      "Everything in Expectation Management",
      "Automated follow-up sequence for unconverted leads",
      "Google Reviews automation — AI drafts, you approve before posting",
      "Marketing list building",
      "Basic email campaigns",
    ],
    highlighted: true,
  },
  {
    id: "full-service",
    name: "Full Service",
    monthly: 1300,
    description: "The human layer on top of the automation. Your outsourced customer success team.",
    features: [
      "Everything in Marketing & Follow-Up",
      "Personal phone follow-up from Aureon team on pricing inquiries",
      "Humanized quote delivery — team member walks customer through estimate",
      "Advanced nurture sequences for repeat business",
      "Monthly performance report: coverage rate, bookings, leads, reviews",
    ],
  },
];

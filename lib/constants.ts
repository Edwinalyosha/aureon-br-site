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
    id: "starter",
    name: "Starter",
    setupFee: 700,
    monthly: 300,
    description: "One core automation to get started.",
    features: [
      "1 core automation",
      "Monthly async check-in",
      "Dashboard access (read-only)",
      "Email support — 72hr response",
      "1 tool integration",
    ],
  },
  {
    id: "starter-complete",
    name: "Starter Complete",
    setupFee: 1500,
    monthly: 450,
    description: "The full customer journey, automated.",
    features: [
      "2 core automations",
      "Monthly 30-min review call",
      "Dashboard access (read-only)",
      "Email support — 48hr response",
      "Up to 2 tool integrations",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    setupFee: 2500,
    monthly: 700,
    description: "Three integrated workflows. Built to run lean.",
    features: [
      "3 core automations",
      "Monthly 45-min optimization review",
      "Full dashboard + data export",
      "Priority email — 24hr response",
      "Up to 4 tool integrations",
      "Quarterly strategy session",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    setupFee: 5000,
    monthly: 1300,
    description: "A dedicated automation partner, not a vendor.",
    features: [
      "4+ custom automations",
      "Bi-weekly optimization cadence",
      "Full dashboard + custom reporting",
      "Dedicated Slack — 12hr SLA",
      "Unlimited tool integrations",
      "Monthly strategy session with founder",
    ],
  },
];

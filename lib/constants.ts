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
  { label: "Free Trial",    href: "/trial" },
  { label: "For Shops",     href: "/for-shops" },
  { label: "Forwarding Setup", href: "/forwarding" },
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

// ─── Business details (single source for footer, contact page, structured data) ─
export const SITE_URL = "https://aureonnbridge.com";

export const CONTACT = {
  email: "info@aureonnbridge.com",
  phoneDisplay: "(240) 660-4547",
  phoneHref: "tel:+12406604547",
  // TODO: add city, state and ZIP — leave addressLocality empty until confirmed.
  streetAddress: "6713 Ammendale Rd",
  addressLocality: "",
  hours: [
    { days: "Monday–Friday", time: "8:00 am – 6:00 pm" },
    { days: "Saturday", time: "9:00 am – 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  calendarUrl: "https://cal.com/edwin-ssekyondwa-pfuhrv/30min",
};

// TODO: set once the demo line is live, e.g. { display: "(240) 555-0100", href: "tel:+12405550100" }.
// The "Call our AI receptionist" section stays hidden while this is null.
export const DEMO_PHONE: { display: string; href: string } | null = null;

// The free trial is on Catch only. Higher plans get a 30-day money-back promise when they launch.
export const TRIAL = {
  days: 7,
  minutes: 60,
  plan: "Catch",
  headline: "Free 7-day trial of Catch. Up to 60 minutes of calls, no credit card.",
  finePrint:
    "Your AI answers on your current number through call forwarding. After 60 minutes, calls go back to your phone or voicemail. At the end, keep Catch at $99/month or we switch your forwarding back.",
};

export const CTA = {
  primary: { label: "Start a free 7-day trial", href: "/trial" },
  secondary: { label: "Book a free consultation", href: "/contact" },
};

// TODO: confirm the overage rate after the Vapi per-minute cost check.
export const OVERAGE_PER_MINUTE = 0.25;

export const PRICING_TERMS = [
  "No setup fees. Billed monthly in advance. Month-to-month, no long-term contract.",
  "Cancel with 30 days' notice (60 days for Momentum). You keep your data, exported on request.",
  "Rates for existing clients rise at most once a year, by no more than 5%, with 30 days' notice.",
];

// Low to high: Catch is the plan on sale today; each step up adds a bigger job.
// A plan moves from "coming-soon" to "available" only when the piece it depends on works:
//   Presence → Aureon Phone on Google Play · Pipeline → Tekmetric sync · Momentum → after Pipeline.
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "catch",
    name: "Catch",
    tagline: "Never lose a missed call.",
    monthly: 99,
    includedMinutes: 150,
    status: "available",
    availability: "Available now",
    noticeDays: 30,
    description:
      "Keeps your number and your phone. When you can't pick up, the AI answers and tells you who called and why.",
    features: [
      "AI answers missed and after-hours calls on your current number",
      "Takes the caller's name, number, vehicle and reason",
      "Summary and transcript emailed after every call",
      "Callback list in your dashboard",
      "Monthly missed-call report",
    ],
    highlighted: true,
  },
  {
    id: "presence",
    name: "Presence",
    tagline: "Your business phone, with the AI built in.",
    monthly: 249,
    includedMinutes: 300,
    status: "coming-soon",
    availability: "Coming soon · Android app",
    noticeDays: 30,
    description:
      "Everything in Catch, plus your business line rings in the Aureon Phone app, so you answer and call back from your business number anywhere.",
    features: [
      "Everything in Catch",
      "Aureon Phone app: your business line on your cell",
      "Call customers back from your business number",
      "Your calls and the AI's in one history",
      "Booking by phone and website chat",
      "Call summaries sent to your technician",
    ],
  },
  {
    id: "pipeline",
    name: "Pipeline",
    tagline: "Bring customers back. Runs itself.",
    monthly: 449,
    includedMinutes: 600,
    status: "coming-soon",
    availability: "Coming soon · Tekmetric shops first",
    noticeDays: 30,
    description:
      "Everything in Presence, plus reminders, reviews and campaigns that go out on their own. You approve with one tap.",
    features: [
      "Everything in Presence",
      "Syncs with your shop management system",
      "Service reminders by date and mileage",
      "Review requests after each repair, reply drafts you approve",
      "Follow-up with price shoppers who asked for it",
      "2 text and email campaigns a month, written for you",
    ],
  },
  {
    id: "momentum",
    name: "Momentum",
    tagline: "We do your marketing too.",
    monthly: 799,
    includedMinutes: 1000,
    status: "coming-soon",
    availability: "Coming soon · Limited to 3 shops",
    noticeDays: 60,
    description:
      "Everything in Pipeline, plus hands-on marketing from someone who knows your shop.",
    features: [
      "Everything in Pipeline",
      "Personal phone follow-up on up to 15 pricing inquiries a month",
      "Google Ads management and social media posts",
      "4 campaigns a month",
      "Monthly call with you",
    ],
  },
];

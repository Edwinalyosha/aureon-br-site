// Client-side helpers for sending leads to the dashboard's intake API (LEAD_API_URL).
// Attribution is first-touch: recorded on the first page of a visit, kept for 30 days, never
// overwritten, so a lead is credited to whatever brought the visitor in.

import { CONTACT, LEAD_API_URL } from "@/lib/constants";

const STORAGE_KEY = "ab_first_touch";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const URL_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export type Attribution = Partial<Record<(typeof URL_KEYS)[number] | "referrer" | "landing_page", string>>;

// Storage can throw (private mode, blocked site data); attribution is a nice-to-have, never a blocker.
function read(): { at: number; data: Attribution } | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; data: Attribution };
    return Date.now() - parsed.at < MAX_AGE_MS ? parsed : null;
  } catch {
    return null;
  }
}

/** Call on every page load; only the first landing within 30 days is recorded. */
export function recordFirstTouch() {
  if (typeof window === "undefined" || read()) return;
  const params = new URLSearchParams(window.location.search);
  const data: Attribution = {};
  for (const k of URL_KEYS) {
    const v = params.get(k);
    if (v) data[k] = v.slice(0, 500);
  }
  // A referrer from our own site isn't a source.
  if (document.referrer && !document.referrer.startsWith(window.location.origin)) {
    data.referrer = document.referrer.slice(0, 500);
  }
  data.landing_page = window.location.href.slice(0, 500);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* ignore */
  }
}

export function firstTouch(): Attribution {
  return read()?.data ?? {};
}

export interface LeadInput {
  name: string;
  business_name?: string;
  phone?: string;
  email?: string;
  message?: string;
  /** Which form or page: "contact-page", "pricing-cta". */
  campaign: string;
  /** One per form fill, so a retry or double click isn't counted twice. */
  submission_id: string;
  /** Honeypot: always empty for people. */
  company_website?: string;
}

const FALLBACK_ERROR = `Something went wrong. Please call ${CONTACT.phoneDisplay}.`;

/** Returns null on success, or a message written for the visitor. */
export async function submitLead(lead: LeadInput): Promise<string | null> {
  try {
    const res = await fetch(LEAD_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source: "website", attribution: firstTouch() }),
    });
    if (res.ok) return null;
    const j = (await res.json().catch(() => ({}))) as { error?: string };
    if (res.status >= 500) return `${j.error ?? "Something went wrong."} You can also call ${CONTACT.phoneDisplay}.`;
    return j.error ?? FALLBACK_ERROR;
  } catch {
    return FALLBACK_ERROR;
  }
}

export function newSubmissionId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `s${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  }
}

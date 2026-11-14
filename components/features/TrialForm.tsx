"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT, TRIAL } from "@/lib/constants";
import { newSubmissionId, submitLead } from "@/lib/lead";

const BUSINESS_TYPES = ["Auto repair shop", "Something else"];

type Status = "idle" | "submitting" | "done" | "error";

const inputClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold";

export function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const submissionId = useRef<string | null>(null);

  // A trial signup lands in the dashboard's Prospects list (lead intake), campaign "trial-signup".
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    submissionId.current ??= newSubmissionId();
    const err = await submitLead({
      name: data.name ?? "",
      business_name: data.businessName,
      phone: data.phone,
      email: data.email,
      message: [`Wants the free ${TRIAL.days}-day ${TRIAL.plan} trial.`, data.businessType, data.website]
        .filter(Boolean)
        .join(" "),
      campaign: "trial-signup",
      submission_id: submissionId.current,
      company_website: data.company_website ?? "",
    });
    setError(err);
    setStatus(err ? "error" : "done");
  }

  if (status === "done") {
    return (
      <div className="border-l-4 border-gold bg-cream px-6 py-6">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle2 size={22} className="text-gold flex-shrink-0" />
          <p className="text-base font-bold text-navy">You&apos;re in. We&apos;ll be in touch within one business day.</p>
        </div>
        <p className="text-sm text-grey leading-relaxed">
          We&apos;ll set up your AI receptionist and walk you through forwarding your
          calls. Your {TRIAL.days} days start once it&apos;s live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Your name</span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Business name</span>
          <input name="businessName" required autoComplete="organization" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Email</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Type of business</span>
          <select name="businessType" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Website (optional)</span>
          <input name="website" type="url" placeholder="https://" className={inputClass} />
        </label>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <p className="text-xs text-grey/80 leading-relaxed">
        {TRIAL.finePrint} By starting the trial you agree to our{" "}
        <Link href="/terms" className="text-gold hover:text-goldlight">
          Terms of Service
        </Link>
        .
      </p>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 px-4 py-3" role="alert">
          {error} Or email{" "}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
            {CONTACT.email}
          </a>{" "}
          and we&apos;ll start your trial.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight disabled:opacity-60 text-white text-sm font-semibold px-8 py-4 transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Start my free trial"} <ArrowRight size={15} />
      </button>
    </form>
  );
}

"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { newSubmissionId, submitLead } from "@/lib/lead";

type Status = "idle" | "submitting" | "done";

const inputClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-base sm:text-sm text-navy focus:outline-none focus:border-gold";

/** Short lead form. Posts to the dashboard's lead intake, so the lead lands in admin → Prospects. */
export function LeadForm({ campaign }: { campaign: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  // One id per form fill: a double click or retry isn't counted twice.
  const submissionId = useRef<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (!get("phone") && !get("email")) {
      setError("Please give a phone number or an email so we can reach you.");
      return;
    }
    submissionId.current ??= newSubmissionId();
    setStatus("submitting");
    setError(null);
    const err = await submitLead({
      name: get("name"),
      business_name: get("business_name"),
      phone: get("phone"),
      email: get("email"),
      message: get("message"),
      campaign,
      submission_id: submissionId.current,
      company_website: get("company_website"),
    });
    if (err) {
      setError(err);
      setStatus("idle");
    } else {
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div className="border-l-4 border-gold bg-cream px-6 py-6" role="status">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={22} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-base font-bold text-navy leading-snug">
            Thanks. Someone from the team will call you within one business day to set up
            your free consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Your name</span>
          <input name="name" required maxLength={100} autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">
            Business name <span className="font-normal text-grey/60">(optional)</span>
          </span>
          <input name="business_name" maxLength={100} autoComplete="organization" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Phone</span>
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={inputClass} />
        </label>
        <label className="block">
          <span className="block text-xs font-semibold text-navy mb-1.5">Email</span>
          <input name="email" type="email" maxLength={255} autoComplete="email" className={inputClass} />
        </label>
      </div>
      <p className="text-xs text-grey/70 -mt-1">A phone number or an email, whichever you prefer.</p>
      <label className="block">
        <span className="block text-xs font-semibold text-navy mb-1.5">
          What do you need help with? <span className="font-normal text-grey/60">(optional)</span>
        </span>
        <textarea name="message" rows={4} maxLength={2000} className={inputClass} />
      </label>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight disabled:opacity-60 text-white text-sm font-semibold px-8 py-4 transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Request a free consultation"}
        {status !== "submitting" && <ArrowRight size={15} />}
      </button>
    </form>
  );
}

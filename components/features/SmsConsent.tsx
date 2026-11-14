import Link from "next/link";
import { SMS_CONSENT_TEXT } from "@/lib/constants";

/**
 * Texting opt-in (A2P 10DLC). Optional and never ticked by default: carriers reject the texting
 * registration otherwise. The wording must match app.aureonnbridge.com/get-started
 * (aureon repo, lib/sms-consent-text.ts) word for word.
 */
export function SmsConsent() {
  return (
    <div className="flex items-start gap-3">
      <input
        id="sms_consent"
        name="sms_consent"
        type="checkbox"
        value="yes"
        className="mt-0.5 h-4 w-4 flex-shrink-0 accent-gold"
      />
      <label htmlFor="sms_consent" className="text-xs text-grey/80 leading-relaxed">
        {SMS_CONSENT_TEXT}{" "}
        <Link href="/privacy" target="_blank" className="underline hover:text-navy">
          Privacy Policy
        </Link>
        {" · "}
        <Link href="/terms" target="_blank" className="underline hover:text-navy">
          Terms
        </Link>
      </label>
    </div>
  );
}

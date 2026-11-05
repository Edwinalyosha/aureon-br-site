"use client";

import { Printer } from "lucide-react";

/** Opens the browser's print dialog. Hidden on the printed page itself. */
export function PrintButton({ label = "Print this page" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white text-sm font-semibold px-5 py-2.5 transition-colors"
    >
      <Printer size={15} /> {label}
    </button>
  );
}

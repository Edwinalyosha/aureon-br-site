"use client";

import { useEffect } from "react";
import { recordFirstTouch } from "@/lib/lead";

/** Records where a visitor came from on the page they land on. Renders nothing. */
export function FirstTouch() {
  useEffect(() => {
    recordFirstTouch();
  }, []);
  return null;
}

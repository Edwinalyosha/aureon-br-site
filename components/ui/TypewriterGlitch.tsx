"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterGlitchProps {
  text: string;
  /** Milliseconds between each character */
  speed?: number;
  /** 0–1 probability that a character briefly glitches before settling */
  glitchChance?: number;
  /** Milliseconds before the first character fires */
  startDelay?: number;
  className?: string;
}

// Characters used for the brief glitch flash
const GLITCH_POOL = "!<>-_\\/[]{}—=+*^?#@$%&~";

export function TypewriterGlitch({
  text,
  speed = 38,
  glitchChance = 0.12,
  startDelay = 350,
  className,
}: TypewriterGlitchProps) {
  const [resolved, setResolved] = useState("");
  const [glitchChar, setGlitchChar] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    // Skip animation entirely if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setResolved(text);
      setDone(true);
      return;
    }

    function typeNext() {
      const i = indexRef.current;
      if (i >= text.length) {
        setDone(true);
        return;
      }

      const real = text[i];

      if (Math.random() < glitchChance) {
        // Flash a random glyph for 55–95 ms before the real character settles
        const fake = GLITCH_POOL[Math.floor(Math.random() * GLITCH_POOL.length)];
        setGlitchChar(fake);

        setTimeout(() => {
          setGlitchChar(null);
          setResolved((prev) => prev + real);
          indexRef.current++;
          setTimeout(typeNext, speed);
        }, 55 + Math.random() * 40);
      } else {
        setResolved((prev) => prev + real);
        indexRef.current++;
        setTimeout(typeNext, speed);
      }
    }

    const t = setTimeout(typeNext, startDelay);
    return () => clearTimeout(t);
    // deps intentionally omitted — runs once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /*
     * The outer span carries the full text as aria-label so screen readers
     * announce the complete sentence immediately, ignoring the animation.
     */
    <span className={className} aria-label={text} role="text">
      <span aria-hidden="true">
        {resolved}
        {/* Glitch flash — gold so it reads as an error/correction */}
        {glitchChar !== null && (
          <span className="text-goldlight opacity-75">{glitchChar}</span>
        )}
        {/* Blinking cursor — disappears when typing completes */}
        {!done && <span className="typewriter-cursor" aria-hidden="true" />}
      </span>
    </span>
  );
}

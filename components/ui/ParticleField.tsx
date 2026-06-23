"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export function ParticleField() {
  const [mounted, setMounted] = useState(false);
  const [cfg, setCfg] = useState({ count: 0, interactive: false });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  const glowRef      = useRef<HTMLDivElement>(null);
  const mouse        = useRef({ x: 0, y: 0 });
  const overHero     = useRef(false);

  useEffect(() => {
    setMounted(true);
    const mobile  = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCfg({
      count:       reduced ? 0 : mobile ? 32 : 92,
      interactive: !mobile && !reduced,
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const init = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loaded = useCallback(async (container: any) => {
    containerRef.current = container;
  }, []);

  /* ── Convergence glow ───────────────────────────────────────── */
  useEffect(() => {
    if (!cfg.interactive || !mounted) return;
    const glow   = glowRef.current;
    if (!glow) return;
    const heroEl = glow.parentElement;

    const onMove = (e: MouseEvent) => {
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      // Coordinates relative to the hero canvas
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.current   = { x, y };
      glow.style.left = x + "px";
      glow.style.top  = y + "px";
    };

    const onEnter = () => { overHero.current = true; };
    const onLeave = () => {
      overHero.current   = false;
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    heroEl?.addEventListener("mouseenter", onEnter);
    heroEl?.addEventListener("mouseleave", onLeave);

    const NEAR_PX  = 55;   // convergence radius (px)
    const MIN_CNT  = 6;    // particles needed before glow appears

    const interval = setInterval(() => {
      if (!overHero.current || !containerRef.current) return;
      const particles = containerRef.current.particles?.array as
        Array<{ position: { x: number; y: number } }> | undefined;
      if (!particles?.length) return;

      const { x, y } = mouse.current;
      const r2 = NEAR_PX * NEAR_PX;
      let nearby = 0;

      for (const p of particles) {
        const dx = p.position.x - x;
        const dy = p.position.y - y;
        if (dx * dx + dy * dy < r2) nearby++;
      }

      if (nearby >= MIN_CNT) {
        const extra   = Math.min(nearby - MIN_CNT, 12);
        const opacity = Math.min(0.90, 0.45 + extra * 0.04);
        const size    = 160 + extra * 10;
        glow.style.opacity = opacity.toFixed(2);
        glow.style.width   = size + "px";
        glow.style.height  = size + "px";
      } else {
        glow.style.opacity = "0";
      }
    }, 80);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
      heroEl?.removeEventListener("mouseenter", onEnter);
      heroEl?.removeEventListener("mouseleave", onLeave);
    };
  }, [cfg.interactive, mounted]);

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: cfg.count, density: { enable: true, area: 900 } },
      // goldlight (#D4AF37) dominant for particles + cream for variety
      color: { value: ["#D4AF37", "#D4AF37", "#FAF7F0"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.55,
        random: { enable: true, minimumValue: 0.25 },
        animation: { enable: true, speed: 0.4, minimumValue: 0.15, sync: false },
      },
      size: { value: { min: 1, max: 2.5 }, random: { enable: true } },
      links: {
        enable: true,
        distance: 160,
        color: "#D4AF37", // goldlight for the constellation lines
        opacity: 0.22,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.45,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      // "canvas" is more reliable than "window" on Chromium-based browsers (Edge, Chrome)
      detectsOn: "canvas",
      events: {
        onHover: { enable: cfg.interactive, mode: "attract" },
        onClick:  { enable: true, mode: "push" },
        resize:   true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          factor: 3,
          maxSpeed: 40,
        },
        push: { quantity: 3 },
      },
    },
  }), [cfg]);

  if (!mounted || cfg.count === 0) return null;

  return (
    <>
      {/*
       * Convergence glow — hot coal/lamp: bright amber-white center,
       * fades through gold, then a barely-there dark ring just outside
       * the bright zone to create depth (shadow side of the light source).
       */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position:     "absolute",
          pointerEvents: "none",
          borderRadius: "50%",
          width:        "180px",
          height:       "180px",
          background: `radial-gradient(
            circle,
            rgba(255,210,90,0.72)  0%,
            rgba(212,175,55,0.50)  20%,
            rgba(184,134,11,0.22)  44%,
            rgba(12,8,28,0.09)     66%,
            transparent            84%
          )`,
          transform:  "translate(-50%, -50%)",
          transition: "opacity 0.45s ease, width 0.35s ease, height 0.35s ease",
          opacity:    "0",
          zIndex:     2,
        }}
      />

      <Particles
        id="tsparticles"
        init={init}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        loaded={loaded as any}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options={options as any}
      />
    </>
  );
}

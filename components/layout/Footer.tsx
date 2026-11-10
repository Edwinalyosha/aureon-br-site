import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV, FOOTER_LEGAL, CONTACT, CTA, CUSTOM_BUILDS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex flex-col items-start gap-1.5 group">
              <Image
                src="/logo-li.png"
                alt=""
                width={895}
                height={928}
                className="h-20 w-auto"
              />
              <span
                className="text-base tracking-widest uppercase text-white group-hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-nova-square, sans-serif)" }}
              >
                Aureon Bridge
              </span>
              <span
                className="text-[10px] tracking-wider text-gold"
                style={{ fontFamily: "var(--font-michroma, sans-serif)" }}
              >
                automations that scale
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pt-1">
              <Link href={CUSTOM_BUILDS.href} className="hover:text-white transition-colors">
                Custom AI automation for independent businesses.
              </Link>
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              Get Started
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
              <address className="not-italic text-sm text-gray-400 leading-relaxed">
                {CONTACT.streetAddress}
                {CONTACT.addressLocality && <><br />{CONTACT.addressLocality}</>}
              </address>
              <ul className="text-xs text-gray-400 space-y-1">
                {CONTACT.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
              </ul>
              <Link
                href={CTA.primary.href}
                className="inline-block bg-gold hover:bg-goldlight text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                {CTA.primary.label} →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 Aureon Bridge LLC. All rights reserved.</p>
          <p>Serving the DMV and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

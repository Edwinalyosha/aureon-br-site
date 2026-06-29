import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV, FOOTER_LEGAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt="Aureon Bridge"
                width={36}
                height={36}
                className="w-8 h-8"
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Aureon Bridge</span>
                <span className="text-[10px] font-medium tracking-widest text-gold uppercase mt-0.5">
                  we automate, you scale
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Custom AI automation for independent businesses.
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
                href="mailto:hello@aureonbridge.com"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                hello@aureonbridge.com
              </a>
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-goldlight text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                Book a Call →
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

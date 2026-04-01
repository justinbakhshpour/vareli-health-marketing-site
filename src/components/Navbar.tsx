"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = pathname === "/" || pathname === "/about";
  const isDark = hasDarkHero && !scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isDark
          ? "bg-transparent"
          : scrolled
          ? "bg-white shadow-[0_1px_0_0_#e4e4e7]"
          : "bg-white/90 backdrop-blur-sm shadow-[0_1px_0_0_#f4f4f5]"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-[60px]"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className={`text-sm font-bold tracking-tight transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2 rounded ${
              isDark
                ? "text-white hover:text-zinc-300"
                : "text-zinc-900 hover:text-[#0F6674]"
            }`}
            aria-label="Vareli Health — home"
          >
            Vareli Health
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2 ${
                    isDark
                      ? "text-zinc-300 hover:text-white hover:bg-white/8"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-[13px] font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded ${
                isDark
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className={`md:hidden p-2 -mr-2 rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] ${
              isDark
                ? "text-zinc-400 hover:text-white hover:bg-white/8"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line
                    x1="3"
                    y1="3"
                    x2="15"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="3"
                    x2="3"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="2"
                    y1="5.5"
                    x2="16"
                    y2="5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="9.5"
                    x2="16"
                    y2="9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="13.5"
                    x2="16"
                    y2="13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-zinc-200"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all duration-150"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

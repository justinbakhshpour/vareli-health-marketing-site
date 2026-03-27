import Link from "next/link";

const footerNav = {
  Platform: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="block text-[15px] font-semibold tracking-tight text-zinc-900 hover:text-zinc-700 transition-colors duration-150 mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
            >
              Vareli Health
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The institutional control layer for autonomous robotic labor in
              hospitals.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {Object.entries(footerNav).map(([category, links]) => (
              <nav key={category} aria-label={`${category} links`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                  {category}
                </p>
                <ul className="space-y-3" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Vareli Health, Inc. All rights
            reserved.
          </p>
          <a
            href="mailto:hello@varelihealth.com"
            className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
          >
            hello@varelihealth.com
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const contactInfo = [
  { label: "Email", value: "hello@varelihealth.com", href: "mailto:hello@varelihealth.com" },
  { label: "Response time", value: "Within one business day", href: null },
  { label: "Format", value: "Tailored to your environment", href: null },
];

export default function HomeCTA() {
  return (
    <section
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-3">
              Get in Touch
            </p>
            <h2
              id="cta-heading"
              className="text-[28px] sm:text-[36px] font-bold text-zinc-900 leading-[1.15] tracking-[-0.02em] mb-5"
            >
              Ready to govern your robotic operations?
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-md">
              We would like to understand your environment before we show you ours.
              Tell us about your fleet, your governance posture, and what you are
              trying to solve. We will follow up within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-[#0F6674] hover:bg-[#0D5A68] active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
            >
              Request a Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: Contact details panel */}
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < contactInfo.length - 1 ? "border-b border-zinc-100" : ""
                }`}
              >
                <span className="text-[12px] font-semibold uppercase tracking-widest text-zinc-400">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-zinc-800 hover:text-[#0F6674] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[14px] font-medium text-zinc-600">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

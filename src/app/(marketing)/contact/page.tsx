import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo or get in touch with the Vareli Health team. We would like to understand your environment before we show you ours.",
  openGraph: {
    title: "Contact Vareli Health",
    description:
      "Request a demo or talk to the team about governing your autonomous robotic fleet.",
    url: "https://varelihealth.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0F6674] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <div id="main-content" className="pt-24 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Page header */}
          <div className="mb-14 pb-10 border-b border-zinc-200">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-3">
              Get in Touch
            </p>
            <h1 className="text-[40px] sm:text-[48px] font-extrabold text-zinc-900 leading-[1.06] tracking-[-0.03em] max-w-2xl">
              We would like to understand your environment before we show you ours.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            {/* Left: Context */}
            <div className="lg:sticky lg:top-24">
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-10">
                Tell us about your fleet, your current governance posture, and
                what you are trying to solve. We will put together a session
                specific to your situation — not a generic walkthrough.
              </p>

              {/* Info items */}
              <div className="space-y-1">
                {[
                  {
                    label: "Email",
                    value: "justin@varelihealth.com",
                    href: "mailto:justin@varelihealth.com",
                  },
                  { label: "Response time", value: "Within one business day", href: null },
                  { label: "Session type", value: "Tailored to your environment", href: null },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3.5 border-b border-zinc-100"
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-zinc-400">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] font-medium text-zinc-700 hover:text-[#0F6674] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[13px] font-medium text-zinc-500">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form in card */}
            <div className="bg-white rounded-xl border border-zinc-200 p-8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-8">
                <h2 className="text-[18px] font-bold text-zinc-900 mb-1.5">
                  Send us a message
                </h2>
                <p className="text-[13px] text-zinc-500">
                  All fields marked with <span className="text-[#0F6674]">*</span> are required.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

const checks = [
  { label: "Active duty hours", value: "08:00–20:00" },
  { label: "Controlled substance protocol", value: "enabled" },
  { label: "Patient record match", value: "Room 3E-12" },
  { label: "Clearance level", value: "sufficient" },
];

function AuthorizationTrace() {
  return (
    <div className="select-none relative" aria-hidden="true">
      {/* Depth card behind */}
      <div className="absolute -bottom-3 left-5 right-5 -z-10 h-14 rounded-2xl bg-zinc-900 border border-zinc-800/60 opacity-50" />

      {/* Main trace panel */}
      <div
        className="rounded-2xl border border-zinc-700/60 overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0f1117 0%, #0d1014 100%)",
          boxShadow:
            "0 32px 80px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
              style={{ boxShadow: "0 0 8px rgba(52,211,153,0.7)" }}
            />
            <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-[0.15em]">
              Authorization Trace
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-600">
            REQ-7F4A2C1B · 14:23:07.042Z
          </span>
        </div>

        {/* Body */}
        <div className="px-5 py-5 space-y-5 font-mono">
          {/* Robot + Action */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.12em] w-24 flex-shrink-0 leading-[1.8]">
                Robot Unit
              </span>
              <span className="text-[12px] text-zinc-300 leading-relaxed">
                Nurse Bot #12 · Floor 3-East
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.12em] w-24 flex-shrink-0 leading-[1.8]">
                Requested
              </span>
              <span className="text-[12px] text-zinc-300 leading-relaxed">
                Enter restricted medication
                <br />
                storage — Ward C
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800/70" />

          {/* Policy evaluation */}
          <div>
            <div className="text-[9px] font-mono font-semibold text-zinc-600 uppercase tracking-[0.18em] mb-3.5">
              Policy Evaluation
            </div>
            <div className="space-y-2.5">
              {checks.map((check) => (
                <div key={check.label} className="flex items-center gap-3">
                  {/* checkmark icon */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="6"
                      fill="rgba(52,211,153,0.1)"
                      stroke="rgba(52,211,153,0.35)"
                    />
                    <path
                      d="M4 6.5L5.8 8.3L9 5"
                      stroke="#34d399"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[11px] text-zinc-400 flex-1 leading-none">
                    {check.label}
                  </span>
                  <span className="text-[10px] text-zinc-600 leading-none tabular-nums">
                    {check.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800/70" />

          {/* Decision */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                style={{ boxShadow: "0 0 8px rgba(52,211,153,0.7)" }}
              />
              <span className="text-[13px] font-mono font-bold text-emerald-400 tracking-[0.06em]">
                AUTHORIZED
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-600 tabular-nums">
              4.2ms
            </span>
          </div>

          {/* Audit record */}
          <div
            className="rounded-lg px-4 py-3 flex items-center justify-between border border-zinc-800/60"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <span className="text-[10px] font-mono text-zinc-500">
              Audit record · AUD-9X2B3F1
            </span>
            <span className="text-[10px] font-mono font-bold text-[#2AB5C9] uppercase tracking-[0.12em]">
              Immutable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { value: "< 5ms", label: "Authorization latency" },
  { value: "Zero-trust", label: "Architecture model" },
  { value: "Full coverage", label: "Every robot action" },
];

export default function Hero() {
  return (
    <section
      className="bg-zinc-950 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3.5 py-1.5 mb-8">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#2AB5C9] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                Infrastructure Software for Hospitals
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[46px] sm:text-[56px] lg:text-[62px] font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-6"
            >
              The institutional control layer for autonomous robotic labor.
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] text-zinc-400 leading-[1.7] mb-10 max-w-lg">
              Hospitals are deploying autonomous robots. Vareli governs how they
              operate — authorizing every action, enforcing institutional policy,
              and maintaining the operational record your organization requires.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="mailto:justin@varelihealth.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-[#0F6674] hover:bg-[#138394] active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Request a Demo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#why-now"
                className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-zinc-300 hover:text-white hover:bg-white/8 active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                See why it matters
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-zinc-800">
              {stats.map((stat, i) => (
                <div key={stat.value} className="flex items-start gap-4">
                  {i > 0 && (
                    <div className="w-px h-8 bg-zinc-800 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-[14px] font-bold text-white tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-zinc-600 mt-0.5 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Authorization Trace */}
          <div className="hidden lg:block">
            <AuthorizationTrace />
          </div>
        </div>
      </div>
    </section>
  );
}

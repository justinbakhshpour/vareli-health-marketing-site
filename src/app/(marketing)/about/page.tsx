import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vareli Health is building the institutional control layer for autonomous robotic labor — infrastructure software that makes hospitals governable as they scale autonomous operations.",
  openGraph: {
    title: "About Vareli Health",
    description:
      "We are building the infrastructure that makes autonomous robotic labor in hospitals governable, accountable, and safe to scale.",
    url: "https://varelihealth.com/about",
  },
};

/* ─── Flow Diagram ──────────────────────────────────────────── */

function ArrowDown() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <div className="w-px h-4 bg-zinc-800" />
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path
          d="M1 1L5 5L9 1"
          stroke="#3f3f46"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="select-none relative" aria-hidden="true">
      {/* depth card */}
      <div className="absolute -bottom-3 left-5 right-5 -z-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800/50 opacity-40" />

      <div
        className="rounded-2xl border border-zinc-700/50 overflow-hidden font-mono"
        style={{
          background: "linear-gradient(145deg, #0f1117 0%, #0d1014 100%)",
          boxShadow:
            "0 24px 64px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/40">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#2AB5C9]"
              style={{ boxShadow: "0 0 6px rgba(42,181,201,0.6)" }}
            />
            <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-[0.16em]">
              Control Flow
            </span>
          </div>
          <span className="text-[9px] text-zinc-700">Vareli · Runtime</span>
        </div>

        <div className="px-5 py-5">
          {/* Node 1: Robot Request */}
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-lg px-4 py-3.5">
            <div className="text-[9px] text-zinc-600 uppercase tracking-[0.14em] mb-1.5">
              Robot Request
            </div>
            <div className="text-[12px] text-zinc-300">
              Nurse Bot #12 · Floor 3-East
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Enter restricted medication storage
            </div>
          </div>

          <ArrowDown />

          {/* Node 2: Policy Engine */}
          <div className="border border-[#0F6674]/30 bg-[#0F6674]/6 rounded-lg px-4 py-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <div className="text-[9px] text-[#2AB5C9] uppercase tracking-[0.14em]">
                Policy Engine
              </div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#0F6674]/60"
                  />
                ))}
              </div>
            </div>
            <div className="text-[11px] text-zinc-400">
              Evaluating 4 active rules
            </div>
          </div>

          <ArrowDown />

          {/* Node 3: Decision split */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-emerald-500/8 border border-emerald-500/25 rounded-lg px-3 py-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                  style={{ boxShadow: "0 0 6px rgba(52,211,153,0.7)" }}
                />
                <span className="text-[9px] font-bold text-emerald-400 tracking-[0.08em]">
                  AUTHORIZED
                </span>
              </div>
              <div className="text-[9px] text-zinc-600">Action permitted</div>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0" />
                <span className="text-[9px] font-bold text-zinc-600 tracking-[0.08em]">
                  DENIED
                </span>
              </div>
              <div className="text-[9px] text-zinc-700">Blocked · Escalated</div>
            </div>
          </div>

          <ArrowDown />

          {/* Node 4: Audit Record */}
          <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-lg px-4 py-3.5 flex items-center justify-between gap-3">
            <div>
              <div className="text-[9px] text-zinc-600 uppercase tracking-[0.14em] mb-1.5">
                Audit Record
              </div>
              <div className="text-[11px] text-zinc-400">
                AUD-9X2B3F1 · Structured · Queryable
              </div>
            </div>
            <span className="flex-shrink-0 text-[8px] font-bold text-[#2AB5C9] uppercase tracking-[0.14em] border border-[#2AB5C9]/25 rounded px-2 py-1 bg-[#2AB5C9]/6">
              Immutable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────── */

const problems = [
  {
    number: "01",
    title: "Robots are becoming institutional actors",
    body: "They operate across departments, interact with patients, and make real-time decisions. The operational footprint of an autonomous robot is institutional — not confined to a single workflow.",
  },
  {
    number: "02",
    title: "No system defines authority",
    body: "What a robot is allowed to do is unclear, implicit, and inconsistent. Authorization lives in configurations, tribal knowledge, and deployment defaults — not in a managed institutional policy.",
  },
  {
    number: "03",
    title: "No audit trail exists",
    body: "When something goes wrong, there is no structured record of the authorization decisions made. Investigations are incomplete before they begin. Regulators and insurers have no document to examine.",
  },
];

const capabilities = [
  "Authorization before execution",
  "Policy-driven decisions",
  "Real-time enforcement",
  "Full auditability",
];

const principles = [
  {
    title: "Authorization before action",
    description: "Nothing executes without explicit approval.",
  },
  {
    title: "Infrastructure, not application",
    description: "We are a foundational layer, not a workflow tool.",
  },
  {
    title: "Audit is a first-class output",
    description: "Every action produces a structured, queryable record.",
  },
  {
    title: "Vendor-neutral by design",
    description: "We govern all robots, not just one platform.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <div id="main-content">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="bg-zinc-950 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-labelledby="about-hero-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3.5 py-1.5 mb-8">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#2AB5C9] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">
                About
              </span>
            </div>

            <h1
              id="about-hero-heading"
              className="text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-8 max-w-3xl"
            >
              We are building the control layer for autonomous systems.
            </h1>

            <div className="space-y-2 max-w-2xl">
              <p className="text-[17px] text-zinc-400 leading-[1.7]">
                Autonomous robots are entering hospitals faster than
                institutions can govern them.
              </p>
              <p className="text-[17px] text-zinc-400 leading-[1.7]">
                We build the infrastructure that defines what they are allowed
                to do.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ──────────────────────────────────────── */}
        <section
          className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
          aria-labelledby="about-problem-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-4">
                The Problem
              </p>
              <h2
                id="about-problem-heading"
                className="text-[26px] sm:text-[32px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em] max-w-xl"
              >
                Institutions are not ready for the systems they are already
                deploying.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {problems.map((card) => (
                <article
                  key={card.number}
                  className="rounded-xl border border-zinc-200 bg-[#F9F8F6] p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-150"
                >
                  <div className="text-[11px] font-mono font-semibold text-zinc-300 uppercase tracking-widest mb-5 tabular-nums">
                    {card.number}
                  </div>
                  <h3 className="text-[14px] font-semibold text-zinc-900 leading-[1.5] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ────────────────────────────────────── */}
        <section
          className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F8F6] border-t border-zinc-100"
          aria-labelledby="build-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left: text */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-4">
                  What We Build
                </p>
                <h2
                  id="build-heading"
                  className="text-[26px] sm:text-[32px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em] mb-6"
                >
                  The institutional control layer.
                </h2>
                <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
                  Vareli sits between your hospital and its autonomous systems —
                  authorizing actions, enforcing policy, and maintaining a
                  complete operational record.
                </p>

                {/* Capability list */}
                <div className="space-y-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-3">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r="7"
                          fill="rgba(15,102,116,0.08)"
                          stroke="rgba(15,102,116,0.3)"
                        />
                        <path
                          d="M4.5 7.5L6.5 9.5L10.5 5.5"
                          stroke="#0F6674"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[14px] font-medium text-zinc-700">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: flow diagram */}
              <div className="lg:pt-8">
                <FlowDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE THINK ─────────────────────────────────────── */}
        <section
          className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-100"
          aria-labelledby="principles-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                How We Think
              </p>
              <h2
                id="principles-heading"
                className="text-[26px] sm:text-[32px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em]"
              >
                The principles behind how we build.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
              {principles.map((p) => (
                <article
                  key={p.title}
                  className="bg-white p-7 hover:bg-[#F9F8F6] transition-colors duration-150 group"
                >
                  <div
                    className="w-5 h-px bg-[#0F6674] mb-5 group-hover:w-8 transition-all duration-200"
                    aria-hidden="true"
                  />
                  <h3 className="text-[15px] font-semibold text-zinc-900 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {p.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY NOW ──────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-labelledby="why-now-about-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2AB5C9] mb-8">
              Why Now
            </p>
            <div className="max-w-3xl space-y-3 mb-10">
              <p className="text-[32px] sm:text-[40px] font-bold text-white leading-[1.15] tracking-[-0.025em]">
                Hospitals are already deploying robots.
              </p>
              <p className="text-[32px] sm:text-[40px] font-bold text-zinc-400 leading-[1.15] tracking-[-0.025em]">
                Governance is not keeping pace.
              </p>
            </div>
            <div className="w-12 h-px bg-zinc-800 mb-8" aria-hidden="true" />
            <p className="text-[16px] text-zinc-500 leading-relaxed max-w-xl">
              The institutions that build this layer early will define how
              autonomy is safely adopted. The ones that wait will inherit the
              problem at scale.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
          aria-labelledby="about-cta-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2
                  id="about-cta-heading"
                  className="text-[26px] sm:text-[34px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.025em] mb-5"
                >
                  Ready to govern autonomous operations?
                </h2>
                <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
                  Tell us about your fleet, your governance posture, and what
                  you are trying to solve. We will follow up within one
                  business day.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <a
                    href="mailto:justin@varelihealth.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-[#0F6674] hover:bg-[#138394] active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
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
                    href="mailto:justin@varelihealth.com"
                    className="inline-flex items-center px-5 py-2.5 text-[14px] font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2"
                  >
                    justin@varelihealth.com
                  </a>
                </div>
              </div>

              {/* Right: info panel */}
              <div className="bg-[#F9F8F6] rounded-xl border border-zinc-200 overflow-hidden">
                {[
                  { label: "Response time", value: "Within one business day" },
                  { label: "Session type", value: "Tailored to your environment" },
                  { label: "Email", value: "justin@varelihealth.com", href: "mailto:justin@varelihealth.com" },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i < arr.length - 1 ? "border-b border-zinc-200" : ""
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] font-medium text-zinc-700 hover:text-[#0F6674] transition-colors duration-150"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[13px] font-medium text-zinc-600">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

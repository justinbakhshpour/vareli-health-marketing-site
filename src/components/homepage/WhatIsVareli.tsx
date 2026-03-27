const capabilities = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2L15 5V9C15 12.3 12.4 15.4 9 16C5.6 15.4 3 12.3 3 9V5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6.5 9L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Authorization Engine",
    description:
      "Every robot action requires explicit authorization before it executes. Vareli evaluates each request against institutional policy in real time — granting, denying, or escalating based on role, location, task type, and context.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 6H12M6 9H12M6 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Policy Management",
    description:
      "Define the rules that govern what each robot role can do, where, and under what conditions. Policies are versioned, peer-reviewed, and enforced automatically — no manual intervention at the point of execution.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Fleet Control",
    description:
      "A live operational view across every robot in your deployment. Override any unit, pause a task, issue an emergency stop, or revoke credentials — all from a single control plane, in real time.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2C5.1 2 2 5.1 2 9C2 12.9 5.1 16 9 16C12.9 16 16 12.9 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2L14 4L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Audit and Compliance",
    description:
      "Every authorization decision, policy change, and operational event is logged with a timestamp and full context. Audit trails are structured, queryable, and exportable — ready for internal review or regulatory production.",
  },
];

export default function WhatIsVareli() {
  return (
    <section
      id="platform"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 bg-[#F9F8F6]"
      aria-labelledby="platform-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 mb-14 items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-4">
              The Platform
            </p>
            <h2
              id="platform-heading"
              className="text-[28px] sm:text-[34px] font-bold text-zinc-900 leading-[1.18] tracking-[-0.02em]"
            >
              Infrastructure software
              <br />for governing autonomous fleets.
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              Vareli sits between your hospital and its autonomous robot fleet —
              governing what robots are permitted to do before they do it,
              and producing the institutional record required after the fact.
              It integrates via SDK, REST API, or gRPC. No replacement of existing systems.
            </p>
          </div>
        </div>

        {/* Capability cards — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="bg-white p-7 hover:bg-[#F9F8F6] transition-colors duration-150 group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#0F6674]/8 flex items-center justify-center text-[#0F6674] mb-5 group-hover:bg-[#0F6674]/12 transition-colors duration-150">
                {cap.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-zinc-900 mb-2.5 leading-snug">
                {cap.title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {cap.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

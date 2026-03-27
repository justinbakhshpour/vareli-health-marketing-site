const steps = [
  {
    number: "01",
    title: "Define governance policies",
    description:
      "Specify what each robot role can do — by task type, location, time window, and operational context. Policies are versioned and reviewed before they take effect.",
  },
  {
    number: "02",
    title: "Deploy across your fleet",
    description:
      "Integrate via SDK, REST, or gRPC alongside your existing robot operating systems. No disruption to existing logic. Implementation takes four to eight weeks.",
  },
  {
    number: "03",
    title: "Every action authorized at runtime",
    description:
      "Before any robot executes an action, Vareli evaluates it. Decisions are returned in milliseconds. Unauthorized actions are blocked. Ambiguous cases escalate to a human.",
  },
  {
    number: "04",
    title: "Full operational record maintained",
    description:
      "Every decision, escalation, and policy event is logged with full context — who, what, when, under which policy. Queryable in the control plane, exportable for audit.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-3">
            How It Works
          </p>
          <h2
            id="how-it-works-heading"
            className="text-[28px] sm:text-[36px] font-bold text-zinc-900 leading-[1.15] tracking-[-0.02em] max-w-xl"
          >
            From policy definition to audit record — a closed governance loop.
          </h2>
        </div>

        {/* Step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white p-6 hover:bg-[#F9F8F6] transition-colors duration-150"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-semibold text-zinc-300 uppercase tracking-widest tabular-nums">
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="hidden lg:block text-zinc-200"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-[14px] font-semibold text-zinc-900 leading-[1.4] mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration note */}
        <div className="mt-8 flex items-start gap-3">
          <div className="w-1 h-1 rounded-full bg-zinc-300 mt-2 flex-shrink-0" aria-hidden="true" />
          <p className="text-[13px] text-zinc-400 leading-relaxed">
            Compatible with ROS 2, proprietary robot operating systems, and cloud-based fleet management platforms.
            We work alongside your technical team throughout implementation.
          </p>
        </div>
      </div>
    </section>
  );
}

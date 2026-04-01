import Link from "next/link";

const stakes = [
  {
    number: "01",
    question: "Who authorized that?",
    answer:
      "When a robot enters a restricted area, dispenses medication, or interacts with a patient — who made that authorization decision, and what was it based on? Without a governance layer, the answer is often no one, and the record does not exist.",
  },
  {
    number: "02",
    question: "What happens when something goes wrong?",
    answer:
      "Incident investigations in autonomous systems require a precise operational record: what the robot was authorized to do, what it actually did, and when. Without immutable audit logs, that investigation is incomplete before it begins.",
  },
  {
    number: "03",
    question: "How do you demonstrate accountability?",
    answer:
      "Regulators, insurers, and accreditation bodies are developing frameworks for autonomous systems in clinical environments. Hospitals that can produce structured authorization records on demand are in a materially different position.",
  },
];

export default function WhyGovernance() {
  return (
    <section
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900"
      aria-labelledby="why-governance-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2AB5C9] mb-3">
              Why Governance
            </p>
            <h2
              id="why-governance-heading"
              className="text-[28px] sm:text-[36px] font-bold text-white leading-[1.15] tracking-[-0.02em]"
            >
              The operational questions autonomous robots raise do not resolve themselves.
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            These are not hypothetical concerns. They are the operational reality
            of running autonomous systems in a regulated environment where patient
            safety, institutional liability, and regulatory accountability intersect.
          </p>
        </div>

        {/* Stake cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {stakes.map((stake) => (
            <article
              key={stake.number}
              className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition-all duration-150"
            >
              <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest mb-5 tabular-nums">
                {stake.number}
              </div>
              <h3 className="text-[16px] font-semibold text-white leading-[1.35] mb-4">
                {stake.question}
              </h3>
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                {stake.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Embedded CTA on dark bg */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-10 border-t border-zinc-800">
          <p className="text-[15px] text-zinc-400 flex-1">
            Vareli makes the answers to these questions systematic — before a regulator asks.
          </p>
          <a
            href="mailto:justin@varelihealth.com"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-semibold text-white bg-[#0F6674] hover:bg-[#138394] active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Request a Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

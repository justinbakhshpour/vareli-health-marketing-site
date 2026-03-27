const cards = [
  {
    number: "01",
    title: "Autonomous robots are becoming institutional labor, not specialized equipment.",
    body: "The category has shifted. Robots operate across wards at scale, performing recurring functions and making real-time decisions. The infrastructure to govern that has not kept pace.",
  },
  {
    number: "02",
    title: "Without a control layer, authorization is implicit and audit is impossible.",
    body: "When a robot acts, who authorized it? Under what policy? What is the record? In most deployments today, there are no clear answers — creating operational, liability, and regulatory exposure that compounds as the fleet grows.",
  },
  {
    number: "03",
    title: "Regulators, insurers, and accreditation bodies are beginning to ask.",
    body: "The window to establish governance proactively — before external requirements impose it — is narrow. Hospitals that build the infrastructure now will be in a structurally different position.",
  },
];

export default function Problem() {
  return (
    <section
      id="why-now"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-4">
            Why Now
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              id="problem-heading"
              className="text-[28px] sm:text-[34px] font-bold text-zinc-900 leading-[1.18] tracking-[-0.02em]"
            >
              Hospitals are deploying autonomous robots faster than the
              governance infrastructure to operate them safely.
            </h2>
            <p className="text-[15px] text-zinc-500 leading-relaxed">
              The deployment curve is steep. The governance infrastructure is
              not keeping pace. The gap between capability deployed and
              authority exercised creates liability exposure that grows with
              every robot added to the fleet.
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
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
  );
}

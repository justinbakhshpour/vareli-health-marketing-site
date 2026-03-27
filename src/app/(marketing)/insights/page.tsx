import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/content/insights/index";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on governance, authorization, and the future of autonomous hospital operations. Written by the team building the institutional control layer for robotic labor.",
  openGraph: {
    title: "Insights — Vareli Health",
    description:
      "Perspectives on governance, authorization, and the institutional infrastructure for autonomous robotic labor.",
    url: "https://varelihealth.com/insights",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColor: Record<string, string> = {
  Governance: "bg-[#0F6674]/8 text-[#0F6674]",
  Infrastructure: "bg-zinc-100 text-zinc-600",
  Authorization: "bg-zinc-900/8 text-zinc-700",
};

function CategoryTag({ category }: { category: string }) {
  const cls = categoryColor[category] ?? "bg-zinc-100 text-zinc-600";
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-widest ${cls}`}
    >
      {category}
    </span>
  );
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <div id="main-content" className="pt-24 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">

          {/* ── Page header ─────────────────────────────────── */}
          <div className="mb-16 pb-12 border-b border-zinc-200">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-4">
              Insights
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h1 className="text-[34px] sm:text-[42px] font-extrabold text-zinc-900 leading-[1.1] tracking-[-0.03em]">
                Thinking on governance, authorization, and the infrastructure
                gap.
              </h1>
              <p className="text-[15px] text-zinc-500 leading-relaxed lg:pb-1">
                Written by the team building the institutional control layer for
                autonomous robotic labor. Perspectives on why governance
                infrastructure matters and how to build it.
              </p>
            </div>
          </div>

          {/* ── Featured article ─────────────────────────────── */}
          {featured && (
            <div className="mb-6">
              <Link
                href={`/insights/${featured.slug}`}
                className="group block rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10 hover:border-[#0F6674]/30 hover:shadow-[0_4px_32px_-4px_rgba(15,102,116,0.08)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <CategoryTag category={featured.category} />
                  <span className="text-[12px] text-zinc-400">
                    {formatDate(featured.date)}
                  </span>
                  <span className="text-zinc-300 select-none">·</span>
                  <span className="text-[12px] text-zinc-400">
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-[22px] sm:text-[28px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em] mb-4 group-hover:text-[#0F6674] transition-colors duration-150 max-w-3xl">
                  {featured.title}
                </h2>

                <p className="text-[15px] text-zinc-500 leading-relaxed max-w-2xl mb-7">
                  {featured.description}
                </p>

                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold text-white bg-[#0F6674] group-hover:bg-[#138394] transition-colors duration-150">
                  Read article
                  <svg
                    width="13"
                    height="13"
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
                </span>
              </Link>
            </div>
          )}

          {/* ── More articles label ─────────────────────────── */}
          {rest.length > 0 && (
            <>
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-zinc-200" />
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest flex-shrink-0">
                  More Articles
                </span>
                <div className="flex-1 h-px bg-zinc-200" />
              </div>

              {/* ── Article grid ───────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rest.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-7 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <CategoryTag category={article.category} />
                      <span className="text-[11px] text-zinc-400">
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-[17px] font-bold text-zinc-900 leading-[1.35] tracking-[-0.01em] mb-3 group-hover:text-[#0F6674] transition-colors duration-150 flex-1">
                      {article.title}
                    </h2>

                    <p className="text-[13px] text-zinc-500 leading-relaxed mb-5">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                      <span className="text-[11px] text-zinc-400">
                        {formatDate(article.date)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0F6674] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        Read article
                        <svg
                          width="11"
                          height="11"
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
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}

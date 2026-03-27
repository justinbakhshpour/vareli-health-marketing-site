import Link from "next/link";
import { insights } from "@/content/insights/index";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPreview() {
  const preview = insights.slice(0, 3);

  return (
    <section
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F8F6] border-t border-zinc-100"
      aria-labelledby="insights-preview-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-3">
              Insights
            </p>
            <h2
              id="insights-preview-heading"
              className="text-[26px] sm:text-[32px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em]"
            >
              Thinking on governance
              <br className="hidden sm:block" /> and the infrastructure gap.
            </h2>
          </div>
          <Link
            href="/insights"
            className="flex-shrink-0 hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F6674] hover:text-[#138394] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
          >
            View all
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
          </Link>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preview.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex flex-col bg-white rounded-xl border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#0F6674]/8 text-[10px] font-semibold text-[#0F6674] uppercase tracking-widest">
                  {article.category}
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-zinc-900 leading-[1.35] tracking-[-0.01em] mb-3 group-hover:text-[#0F6674] transition-colors duration-150 flex-1">
                {article.title}
              </h3>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                <span className="text-[11px] text-zinc-400">
                  {formatDate(article.date)} · {article.readTime}
                </span>
                <span className="text-[11px] font-semibold text-[#0F6674] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F6674]"
          >
            View all insights
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

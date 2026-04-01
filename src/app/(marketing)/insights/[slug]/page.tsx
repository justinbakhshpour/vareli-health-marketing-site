import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/content/insights/index";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://varelihealth.com/insights/${slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) notFound();

  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/insights/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      <div id="main-content" className="pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Back link */}
          <div className="mb-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] rounded"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.5 7H2.5M2.5 7L6 3.5M2.5 7L6 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Insights
            </Link>
          </div>

          {/* Article header */}
          <div className="max-w-[720px] mb-12 pb-10 border-b border-zinc-200">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#0F6674]/8 text-[11px] font-semibold text-[#0F6674] uppercase tracking-widest">
                {article.category}
              </span>
              <span className="text-[12px] text-zinc-400">
                {formatDate(article.date)} · {article.readTime}
              </span>
            </div>
            <h1 className="text-[30px] sm:text-[38px] font-extrabold text-zinc-900 leading-[1.12] tracking-[-0.025em]">
              {article.title}
            </h1>
          </div>

          {/* Article body */}
          <article
            className="max-w-[720px]"
            aria-label={article.title}
          >
            <Content />
          </article>

          {/* Footer CTA */}
          <div className="max-w-[720px] mt-16 pt-10 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-[14px] font-semibold text-zinc-900 mb-1">
                  Want to see Vareli in action?
                </p>
                <p className="text-[13px] text-zinc-500">
                  We would like to understand your environment before showing
                  you ours.
                </p>
              </div>
              <a
                href="mailto:justin@varelihealth.com"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold text-white bg-[#0F6674] hover:bg-[#138394] active:scale-[0.98] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6674] focus-visible:ring-offset-2"
              >
                Request a Demo
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

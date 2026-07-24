import type { Metadata } from "next";
import Link from "next/link";
import { insights, insightHref } from "@/content/insights/index";
import Content from "@/content/insights/how-to-deploy-robots-in-hospitals.mdx";

const SLUG = "how-to-deploy-robots-in-hospitals";

const article = insights.find((a) => a.slug === SLUG)!;
const url = `https://varelihealth.com${insightHref(article)}`;

/**
 * FAQ pairs mirrored from the "Frequently asked questions" section of the MDX
 * body, for FAQPage structured data. Keep in sync when the article is edited.
 */
const faqs = [
  {
    question: "Who should own robot deployments inside a hospital?",
    answer:
      "There is no single right answer, but there must be an answer. Common owners include operations, clinical engineering, or an innovation office, with IT, facilities, and patient safety as standing reviewers. What fails is distributed ownership where the vendor is the only party with a complete picture.",
  },
  {
    question: "Does governance slow down robotics adoption?",
    answer:
      "Disorganized governance does. A structured process is usually faster than the alternative, because every deployment stops being a bespoke project. Teams know what is required, who must approve, and what is blocking. Conditional approvals in particular let pilots start sooner, not later.",
  },
  {
    question: "What about the vendor's own dashboard and controls?",
    answer:
      "Vendor tools are necessary and useful. They tell you where the robot is, whether it is online, and whether it completed its task. What they cannot tell you is whether the robot should have been deployed, who inside your institution approved it, what conditions apply, and whether it is operating within your policies. Every vendor also answers those questions differently, which means a hospital running three vendors has three incompatible versions of the truth. The vendor manages its robot. The institution has to manage its relationship with every robot.",
  },
  {
    question: "Does this apply to humanoid robots?",
    answer:
      "Yes, and it will matter more. Today's AMRs perform narrow, fixed tasks, which keeps the authorization question relatively simple. General-purpose and humanoid platforms will be capable of far more than any hospital will initially permit, which makes the gap between what a robot can do and what it is allowed to do the central governance question.",
  },
  {
    question: "If robots learn continuously, how can a hospital ever approve one?",
    answer:
      "By approving a scope instead of a snapshot. You cannot freeze a learned model, but you can define the boundary it must operate within and treat any capability change as a review trigger. The approval attaches to what the robot is allowed to do, not to a specific software version, which is exactly why the authorization profile in Step 5 has to exist as an enforceable record rather than a committee memo.",
  },
];

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "how to deploy robots in hospitals",
    "hospital robotics deployment",
    "hospital robot governance",
    "autonomous mobile robots in hospitals",
    "hospital robot policy",
    "robot deployment checklist",
    "how are robots trained",
    "robot training simulation vs real world",
  ],
  alternates: {
    canonical: insightHref(article),
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url,
    siteName: "Vareli Health",
    locale: "en_US",
    publishedTime: article.date,
    authors: ["Vareli Health"],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
  },
};

function formatDate(dateStr: string) {
  // Parse as local midnight — a bare "YYYY-MM-DD" is read as UTC and would
  // display the previous day in western timezones, contradicting datePublished.
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HowToDeployRobotsInHospitalsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "en-US",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Organization",
        name: "Vareli Health",
        url: "https://varelihealth.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Vareli Health",
        url: "https://varelihealth.com",
      },
      articleSection: article.category,
      keywords: metadata.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
          <article className="max-w-[720px]" aria-label={article.title}>
            <Content />
          </article>

          {/* Closing CTA */}
          <div className="max-w-[720px] mt-16">
            <div className="rounded-2xl border border-zinc-200 bg-[#F9F8F6] px-8 py-10 sm:px-10 sm:py-12">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0F6674] mb-3">
                Get in Touch
              </p>
              <h2 className="text-[24px] sm:text-[30px] font-bold text-zinc-900 leading-[1.2] tracking-[-0.02em] mb-4">
                Talk to us before you deploy, not after the first incident.
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-lg">
                Tell us about your fleet, your governance posture, and what you
                are trying to solve. We will follow up within one business day.
              </p>
              <Link
                href="/contact"
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
              </Link>
            </div>

            <p className="mt-10 pt-8 border-t border-zinc-200 text-[14px] italic text-zinc-400 leading-relaxed">
              Vareli Health is building the institution-owned authorization and
              governance layer for autonomous robot fleets in hospitals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

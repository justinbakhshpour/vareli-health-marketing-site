export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  /**
   * Overrides the default `/insights/<slug>` URL for articles that live at a
   * top-level route (SEO landing pages). Articles with an `href` are rendered
   * by their own page and are excluded from the /insights/[slug] route.
   */
  href?: string;
};

/** Canonical site URL for an article, honouring any top-level `href` override. */
export function insightHref(article: InsightMeta): string {
  return article.href ?? `/insights/${article.slug}`;
}

export const insights: InsightMeta[] = [
  {
    slug: "how-to-deploy-robots-in-hospitals",
    href: "/how-to-deploy-robots-in-hospitals",
    title:
      "How to Deploy Robots in Hospitals: A Step-by-Step Governance Guide",
    description:
      "A step-by-step guide to deploying robots in hospitals, from intake and readiness review to conditional approval, authorization, and pilot measurement.",
    date: "2026-07-23",
    readTime: "11 min read",
    category: "Deployment",
  },
  {
    slug: "the-air-traffic-control-problem",
    title: "The Air Traffic Control Problem Hospitals Don't Know They Have Yet",
    description:
      "Two hospital operations leaders, unprompted, reached for the same metaphor: air traffic control. Not to describe a single robot — but the moment a fleet spans multiple vendors and no one is watching the whole sky.",
    date: "2026-06-12",
    readTime: "6 min read",
    category: "Operations",
  },
  {
    slug: "the-biggest-barrier-to-hospital-robotics",
    title: "The Biggest Barrier to Hospital Robotics Isn't the Robot",
    description:
      "Autonomous robots are entering hospitals at scale — but the hardest problem isn't navigation or reliability. It's the missing institutional layer that decides what these systems are permitted to do, and who is accountable when something goes wrong.",
    date: "2026-06-11",
    readTime: "9 min read",
    category: "Governance",
  },
  {
    slug: "tesla-optimus-3-and-the-governance-gap",
    title: "Tesla's Optimus 3 Is Coming to Hospitals. The Governance Layer Isn't.",
    description:
      "Tesla's production ramp puts Optimus in healthcare settings by 2027–2028. The capability timeline is accelerating. The institutional infrastructure to govern autonomous humanoid robots in clinical environments is not.",
    date: "2026-04-07",
    readTime: "6 min read",
    category: "Governance",
  },
  {
    slug: "why-hospitals-need-a-governance-layer",
    title: "Why Hospitals Need a Governance Layer for Autonomous Systems",
    description:
      "Autonomous robots are entering hospitals faster than the infrastructure to govern them. The question is not whether governance is necessary — it is whether hospitals will build it proactively or inherit it reactively.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Governance",
  },
  {
    slug: "the-missing-infrastructure-in-hospital-robotics",
    title: "The Missing Infrastructure in Hospital Robotics",
    description:
      "Every hospital deploying autonomous robots is building the same missing layer on their own — or ignoring the problem until an incident forces the question. There is a better path.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Infrastructure",
  },
  {
    slug: "authorization-not-automation-is-the-real-challenge",
    title: "Authorization, Not Automation, Is the Real Challenge",
    description:
      "The hard part of autonomous robotic labor in hospitals is not making robots that can act autonomously. It is building the systems that decide what they are permitted to do — before they do it.",
    date: "2026-02-28",
    readTime: "7 min read",
    category: "Authorization",
  },
];

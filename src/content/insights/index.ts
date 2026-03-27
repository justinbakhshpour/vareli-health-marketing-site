export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
};

export const insights: InsightMeta[] = [
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

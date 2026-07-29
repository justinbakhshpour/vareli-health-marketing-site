/** Named byline. Articles without one publish under the Vareli Health org. */
export type InsightAuthor = {
  name: string;
  jobTitle?: string;
  /** Profile or bio URL, site-relative. */
  url?: string;
};

/** One question/answer pair, mirrored from the article's FAQ section. */
export type InsightFaq = {
  question: string;
  answer: string;
};

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

  /* ── Optional. Present only on articles that need them. ─────────────── */

  /**
   * Browser/search title, when the on-page headline is too long to serve as
   * one. Falls back to `title`.
   */
  seoTitle?: string;
  /** Last substantive revision. Falls back to `date`. */
  dateModified?: string;
  /** Renders a byline under the article title and a Person author in schema. */
  author?: InsightAuthor;
  /** Rendered verbatim beneath the byline, for editorial review credit. */
  reviewedBy?: string;
  keywords?: string[];
  /** Subjects of the article, emitted as schema.org `about`. */
  about?: string[];
  /**
   * Emitted as FAQPage structured data. Mirrors the article's FAQ section —
   * keep the two in sync when editing.
   */
  faqs?: InsightFaq[];
};

/** Canonical site URL for an article, honouring any top-level `href` override. */
export function insightHref(article: InsightMeta): string {
  return article.href ?? `/insights/${article.slug}`;
}

export const insights: InsightMeta[] = [
  {
    slug: "iso-25268-26253-hospital-pharmacy-robots",
    title:
      "What ISO 25268 and ISO 26253 Mean for Hospital Pharmacy Robots, Operations, and Centralized Control",
    seoTitle:
      "Hospital Pharmacy Robots: ISO 25268 & ISO 26253 Explained",
    description:
      "A practical guide to ISO 25268 and ISO 26253 for hospital pharmacy delivery robots, including safety, elevators, emergency stops, monitoring, task allocation, and recordkeeping.",
    date: "2026-07-28",
    dateModified: "2026-07-28",
    readTime: "18 min read",
    category: "Standards",
    keywords: [
      "hospital pharmacy delivery robots",
      "ISO 25268",
      "ISO 26253",
      "hospital AMR standards",
      "autonomous mobile robots in hospitals",
      "hospital robot fleet management",
      "hospital robotics governance",
    ],
    about: [
      "ISO 25268",
      "ISO 26253",
      "Autonomous mobile robots",
      "Hospital pharmaceutical logistics",
    ],
    faqs: [
      {
        question: "Is ISO 25268 a final standard?",
        answer:
          "No. As of July 28, 2026, ISO 25268 is a Draft International Standard. ISO records show the DIS ballot with member bodies opened on May 15, 2026 for a twelve week period. Until voting closes and the document moves through final approval and publication, there is no published international standard to comply with.",
      },
      {
        question: "Is ISO 26253 a final standard?",
        answer:
          "No. ISO 26253 is at an earlier stage than ISO 25268. It is a Committee Draft, registered in May 2026, with a comment period that closed on July 10, 2026. The draft is still being worked by the committee and has not yet advanced to the enquiry stage.",
      },
      {
        question:
          "What is the difference between ISO 25268 and ISO 26253?",
        answer:
          "ISO 25268 is oriented toward the physical delivery service, covering medication packaging, delivery chambers, emergency halt methods, elevator sequences, and delivery locations. ISO 26253 is oriented toward the centralized control system that runs the fleet, covering real time monitoring, failure response, hardware management, communication, scheduling, task allocation, and recordkeeping. One describes the delivery. The other describes the system that operates the deliveries.",
      },
      {
        question: "What is an autonomous mobile robot in a hospital?",
        answer:
          "An autonomous mobile robot, or AMR, is a mobile platform that navigates hospital corridors without a fixed track or a human driver. In pharmacy operations it typically carries medications, refill bins for automated dispensing cabinets, urgent doses, or supplies between the central pharmacy and nursing units, often calling elevators and passing through automatic doors along the way.",
      },
      {
        question: "Do the standards apply only to medication delivery?",
        answer:
          "Both drafts are scoped to internal pharmaceutical logistics. That said, most hospitals do not run a pharmacy only fleet. The same corridors, elevators, network, and staff also support linen, meal, lab specimen, and supply robots, so the operational patterns described in these drafts tend to generalize beyond pharmacy even where the documents do not.",
      },
      {
        question: "Do hospitals have to comply with these drafts?",
        answer:
          "No. Neither document is published, and ISO standards are voluntary unless a regulator, accreditor, or contract makes them binding. The practical use of the drafts today is as a structured checklist for deployment planning and vendor evaluation, not as a compliance obligation.",
      },
      {
        question:
          "What is a centralized control system for hospital robots?",
        answer:
          "A centralized control system is the layer that sees and coordinates the fleet rather than an individual robot. In the ISO 26253 framing it handles real time monitoring, response to unexpected functional failures, hardware operation management, communication targets, schedule management, task allocation, and recordkeeping.",
      },
      {
        question:
          "Do the standards require one control system across multiple robot vendors?",
        answer:
          "Not based on the publicly available abstracts. The drafts describe the functions a centralized control system should perform. They do not, in the public material, state that the system must be vendor neutral or capable of managing robots from multiple manufacturers. Hospitals planning for more than one fleet should treat that as an open question to resolve in procurement.",
      },
      {
        question:
          "What hospital departments should evaluate pharmacy robots?",
        answer:
          "In practice, pharmacy, nursing operations, facilities, IT and cybersecurity, clinical or biomedical engineering, risk management, patient safety, supply chain, and procurement all have a stake. Deployments tend to stall when a single department owns the decision and the operational consequences land somewhere else.",
      },
      {
        question: "What happens when a medication delivery robot fails?",
        answer:
          "That depends entirely on what the hospital defined in advance. A complete failure procedure covers detection, containment, human notification, recovery, disposition of the payload still inside the robot, documentation, and post incident review. The payload question is the one most often left undefined, and it is the one pharmacy leaders care most about.",
      },
      {
        question: "How should hospitals monitor autonomous delivery robots?",
        answer:
          "At minimum, an operations view should show robot identity, current location, battery state, current task, cargo category, destination, priority, delay status, connectivity, active alerts, the responsible human supervisor, and the last completed action. The harder requirement is that this view stays coherent when a second vendor's fleet arrives.",
      },
      {
        question:
          "What records should hospitals retain from robot deliveries?",
        answer:
          "A defensible record set includes who requested the task, which robot accepted it, what that robot was authorized to carry, pickup and delivery timestamps, route and location history, compartment access events, human approvals, alerts and interventions, failed attempts, software and configuration version, final disposition, and incident notes. Hospitals should also confirm who owns those records and whether they can be exported.",
      },
      {
        question:
          "How should hospitals test pharmacy robots before scaling?",
        answer:
          "Run a bounded pilot on defined routes and defined payloads, with named operational ownership, agreed KPIs, and a deliberate failure exercise rather than only a happy path demonstration. Decide before the pilot starts what result would justify expansion and what result would stop it.",
      },
      {
        question: "What questions should hospitals ask AMR vendors?",
        answer:
          "Ask how the vendor is tracking ISO 25268 and ISO 26253, which functions exist today versus on a roadmap, whether the hospital receives real time operational data, whether complete task and incident records can be exported, whether hospital staff can define priorities and override vendor logic, what happens if the vendor cloud is unavailable, whether the control platform supports third party robots, and who is accountable for an incorrect or incomplete delivery.",
      },
    ],
  },
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

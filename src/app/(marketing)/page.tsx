import type { Metadata } from "next";
import Hero from "@/components/homepage/Hero";
import Problem from "@/components/homepage/Problem";
import WhatIsVareli from "@/components/homepage/WhatIsVareli";
import HowItWorks from "@/components/homepage/HowItWorks";
import WhyGovernance from "@/components/homepage/WhyGovernance";
import InsightsPreview from "@/components/homepage/InsightsPreview";
import HomeCTA from "@/components/homepage/HomeCTA";

export const metadata: Metadata = {
  title: "Vareli Health — Institutional Control for Autonomous Robotic Labor",
  description:
    "Vareli is the infrastructure software that governs autonomous robotic labor in hospitals — authorizing every action, enforcing institutional policy, and maintaining the operational record your organization requires.",
  openGraph: {
    title: "Vareli Health — Institutional Control for Autonomous Robotic Labor",
    description:
      "The institutional control layer for autonomous robotic labor. Authorization, policy enforcement, fleet control, and audit — built for hospitals deploying autonomous robots at scale.",
    url: "https://varelihealth.com",
  },
};

export default function HomePage() {
  return (
    <>
      <div id="main-content">
        <Hero />
        <Problem />
        <WhatIsVareli />
        <HowItWorks />
        <WhyGovernance />
        <InsightsPreview />
        <HomeCTA />
      </div>
    </>
  );
}

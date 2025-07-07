import WorkWithUsHero from "../components/work-with-us/WorkWithUsHero";
import WhyJoinUs from "../components/work-with-us/WhyJoinUs";
import OpportunitiesSection from "../components/work-with-us/OpportunitiesSection";
import ContactCTA from "../components/work-with-us/ContactCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function WorkWithUsPage() {
  return (
    <>
      <WorkWithUsHero />
      <WhyJoinUs />
      <OpportunitiesSection />
      <ContactCTA />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

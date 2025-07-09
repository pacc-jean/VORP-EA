import { useScrollToHash } from "../hooks/useScrollToHash";

import WorkWithUsHero from "../components/work-with-us/WorkWithUsHero";
import WhyJoinUs from "../components/work-with-us/WhyJoinUs";
import OpportunitiesSection from "../components/work-with-us/OpportunitiesSection";
import ContactCTA from "../components/work-with-us/ContactCTA";

export default function WorkWithUsPage() {
  useScrollToHash();

  return (
    <>
      <WorkWithUsHero />
      <WhyJoinUs />
      <OpportunitiesSection />
      <ContactCTA />
    </>
  );
}

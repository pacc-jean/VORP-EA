import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import WorkWithUsHero from "../components/work-with-us/WorkWithUsHero";
import WhyJoinUs from "../components/work-with-us/WhyJoinUs";
import OpportunitiesSection from "../components/work-with-us/OpportunitiesSection";
import ContactCTA from "../components/work-with-us/ContactCTA";

export default function WorkWithUsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM elements have rendered
      const scrollToHash = () => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Delay to wait for components to mount
      setTimeout(scrollToHash, 200);
    }
  }, [location]);

  return (
    <>
      <WorkWithUsHero />
      <WhyJoinUs />
      <OpportunitiesSection />
      <ContactCTA />
    </>
  );
}

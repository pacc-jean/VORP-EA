import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import LeadingHero from "../components/landing/LeadingHero";
import StatementSection from "../components/landing/StatementSection";
import ImpactAreasSection from "../components/landing/ImpactAreasSection";
import FeaturedProgramsSection from "../components/landing/FeaturedProgramsSection";
import ImpactAtAGlanceSection from "../components/landing/ImpactAtAGlanceSection";
import GetInvolvedSection from "../components/landing/GetInvolvedSection";
import PartnersSection from "../components/landing/PartnersSection";
import StoriesSection from "../components/landing/StoriesSection";
import NewsletterSignup from "../components/landing/NewsletterSignup";
import TrailingHero from "../components/landing/TrailingHero";

export default function LandingPage() {
  const [sectionsVisible, setSectionsVisible] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Load state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("landing-sections-visible");
    if (stored !== null) setSectionsVisible(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("landing-sections-visible", String(sectionsVisible));
  }, [sectionsVisible]);

  const toggleVisibility = () => setSectionsVisible((prev) => !prev);

  return (
    <div className="relative">
      {/* Floating Toggle Button with Tooltip */}
      <div
        className="fixed z-50 
          top-4 right-4 sm:bottom-4 sm:top-auto
          sm:right-4"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {/* Tooltip */}
        {tooltipVisible && (
          <div className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-md whitespace-nowrap hidden sm:block">
            {sectionsVisible ? "Hide Sections" : "Show Sections"}
          </div>
        )}

        <button
          onClick={toggleVisibility}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition"
          aria-label="Toggle Sections Visibility"
        >
          {sectionsVisible ? (
            <Eye className="w-6 h-6 text-gray-800" />
          ) : (
            <EyeOff className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Always Visible */}
      <LeadingHero />

      {/* Conditional Sections with AnimatePresence */}
      <AnimatePresence>
        {sectionsVisible && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <StatementSection />
            <ImpactAreasSection />
            <FeaturedProgramsSection />
            <ImpactAtAGlanceSection />
            <GetInvolvedSection />
            <PartnersSection />
            <StoriesSection />
            <NewsletterSignup />
          </motion.div>
        )}
      </AnimatePresence>

      <TrailingHero />
    </div>
  );
}

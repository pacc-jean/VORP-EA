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
  return (
    <div className="relative">
      <LeadingHero />

      <div className="overflow-hidden">
        <StatementSection />
        <ImpactAreasSection />
        <FeaturedProgramsSection />
        <ImpactAtAGlanceSection />
        <GetInvolvedSection />
        <PartnersSection />
        <StoriesSection />
        <NewsletterSignup />
      </div>

      <TrailingHero />
    </div>
  );
}

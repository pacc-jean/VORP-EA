import LeadingHero from "../components/landing/LeadingHero";
import OverviewSection from "../components/landing/OverviewSection";
import StatementSection from "../components/landing/StatementSection";
import ResilienceSection from "../components/landing/ResilienceSection";

export default function LandingPage() {
  return (
    <>
      <LeadingHero />
      <OverviewSection />
      <StatementSection />
      <ResilienceSection />
      {/* Other sections will follow */}
    </>
  );
}

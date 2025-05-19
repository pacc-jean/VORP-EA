import LeadingHero from "../components/landing/LeadingHero";
import OverviewSection from "../components/landing/OverviewSection";
import StatementSection from "../components/landing/StatementSection";

export default function LandingPage() {
  return (
    <>
      <LeadingHero />
      <OverviewSection />
      <StatementSection />
      {/* Other sections will follow */}
    </>
  );
}

import LeadingHero from "../components/landing/LeadingHero";
import OverviewSection from "../components/landing/OverviewSection";
import StatementSection from "../components/landing/StatementSection";
import ResilienceSection from "../components/landing/ResilienceSection";
import NewsletterSignup from "../components/landing/NewsletterSignup";

export default function LandingPage() {
  return (
    <>
      <LeadingHero />
      <OverviewSection />
      <StatementSection />
      <ResilienceSection />
      <NewsletterSignup />
      {/* Other sections will follow */}
    </>
  );
}

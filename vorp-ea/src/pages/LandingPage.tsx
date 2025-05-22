import LeadingHero from "../components/landing/LeadingHero";
import OverviewSection from "../components/landing/OverviewSection";
import StatementSection from "../components/landing/StatementSection";
import ResilienceSection from "../components/landing/ResilienceSection";
import NewsletterSignup from "../components/landing/NewsletterSignup";
import TrailingHero from "../components/landing/TrailingHero";

export default function LandingPage() {
  return (
    <>
      <LeadingHero />
      <OverviewSection />
      <StatementSection />
      <ResilienceSection />
      <NewsletterSignup />
      <TrailingHero />
    </>
  );
}

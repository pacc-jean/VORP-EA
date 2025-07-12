import AboutHero from "../components/about/AboutHero";
import IdentitySection from "../components/about/IdentitySection";
import FoundingSection from "../components/about/FoundingSection";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutUsPage() {
  return (
    <div>
      <AboutHero />
      <IdentitySection />
      <FoundingSection />
      <AboutCTA />
    </div>
  );
}

import TeamHero from "../components/team/TeamHero";
import TeamQuote from "../components/team/TeamQuote";
import TeamTabs from "../components/team/TeamTabs";
import TeamGalleryCTA from "../components/team/TeamGalleryCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamQuote />
      <TeamTabs />
      <TeamGalleryCTA />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

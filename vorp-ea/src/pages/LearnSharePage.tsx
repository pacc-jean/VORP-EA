import LearnShareHero from "../components/learn&share/LearnShareHero";
import LearnSharePillars from "../components/learn&share/LearnSharePillars";
import LearnShareCTA from "../components/learn&share/LearnShareCTA";
import HighlightedResource from "../components/learn&share/HighlightedResource";
import UpcomingEvents from "../components/learn&share/UpcomingEvents";
import QuoteCarousel from "../components/learn&share/QuoteCarousel";
import SocialShareBar from "../components/learn&share/SocialShareBar";

export default function LearnSharePage() {
  return (
    <>
      <LearnShareHero />
      <LearnSharePillars />
      <LearnShareCTA />
      <HighlightedResource />
      <UpcomingEvents />
      <QuoteCarousel />
      <SocialShareBar />
    </>
  );
}

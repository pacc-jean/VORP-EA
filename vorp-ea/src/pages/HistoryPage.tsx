import HistoryHero from "../components/history/HistoryHero";
import HistoryTimeline from "../components/history/HistoryTimeline";
import MilestonesGrid from "../components/history/MilestonesGrid";
import StayInTheLoop from "../components/history/StayInTheLoop";

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <HistoryTimeline />
      <MilestonesGrid />
      <StayInTheLoop />
    </>
  );
}

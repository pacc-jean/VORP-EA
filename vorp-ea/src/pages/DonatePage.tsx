import DonateHero from "../components/donate/DonateHero";
import WhyGive from "../components/donate/WhyGive";
import DonationChannels from "../components/donate/DonationChannels";
import DonationOptions from "../components/donate/DonationOptions";
import DonationForm from "../components/donate/DonationForm";
import ThankYouBlock from "../components/donate/ThankYouBlock";
import FutureRoadmap from "../components/donate/FutureRoadmap";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <WhyGive />
      <DonationChannels />
      <DonationOptions />
      <DonationForm />
      <ThankYouBlock />
      <FutureRoadmap />
      <Analytics />
      <SpeedInsights /> 
    </>
  );
}

import PartnerHero from "../components/partner-with-us/PartnerHero";
import WhyPartner from "../components/partner-with-us/WhyPartner";
import PartnerTypes from "../components/partner-with-us/PartnerTypes";
import PartnerOpportunities from "../components/partner-with-us/PartnerOpportunities";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function PartnerWithUs() {
  return (
    <>
      <PartnerHero />
      <WhyPartner />
      <PartnerTypes />
      <PartnerOpportunities />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

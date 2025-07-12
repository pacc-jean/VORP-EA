import { useScrollToHash } from "../hooks/useScrollToHash";

import ImpactHero from "../components/impact/ImpactHero";
import BeneficiaryVoices from "../components/impact/BeneficiaryVoices";
import ImpactReportCTA from "../components/impact/ImpactReportCTA";

export default function OurImpactPage() {
    useScrollToHash();

  return (
    <div>
      <ImpactHero />
      <BeneficiaryVoices />
      <ImpactReportCTA />
    </div>
  );
}

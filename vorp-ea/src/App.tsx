import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/consistent/Navbar";
import MobileBottomNav from "./components/consistent/MobileBottomNav";
import Footer from "./components/consistent/Footer";
import ScrollToTop from "./components/navigation/ScrollToTop";
import LandingPage from './pages/LandingPage';
import DonatePage from './pages/DonatePage';
import TeamPage from './pages/TeamPage';
import WorkWithUsPage from "./pages/WorkWwithUsPage";
import LearnSharePage from "./pages/LearnSharePage";
import PartnerWithUsPage from "./pages/PartnerWithUsPage";
import ProgramsPage from "./pages/ProgramsPage";
import OurWorkPage from "./pages/OurWorkPage";
import OurImpactPage from "./pages/OurImpactPage";
import AboutUsPage from "./pages/AboutUsPage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Navbar />
      <MobileBottomNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/work-with-us" element={<WorkWithUsPage />} />
        <Route path="/learn-share" element={<LearnSharePage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/our-impact" element={<OurImpactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;

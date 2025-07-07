import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/consistent/Navbar";
import MobileBottomNav from "./components/consistent/MobileBottomNav";
import Footer from "./components/consistent/Footer";
import LandingPage from './pages/LandingPage';
import DonatePage from './pages/DonatePage';
import TeamPage from './pages/TeamPage';
import WorkWithUsPage from "./pages/WorkWwithUsPage";
import LearnSharePage from "./pages/LearnSharePage";
import PartnerWithUs from "./pages/PartnerWithUsPage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Navbar />
      <MobileBottomNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/work-with-us" element={<WorkWithUsPage />} />
        <Route path="/learn-share" element={<LearnSharePage />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;

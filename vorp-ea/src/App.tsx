import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/consistent/Navbar";
import MobileBottomNav from "./components/consistent/MobileBottomNav";
import Footer from "./components/consistent/Footer";
import LandingPage from './pages/LandingPage';
import DonatePage from './pages/DonatePage';
import TeamPage from './pages/TeamPage';
import WorkWithUsPage from "./pages/WorkWwithUsPage";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;

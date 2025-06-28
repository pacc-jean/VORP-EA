import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/consistent/Navbar";
import MobileBottomNav from "./components/consistent/MobileBottomNav";
import Footer from "./components/consistent/Footer";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Navbar />
      <MobileBottomNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes can be added here */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

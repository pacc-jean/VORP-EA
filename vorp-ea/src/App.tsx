import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes can be added here */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import Home from "./components/CrickHome";
import Navbar from "./components/Navbar";
import Matches from "./components/NavbarMatchs";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Score from "./components/ScoreCard";
import Footer from "./components/FooterC";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const App = (presentUser) => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className="cricbuzz">
    <div className="container">
    <span
      style={{ display: showScrollTopButton ? "block" : "none" }}
      className="fw-bold p-2 rounded-3 text-center rounded-5 px-3 topscroll"
      onClick={ScrollTop}
    >
      Move to top <FaArrowUp size={20} />
    </span>
      <Router>
        <Navbar presentUser ={presentUser}/>
        <Matches/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Score" element={<Score />} />
        </Routes>
      </Router>
    </div>
    <Footer/>
    </div>
    </>
    
  );
};

export default App;

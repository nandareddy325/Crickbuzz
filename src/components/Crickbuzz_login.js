import Home from "./CrickHome";
import Navbar from "./Navbar";
import Matches from './NavbarMatchs';
import Score from './ScoreCard';
import Footer from './FooterC';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


const Crickbuzzlogin = (presentUser) => {
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
        <Navbar presentUser = {presentUser} />
        <Matches/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Score" element={<Score />} />
        </Routes>
      </Router>
    </div>
    <Footer/>
    </div>
    </>
    
  );
};

export default Crickbuzzlogin;

import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const Matches = ()=>{
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [isOpen, setIsOpen] = useState(false);
  
  const [activeButton, setActiveButton] = useState(null);
  const toggleAccordion = ()=>{setIsOpen(!isOpen)}
  const handleButtonClick = (buttonIndex) => {setActiveButton(buttonIndex === activeButton ? null : buttonIndex); 
  };
  useEffect(() => {
    $("#content").slideDown(0);

    if (isOpen !== null) {
      $("#content").slideDown(1000);
    }
  }, [isOpen]);
    return(
      <>
      
        <nav class="navbar navbar-expand-lg navbar-light  navbarmatch"   
        >
          <div className="ms-4">
          <a className="navbar-brand text-light" href="#">MATCHES</a>
          </div>
        <button
        className="navbar-toggler me-4"
        type="button"
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
       <span className={isCollapsed ? 'navbar-toggler-icon' : 'btn-close'}></span>
      </button>

  <div className={`matche collapse navbar-collapse ${isCollapsed ? 'collapsed' : 'show'}`}>
    <ul class="navbar-nav m-auto ">
      <li class="nav-item text-light">
        <Link class="nav-link  text-light" to="/Score">IND vs RSA - IND Won</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link  text-light" to="/Score2">AUSA vs PAKA - Live</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link text-light" href="#" >
          MLSW vs SYSW - ings Break
        </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#">RSA vs IND - Prev</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="#">PRSW vs MLRW - PRS</a>
      </li>
      <li class="nav-item ms-5">
        <a class="nav-link  dropdown-toggle  text-light" href="#" onClick={toggleAccordion}>{isOpen ? "Close":"ALL"}</a>
        
      </li>
      
    </ul>
    
    
  </div>
  
</nav>
<div className="mt-3">
      {isOpen && (
        <div
          id="content"
          className="bg-dark justify-content-center d-flex flex-column align-items-center shadow slideInUp"
        >
          <div className="col-lg-10 col-md-10 col-10 text-center">
            <div className="py-4">
              <button
                className="btn btn-secondary sm-btn mx-3 btn-animation"
                onClick={() => handleButtonClick(1)}
              >
                All
              </button>
              <button
                className="btn btn-secondary sm-btn mx-3 btn-animation"
                onClick={() => handleButtonClick(2)}
              >
                Live Now
              </button>
              <button
                className="btn btn-secondary sm-btn mx-3 btn-animation"
                onClick={() => handleButtonClick(3)}
              >
                Today
              </button>
            </div>
            <div className="text-start ms-5 py-3">
              <hr className="text-light" />
              {activeButton === 1 && (
                <div className="mt-3 bg-light p-3 fadeIn">
                  <p><strong>Match 1:</strong> AUS vs IND</p>
                  <p><strong>Venue:</strong> Melbourne Cricket Ground</p>
                  <p><strong>Status:</strong> First Innings</p>
                  <p><strong>Time:</strong> 14:00 GMT</p>
                  <hr />
                  <p><strong>Match 2:</strong> ENG vs NZ</p>
                  <p><strong>Venue:</strong> Lord's Cricket Ground</p>
                  <p><strong>Status:</strong> Second Innings</p>
                  <p><strong>Time:</strong> 16:00 GMT</p>
                </div>
              )}
              {activeButton === 2 && (
                <div className="mt-3 bg-light p-3 fadeIn">
                  <p><strong>Live Now:</strong> AUS vs IND</p>
                  <p><strong>Status:</strong> Live - First Innings</p>
                  <p><strong>Venue:</strong> Melbourne Cricket Ground</p>
                  <p><strong>Time Remaining:</strong> 2 hours</p>
                </div>
              )}
              {activeButton === 3 && (
                <div className="mt-3 bg-light p-3 fadeIn">
                  <p><strong>Upcoming Match:</strong> ENG vs PAK</p>
                  <p><strong>Time:</strong> 18:00 GMT</p>
                  <p><strong>Venue:</strong> Old Trafford, Manchester</p>
                  <p><strong>Status:</strong> Third Innings</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

</>

    )
}
export default Matches;
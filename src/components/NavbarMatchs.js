import { useState } from "react";
import { Link } from "react-router-dom";

const Matches = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(1); 

  const toggleCollapse = () => {
    setIsOpen(false)
    setIsCollapsed(!isCollapsed)

  };
  const toggleAccordion = () => setIsOpen(!isOpen);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbarmatch position-relative">
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

        <div className={`navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`}>
          <ul className="navbar-nav m-auto">
            <li className="nav-item text-light">
              <Link className="nav-link text-light" to="/Score">IND vs RSA - IND Won</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Score2">AUSA vs PAKA - Live</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">MLSW vs SYSW - Ings Break</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">RSA vs IND - Prev</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">RSA vs IND - Prev</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link dropdown-toggle text-light" href="#" onClick={toggleAccordion}>
                {isOpen ? "Close" : "ALL"}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div className="matches-dropdown">
          <div className="bg-dark text-light py-4">
            <div className="container text-center">
              <button
                className="btn btn-secondary sm-btn mx-3"
                onClick={() => handleButtonClick(1)}
              >
                All
              </button>
              <button
                className="btn btn-secondary sm-btn mx-3"
                onClick={() => handleButtonClick(2)}
              >
                Live Now
              </button>
              <button
                className="btn btn-secondary sm-btn mx-3"
                onClick={() => handleButtonClick(3)}
              >
                Today
              </button>
            </div>
            <div className="text-start mx-5 py-3">
              <hr className="text-info" />
              {activeButton === 1 && (
                <div className="mt-3 bg-success p-3 rounded-2">
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
                <div className="mt-3 bg-success p-3  rounded-2">
                  <p><strong>Live Now:</strong> AUS vs IND</p>
                  <p><strong>Status:</strong> Live - First Innings</p>
                  <p><strong>Venue:</strong> Melbourne Cricket Ground</p>
                  <p><strong>Time Remaining:</strong> 2 hours</p>
                </div>
              )}
              {activeButton === 3 && (
                <div className="mt-3 bg-success p-3  rounded-2">
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
    </>
  );
};

export default Matches;

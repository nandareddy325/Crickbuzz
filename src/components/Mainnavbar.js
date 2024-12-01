import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Mainnavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="https://static.cricbuzz.com/images/cb_logo.svg"
          alt="Cricbuzz Logo"
          style={{ width: "100px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Live Scores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Schedule
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  All Stories
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Latest News
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Premium Editions
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="seriesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Series
            </a>
            <ul className="dropdown-menu" aria-labelledby="seriesDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  India Tour of Australia, 2024-25
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  India Tour of South Africa, 2024
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  England Tour of New Zealand, 2024
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Videos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rankings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              More
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <button className="btn btn-primary me-2">Cricbuzz Plus</button>
          <a className="nav-link" href="#">
            <FaSearch />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Mainnavbar;

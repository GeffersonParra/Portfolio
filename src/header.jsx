import { useState } from 'react';
import React from "react";
import './Bootstrap.css';
import './style.css'

const Header = ({ toggleTheme, isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HeaderStyle = {
    backgroundColor: isDarkMode ? '#080705' : '#ffffff',
    fontFamily: "Oranienbaum, serif",
    height: "5rem",
    position: "fixed",
    zIndex: "100",
    width: "100%",
    top: 0,
    left: 0,
  };

  const HandwrittenTitle = {
    fontFamily: "Nothing You Could Do, serif",
    position: "relative",
    top: "-1rem",
  };

  return (
    <header style={HeaderStyle} className="d-flex align-items-center col-12 px-3">
      <div className="d-flex flex-column col-10 col-lg-3 align-items-center h-100 mt-3 mt-sm-3 mt-md-0">
        <h1 style={{ fontWeight: "normal" }} className="mt-2">GeffDev</h1>
        <h6 style={HandwrittenTitle} className="text-center">Just another developer</h6>
      </div>
      <div className="d-lg-none mx-auto ms-auto">
        <button
          className={`${isDarkMode ? "dark-btn" : "light-btn"} ${menuOpen ? "menu-open" : "menu-closed"} btn`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`${menuOpen ? "d-flex" : "d-none"} ${isDarkMode ? "mini-dark" : "mini-light"} mini-menu flex-column d-lg-none flex-lg-row align-items-center gap-3`}>
        <button
          className="btn btn-change d-flex flex-column mt-3 ml-2 mb-2 mx-auto"
          onClick={toggleTheme}
        >
          <h4 className="mt-1">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </h4>
        </button>
        <h1>About Me</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
        <button className={`btn btn-change d-flex flex-column mb-3 col-8`}><h4 className="mt-1 col-12 text-center">Pricing</h4></button>
      </div>
      <div className={`d-none d-lg-flex flex-column flex-lg-row justify-content-end align-items-center col-lg-9 h-100 gap-3 d-lg-flex`}>
        <button
          className="btn btn-change d-flex flex-column"
          onClick={toggleTheme}
        >
          <h4 className="mt-1">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </h4>
        </button>
        <h1>About Me</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
        <button className="btn btn-change d-flex flex-column"><h4 className="mt-1">Pricing</h4></button>
      </div>
    </header>
  );
};

export default Header;

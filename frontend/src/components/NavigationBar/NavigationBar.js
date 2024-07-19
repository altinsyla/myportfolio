import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="navbar-container">
      <div className="img-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="navbartabs">
        <Link to="/home" className="navbar-links">
          Home
        </Link>
        <Link to="/about" className="navbar-links">
          About
        </Link>
        <Link to="/skills" className="navbar-links">
          Skills
        </Link>
        <Link to="/projects" className="navbar-links">
          Projects
        </Link>
        <Link to="/contact" className="navbar-links">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;

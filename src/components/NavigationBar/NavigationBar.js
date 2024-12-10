import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./NavigationBar.scss";

function NavigationBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, section) => {
    event.preventDefault();
    navigate("/home");
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="img-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className={`navbartabs ${isOpen ? 'open' : ''}`}>
        <Link to="/home" className="navbar-links" onClick={(event) => handleScroll(event, "home")}>Home</Link>
        <Link to="/about" className="navbar-links" onClick={(event) => handleScroll(event, "about")}>About</Link>
        <Link to="/skills" className="navbar-links" onClick={(event) => handleScroll(event, "skills")}>Skills</Link>
        <Link to="/projects" className="navbar-links" onClick={(event) => handleScroll(event, "projects")}>Projects</Link>
        <Link to="/contact" className="navbar-links" onClick={(event) => handleScroll(event, "contact")}>Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
}

export default NavigationBar;

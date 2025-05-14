import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume (2).pdf';  // Correct public path
    link.download = 'Jaydip_Gohil_Resume.pdf';
    link.click();
  };

  return (
    <div className="main-container">
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
        ☰
      </div>
      <div className="logo">Jaydip</div>
      <div className="Navbar-Container">
        <ul className="Navbar" id="nav-links">
          <li><Link className="nav-link" to="Home" smooth={true} duration={500}>Home</Link></li>
          <li><Link className="nav-link" to="About" smooth={true} duration={500}>About Me</Link></li>
          <li><Link className="nav-link" to="Skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link className="nav-link" to="Projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link className="nav-link" to="Contact" smooth={true} duration={500}>Contact Me</Link></li>
        </ul>
        <button className="Resume-Btn" onClick={handleDownload}>Resume</button>
      </div>
    </div>
  );
};

export default Navbar;

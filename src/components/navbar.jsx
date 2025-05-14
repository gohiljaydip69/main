import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";


const Navbar = () => {
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }

  return (
    <>
      <div className="main-container">
        <div class="hamburger" onClick={() => toggleMenu}>
          ☰
        </div>
        <div className="logo">Jaydip </div>
        <div className="Navbar-Container">
          <ul className="Navbar">
            <Link className="nav-link" to="Home" smooth={true} duration={500}>Home</Link>
            <Link className="nav-link" to="About" smooth={true} duration={500}>About Me</Link>
            <Link className="nav-link" to="Skills" smooth={true} duration={500}>Skills</Link>
            <Link className="nav-link" to="Projects" smooth={true} duration={500}>Projects</Link>
            <Link className="nav-link" to="Contact" smooth={true} duration={500}>Contact Me</Link>
          </ul>
          <button className="Resume-Btn">Resume</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

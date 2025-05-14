import React from "react";
import "./navbar.css";

const Navbar = () => {

  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }


  return (
    <>
      <div className="main-container">
        <div class="hamburger" onClick={()=>toggleMenu}>
        ☰
      </div>
        <div className="logo">Jaydip </div>
        <div className="Navbar-Container">
          <ul className="Navbar">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
          <button className="Resume-Btn">Resume</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

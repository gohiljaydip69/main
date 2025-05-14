import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import "./contact.css";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <Element name="Contact">
   
      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-sub-item">
            <FaGithub className="contact-item-inner" /> <p>@jaydipgohil69</p>
          </div>
          
          <div className="contact-sub-item">
            <CiLinkedin className="contact-item-inner" />
            <p>@jaydipgohil31</p>
          </div>

          <div className="contact-sub-item">
            <MdOutlineMailOutline className="contact-item-inner" />
            <p>gohiljaydip69@gmail.com</p>
          </div>
        </div>
      </div>
      </Element>
    </>
  );
};

export default Contact;

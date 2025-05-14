import React, { useEffect } from "react";
import "./homeBanner.css";
import bannerImage from "../../assets/banner_Image.png";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  

  return (
    <Element name="Home">
      <div className="banner-container">
        <div className="banner-image" data-aos="fade-right">
          <img className="BannerInnerImage" src={bannerImage} alt="Banner" />
        </div>

        <div className="banner-content" data-aos="fade-left">
          <h1
            style={{
              fontSize: "38px",
              color: "#00bcd4",
              fontWeight: "bold",
            }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Typewriter
              words={[`Hi, I’m Jaydip 👋`]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p
            style={{
              justifyContent: "center",
              color: "#ccc",
              fontSize: "17px",
              marginTop: "0px",
              maxWidth: "500px",
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              textAlign: "left",
              fontFamily: "Arial, sans-serif",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MERN Stack Developer passionate about crafting scalable,
            user-friendly web applications using modern technologies like React,
            Node.js, and MongoDB.
          </p>

          <br />
          <span
            style={{ color: "white", fontWeight: "600", fontSize: "18px" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Typewriter
              words={[
                '"MERN STACK DEVELOPER"',
                '"React Enthusiast"',
                '"Building Scalable Web Apps"',
                '"Turning Ideas into Full-Stack Reality"',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>

          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="banner-button">Contact Me</button>
            <Link to="https://github.com/gohiljaydip69" target="_blank">
              <FaGithub
              className="banner-icon"
           
              />
            </Link>
            <Link
            
              to="https://www.linkedin.com/in/jaydipgohil31/"
              target="_blank"
            >
              <CiLinkedin
              className="banner-icon"
              />
            </Link>
            <Link to="mailto:gohiljaydip69@gmail.com">
              <MdOutlineMailOutline
              className="banner-icon"
              
              />
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeBanner;

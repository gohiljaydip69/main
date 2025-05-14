import React from "react";
import "./homeBanner.css";
import bannerImage from "../../assets/banner_Image.png";
import { Typewriter } from "react-simple-typewriter";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Gmail from "../../assets/gmail.png";

const HomeBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img className="BannerInnerImage" src={bannerImage} alt="Banner" />
      </div>
      <div className="banner-content">
        <h1
          style={{
            fontSize: "48px",
            color: "white",
            fontWeight: "bold",
            color: "#00bcd4",
          }}
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

        {/* Description Paragraph */}
        {/* <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            marginTop: "20px",
            whiteSpace: "pre-line",
          }}
        >
          <Typewriter
            words={[
              "I’m a passionate developer specializing in the MERN stack.\nI love crafting clean, user-friendly applications and turning complex ideas into functional digital experiences.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={3000}
          />
        </p> */}

        <p
          style={{
            justifyContent: "center",
            color: "#ccc",
            fontSize: "20px",
            marginTop: "20px",
            maxWidth: "500px",
            whiteSpace: "pre-line",
            lineHeight: "1.5",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
          }}
        >
          MERN Stack Developer passionate about crafting scalable, user-friendly
          web applications using modern technologies like React, Node.js, and
          MongoDB.
        </p>

        <br />
        <span style={{ color: "white", fontWeight: "600", fontSize: "20px" }}>
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
        {/* Contact Me + Icons in one line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap", // makes it responsive
          }}
        >
          <button className="banner-button">Contact Me</button>

          <a
            href="https://github.com/gohiljaydip69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              alt="GitHub"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jaydipgohil31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </a>

          <a href="mailto:gohiljaydip69@gmail.com">
            <img
              src={Gmail}
              alt="Gmail"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

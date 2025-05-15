import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import bannerImage from "../../assets/banner_Image.png";
import "./homeBanner.css";

const HomeBanner = () => {
  return (
    <Element name="Home">
      <div className="banner-container">
        {/* Image Side */}
        <motion.div
          className="banner-image"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="BannerInnerImage"
            src={bannerImage}
            alt="Banner"
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="banner-content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            style={{ fontSize: "38px", color: "#00bcd4", fontWeight: "bold" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm Jaydip Gohil 👋
          </motion.h1>

          <motion.p
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
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            MERN Stack Developer passionate about crafting scalable, user-friendly web applications using modern technologies like React, Node.js, and MongoDB.
          </motion.p>

          <br />

          <motion.span
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "18px",
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            "MERN STACK DEVELOPER • React Enthusiast • Building Scalable Web Apps • Turning Ideas into Full-Stack Reality"
          </motion.span>

          <br />
          <br />

          {/* Icons + Button */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              className={twMerge(
                clsx("banner-button")
              )}
            >
              Contact Me
            </button>

            <Link to="https://github.com/gohiljaydip69" target="_blank">
              <FaGithub className="banner-icon" />
            </Link>

            <Link to="https://www.linkedin.com/in/jaydipgohil31/" target="_blank">
              <CiLinkedin className="banner-icon" />
            </Link>

            <Link to="mailto:gohiljaydip69@gmail.com">
              <MdOutlineMailOutline className="banner-icon" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Element>
  );
};

export default HomeBanner;

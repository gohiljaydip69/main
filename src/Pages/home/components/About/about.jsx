import "./about.css";
import about from "../../assets/about-main.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from 'react-scroll';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
     <Element name="About">
    <div id="About-Id" className="about-Container">
      {/* About Content */}
      <div className="about-Content" data-aos="fade-right">
        <h1 className="about-Heading">
          About <span>Me</span>
        </h1>
        <p className="about-Description">
          I’m Jaydip Gohil, a passionate MERN Stack Developer from Surat...
          <br />
          <br />/
          Whether it’s building user-focused applications or experimenting with
          the latest tech, I’m driven by curiosity, innovation, and the desire
          to create meaningful digital experiences.
        </p>
      </div>

      {/* About Image */}
      <div className="about-image" data-aos="fade-left">
        <img src={about} alt="Developer Illustration" className="about-InnerImage" />
      </div>
    </div>
    </Element>
  );
};

export default About;

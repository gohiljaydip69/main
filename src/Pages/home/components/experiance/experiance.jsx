import React, { useEffect } from "react";
import "./experiance.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from 'react-scroll';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timelineData = [
    {
      role: "Blockchain Developer Intern",
      company: "Tech4Good",
      date: "Jan 2024 - Mar 2024",
      description:
        "Developed a decentralized application (DApp) using Solidity and React, enhancing user experience and security.",
     
    },
    {
      role: "Full Stack Developer Intern",
      company: "7Seasol",
      date: "Jan 2025 - Present",
      description:
        "Contributed to the development of a web application using the MERN stack, focusing on user authentication and database management.",
    },
  ];

  return (
    <Element name="Experience">
    <section className="experience-section" id="Experience-Id">
      <h2 className="experience-title" data-aos="fade-up">
        Work <span style={{color:"white"}}>Experience</span>
      </h2>
    
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <span>{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
};

export default Experience;

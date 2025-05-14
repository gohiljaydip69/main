import React from "react";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Element  } from "react-scroll";
const projects = [
  {
    title: "CaseGrid",
    tech: "React.js",
    description:
      "The e-Portal court case management system digitizes judicial processes, offering features like case scheduling, document management, and real-time updates. It ensures transparency, efficiency, and secure data handling.",
    github: "https://github.com/yourusername/casegrid",
    demo: "https://casegrid-demo.com"
  },
  {
    title: "BING – Virtual Assistant",
    tech: "HTML, CSS, JavaScript",
    description:
      "An interactive voice-controlled web app that uses speech recognition to listen to user commands, process them, and perform predefined actions using modern web development libraries.",
    github: "https://github.com/yourusername/bing-assistant",
    demo: "https://bing-assistant-demo.com"
  },
  {
    title: "GivingGrace",
    tech: "MongoDB, Express, React, Node.js",
    description:
      "A donation portal that connects donors to NGOs securely and efficiently. It allows users to choose NGOs and donate easily from home, streamlining charitable giving.",
    github: "https://github.com/yourusername/givinggrace",
    demo: "https://givinggrace-demo.com"
  }
];

const Projects = () => {
  return (
    <Element name="Projects">
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
};

export default Projects;

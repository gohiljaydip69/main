import './skills.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from "react-scroll";

import {
  frontEndskillData,
  backEndskillData,
  databaseSkillData,
  toolsSkillData,
} from './skillData.jsx';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderSkillSection = (title, data, colorClass) => (
    <div className={`skill-category ${colorClass}`} data-aos="fade-up">
      <h3>{title}</h3>
      <div className="skill-card-inner">
        {data.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.icon} alt={skill.name} />
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Element name="Skills">
    <div className="skill-container">
      <h2 className="section-title" data-aos="fade-down">Skills</h2>
      <div className="skill-card-container">
        {renderSkillSection('Frontend', frontEndskillData, 'frontend')}
        {renderSkillSection('Backend', backEndskillData, 'backend')}
        {renderSkillSection('Database', databaseSkillData, 'database')}
        {renderSkillSection('Tools & Technologies', toolsSkillData, 'tools')}
      </div>
    </div>
    </Element>
  );
};

export default Skills;

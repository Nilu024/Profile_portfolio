import React from "react";
import "../App.css";
import { Monitor, Server, Database, Palette} from 'lucide-react';

function TechnicalExpertise() {
  const skills = {
    Frontend: {
      skills: ["React", "JavaScript", "HTML5", "CSS3"],
      icon: <Monitor size={24} />,
    },
    Backend: {
      skills: ["Node.js", "Express", "Java"],
      icon: <Server size={24} />,
    },
    Database: {
      skills: ["MongoDB", "MySQL"],
      icon: <Database size={24} />,
    },
    "Tools & Design": {
      skills: ["Git", "GitHub", "Version Control"],
      icon: <Palette size={24} />,
    },
  };

  return (      
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className="skill-card">
              <h3 className="skill-category">
                {data.icon}
                {category}
              </h3>
              <div className="skill-tags">
                {data.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;

import React from "react";
import { Monitor, Server, Database, GitBranch, Cpu } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: <Monitor size={22} />,
    color: "#6366f1",
    skills: ["React.js", "Redux", "TanStack Query", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI"],
  },
  {
    category: "Backend",
    icon: <Server size={22} />,
    color: "#8b5cf6",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    icon: <Database size={22} />,
    color: "#06b6d4",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Tools & Version Control",
    icon: <GitBranch size={22} />,
    color: "#10b981",
    skills: ["Git", "GitHub", "Agile / Scrum"],
  },
  {
    category: "Core Concepts",
    icon: <Cpu size={22} />,
    color: "#f59e0b",
    skills: ["OOP", "DBMS", "Data Structures", "RESTful Architecture"],
  },
];

function TechnicalExpertise() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillGroups.map(({ category, icon, color, skills }) => (
            <div key={category} className="skill-card">
              <h3 className="skill-category" style={{ color }}>
                <span className="skill-icon" style={{ background: color + "18" }}>
                  {icon}
                </span>
                {category}
              </h3>
              <div className="skill-tags">
                {skills.map((skill) => (
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

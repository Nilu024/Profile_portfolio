import React from "react";
import "../App.css";
import { Globe, Code, Layers } from "lucide-react";

function Interests() {
  const interests = [
    {
      name: "Web Performance",
      icon: <Globe size={28} />,
      description:
        "Passionate about optimizing web applications for speed, accessibility, and superior user experience across all devices and platforms.",
    },
    {
      name: "Open Source",
      icon: <Code size={28} />,
      description:
        "Actively contributing to open source projects and engaging with the developer community to create innovative solutions.",
    },
    {
      name: "UI/UX Design",
      icon: <Layers size={28} />,
      description:
        "Creating intuitive and visually appealing user interfaces that provide seamless user experiences and drive engagement.",
    },
  ];

  return (
    <section id="interests" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Interests & Continuous Learning</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.name}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;

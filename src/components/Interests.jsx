import React from "react";
import { Zap, BookOpen, Users, Globe, Code2, Layout } from "lucide-react";

const interests = [
  {
    name: "Full Stack Development",
    icon: <Code2 size={28} />,
    color: "#6366f1",
    description:
      "Building end-to-end web applications using the MERN stack — from database design to pixel-perfect UIs.",
  },
  {
    name: "API Design",
    icon: <Zap size={28} />,
    color: "#8b5cf6",
    description:
      "Designing clean, scalable RESTful APIs with JWT auth and role-based access control for real-world applications.",
  },
  {
    name: "UI/UX Engineering",
    icon: <Layout size={28} />,
    color: "#06b6d4",
    description:
      "Crafting responsive, accessible, and intuitive interfaces with React, Tailwind CSS, and ShadCN UI components.",
  },
  {
    name: "Open Source",
    icon: <Globe size={28} />,
    color: "#10b981",
    description:
      "Engaging with the developer community through open source projects and continuous learning on GitHub.",
  },
  {
    name: "Continuous Learning",
    icon: <BookOpen size={28} />,
    color: "#f59e0b",
    description:
      "Always exploring new technologies — currently deepening knowledge in TanStack Query, Redux, and cloud deployments.",
  },
  {
    name: "Agile Collaboration",
    icon: <Users size={28} />,
    color: "#ef4444",
    description:
      "Thriving in team environments using Git workflows, code reviews, and agile sprints for efficient delivery.",
  },
];

function Interests() {
  return (
    <section id="interests" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Interests & Learning</h2>
        <div className="interests-grid">
          {interests.map((item, index) => (
            <div key={index} className="interest-card">
              <div
                className="interest-icon"
                style={{ background: item.color + "18", color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="interest-title">{item.name}</h3>
              <p className="interest-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;

import React, { useState } from "react";
import { Github, ExternalLink, Server } from "lucide-react";

const projects = [
  {
    title: "Visitor Management System",
    description:
      "A full-stack VMS solution for managing visitor entries, check-ins/check-outs, and host notifications. Features secure authentication, real-time updates, and an admin dashboard for reporting.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    frontendGithub: "https://github.com/Nilu024/VMS_Frontend",
    backendGithub: "https://github.com/Nilu024/VMS_Backend",
    demo: "https://vms-frontend-nine.vercel.app",
    color: "#6366f1",
    emoji: "🏢",
  },
  {
    title: "Task Manager",
    description:
      "Full-stack Kanban-based task management system with secure user authentication. Features CRUD operations, task prioritization, deadline tracking, drag-and-drop UI, and optimized MongoDB queries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    frontendGithub: "https://github.com/Nilu024/Todo-Frontend",
    backendGithub: "https://github.com/Nilu024/Todo-Backend",
    demo: "https://todo-frontend-henna-two.vercel.app/",
    color: "#8b5cf6",
    emoji: "✅",
  },
  {
    title: "E-Commerce Website",
    description:
      "Scalable full-stack e-commerce platform with authentication and product management. Includes product filtering, search, category browsing, cart & order management, and a full admin panel.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    frontendGithub: "https://github.com/Nilu024/E-commerce",
    backendGithub: null,
    demo: null,
    color: "#06b6d4",
    emoji: "🛒",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix-inspired frontend application showcasing modern UI design, movie browsing, category navigation, and a polished streaming platform interface.",
    tech: ["React.js", "CSS3", "JavaScript", "API Integration"],
    frontendGithub: "https://github.com/Nilu024/netflix-clone",
    backendGithub: null,
    demo: "https://netflix-clone-phi-lake.vercel.app/",
    color: "#ef4444",
    emoji: "🎬",
  },
  {
    title: "Learning Platform",
    description:
      "An interactive deep learning educational platform featuring course content, lesson modules, and a clean UI for structured knowledge delivery on machine learning topics.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    frontendGithub: "https://github.com/Nilu024/DeepLearning",
    backendGithub: null,
    demo: "https://deep-learning-phi.vercel.app/",
    color: "#10b981",
    emoji: "🧠",
  },
];

function FeaturedProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="project-card-header"
                style={{ background: project.color + "15", borderBottom: `3px solid ${project.color}` }}
              >
                <span className="project-emoji">{project.emoji}</span>
                <div
                  className="project-color-dot"
                  style={{ background: project.color }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ color: project.color, borderColor: project.color + "40", background: project.color + "10" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: project.color }}
                    >
                      <Github size={15} />
                      {project.backendGithub ? "Frontend" : "GitHub"}
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: project.color }}
                    >
                      <Server size={15} />
                      Backend
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link project-link-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: project.color, color: "#fff" }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;

import React from "react";
import "../App.css";
import { Github, ExternalLink } from "lucide-react";

function FeaturedProjects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix clone featuring user authentication, video streaming capabilities, and personalized recommendations with modern UI/UX design.",
      tech: ["React", "CSS3", "JavaScript", "API Integration"],
      github: "https://github.com/Nilu024/netflix-clone",
      demo: "https://netflix-clone-phi-lake.vercel.app/",
      image: "/images/netflix.png",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
      tech: ["React", "Node.js", "Bootstrap", "Socket.io"],
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://demo-taskmanager.com",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, inventory management, and comprehensive admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
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

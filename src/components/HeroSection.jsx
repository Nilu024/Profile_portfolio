import React, { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "React.js Enthusiast",
  "Node.js Engineer",
  "Full Stack Builder",
];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="about" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        <div className="profile-wrapper">
          <div className="profile-ring" />
          <div className="profile-image">
            <img src="/images/Nilesh-pic.jpeg" alt="Nilesh Desale" />
          </div>
          <div className="profile-badge">
            <span className="badge-dot" />
            Available for hire
          </div>
        </div>

        <div className="hero-text-block">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Nilesh Desale</h1>
          <div className="hero-role-line">
            <span className="hero-role-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-bio">
            Passionate full-stack developer specializing in the MERN stack.
            Currently interning at <strong>Instaplex Solution Pvt. Ltd.</strong>,
            building scalable web applications and RESTful APIs. Pursuing B.E. in
            Information Technology at Savitribai Phule Pune University (2026).
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">6+</span>
              <span className="stat-label">Months Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">7+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="mailto:nileshdesale24@gmail.com" className="btn-primary">
              Hire Me
            </a>
            <button
              className="btn-secondary"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default HeroSection;

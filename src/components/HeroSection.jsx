import React from "react";
import "../App.css";
import { Mail } from "lucide-react";

function HeroSection() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <div className="profile-image">
          <img src="/images/crop.jpg" alt="Nilesh Desale" />
        </div>
        <h1 className="hero-title">MERN Stack Developer</h1>
        <p className="hero-subtitle">
          Passionate about creating exceptional digital experiences with modern
          web technologies. I build scalable, user-friendly applications that
          make a meaningful impact and drive innovation.
        </p>
        <a href="mailto:nileshdesale24@gmail.com" className="cta-button">
          <Mail size={20} />
          Let's Collaborate
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

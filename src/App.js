import React, { useEffect } from "react";
import CommonHeader from "./header/CommonHeader";
import HeroSection from "./components/HeroSection";
import TechnicalExpertise from "./components/TechnicalExpertise";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import "./App.css";

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      ".section, .skill-card, .project-card, .interest-card, .timeline-item"
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <CommonHeader />
      <HeroSection />
      <TechnicalExpertise />
      <Experience />
      <FeaturedProjects />
      <Interests />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p className="footer-content">
            © 2025 Nilesh Desale — Built with React &amp; passion for great UX.
          </p>
        </div>
      </footer>
    </div>
  );
}

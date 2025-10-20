import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../App.css";

function CommonHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      const sections = ["about", "skills", "projects", "interests", "contact"];
      let currentSection = "about";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`nav-container ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-content">
        <h2 className="logo">Nilesh Desale</h2>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          {["about", "skills", "projects", "interests", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-item ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default CommonHeader;

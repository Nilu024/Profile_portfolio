import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["about", "skills", "experience", "projects", "interests", "contact"];

function CommonHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let current = "about";
      navLinks.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-content">
        <button className="logo" onClick={() => scrollToSection("about")}>
          ND<span className="logo-dot">.</span>
        </button>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-item ${activeSection === section ? "active" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default CommonHeader;

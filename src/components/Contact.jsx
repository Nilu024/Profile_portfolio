import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-inner">
          <p className="contact-tagline">
            I'm actively looking for internship and full-time opportunities.
            Whether you have a project in mind or just want to say hi — my inbox is always open!
          </p>
          <div className="contact-cards">
            <a href="mailto:nileshdesale24@gmail.com" className="contact-card">
              <div className="contact-card-icon"><Mail size={18} /></div>
              nileshdesale24@gmail.com
            </a>
            <a href="tel:+919699951857" className="contact-card">
              <div className="contact-card-icon"><Phone size={18} /></div>
              +91 9699951857
            </a>
            <div className="contact-card">
              <div className="contact-card-icon"><MapPin size={18} /></div>
              Pune, Maharashtra
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Nilu024/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nilesh-desale-a79872282/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nileshdesale24@gmail.com"
              className="social-link"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

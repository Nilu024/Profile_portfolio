import React from "react";
import "../App.css";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section section-gradient">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "3rem",
            opacity: 0.9,
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 3rem",
          }}
        >
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life and create something
          amazing together.
        </p>
        <div className="contact-info">
          <a href="mailto:nileshdesale24@gmail.com" className="contact-item">
            <Mail size={20} />
            nileshdesale24@gmail.com
          </a>
          <a href="tel:+919699951857" className="contact-item">
            <Phone size={20} />
            +91 9699951857
          </a>
          <div className="contact-item">
            <MapPin size={20} />
            Hadapsar, Pune
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/Nilu024/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nilesh-desale-a79872282/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

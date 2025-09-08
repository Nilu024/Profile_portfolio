import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Code, Database, Globe, Smartphone, Monitor, Server,
  Palette, Layers, Menu, X
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedSections, setAnimatedSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Intersection Observer for scroll animations
      const sections = document.querySelectorAll('.section, .skill-card, .project-card, .interest-card');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !section.classList.contains('animate')) {
          section.classList.add('animate');
        }
      });

      // Update active section based on scroll position
      const sections2 = ['about', 'skills', 'projects', 'interests', 'contact'];
      const currentSection = sections2.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Frontend': {
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      icon: <Monitor size={24} />
    },
    'Backend': {
      skills: ['Node.js', 'Express', 'Java'],
      icon: <Server size={24} />
    },
    'Database': {
      skills: ['MongoDB', 'MySQL'],
      icon: <Database size={24} />
    },
    'Tools & Design': {
      skills: ['Git', 'GitHub', 'Version Control'],
      icon: <Palette size={24} />
    }
  };

  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A responsive Netflix clone featuring user authentication, video streaming capabilities, and personalized recommendations with modern UI/UX design.',
      tech: ['React', 'CSS3', 'JavaScript', 'API Integration'],
      github: 'https://github.com/Nilu024/netflix-clone',
      demo: 'https://netflix-clone-phi-lake.vercel.app/',
      image: '/images/netflix.png'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.',
      tech: ['React', 'Node.js', 'Bootstrap', 'Socket.io'],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://demo-taskmanager.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, inventory management, and comprehensive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    }
  ];

  const interests = [
    { 
      name: 'Web Performance', 
      icon: <Globe size={28} />, 
      description: 'Passionate about optimizing web applications for speed, accessibility, and superior user experience across all devices and platforms.' 
    },
    { 
      name: 'Open Source', 
      icon: <Code size={28} />, 
      description: 'Actively contributing to open source projects and engaging with the developer community to create innovative solutions.' 
    },
    { 
      name: 'UI/UX Design', 
      icon: <Layers size={28} />, 
      description: 'Creating intuitive and visually appealing user interfaces that provide seamless user experiences and drive engagement.' 
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav className={`nav-container ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <h2 className="logo">Nilesh Desale</h2>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {['about', 'skills', 'projects', 'interests', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-content">
          <div className="profile-image">
            <img src="/images/crop.jpg" alt="Nilesh Desale" />
          </div>
          <h1 className="hero-title">MERN Stack Developer</h1>
          <p className="hero-subtitle">
            Passionate about creating exceptional digital experiences with modern web technologies. 
            I build scalable, user-friendly applications that make a meaningful impact and drive innovation.
          </p>
          <a href="mailto:nileshdesale24@gmail.com" className="cta-button">
            <Mail size={20} />
            Let's Collaborate
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="skill-card">
                <h3 className="skill-category">
                  {data.icon}
                  {category}
                </h3>
                <div className="skill-tags">
                  {data.skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
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

      {/* Interests Section */}
      <section id="interests" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Interests & Continuous Learning</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h3 className="interest-title">{interest.name}</h3>
                <p className="interest-description">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-gradient">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life and create something amazing together.
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
            <a href="https://github.com/Nilu024/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-desale-a79872282/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-content">
            © 2025 Nilesh Desale. Crafted with React and passion for exceptional user experiences.
          </p>
        </div>
      </footer>

      <style jsx>{`
        /* Enhanced Portfolio Styles with Animations and Responsiveness */

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5a67d8 0%, #6b5b95 100%);
        }

        /* Navigation Styles */
        .nav-container {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .nav-scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-item {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          color: #666;
          text-transform: capitalize;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-item.active {
          color: #667eea;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }

        .nav-item:hover::after,
        .nav-item.active::after {
          width: 100%;
          left: 0;
        }

        .nav-item:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        /* Mobile menu toggle */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 4px;
          padding: 8px;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }

        .hero-content {
          max-width: 800px;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .profile-image {
          width: 150px;
          height: 150px;
          overflow: hidden;
          border-radius: 50%;
          margin: 0 auto 2rem;
          position: relative;
          border: 4px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          animation: profileFloat 6s ease-in-out infinite;
        }

        @keyframes profileFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .profile-image:hover {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
          opacity: 0;
          animation: slideUp 1s ease forwards 0.3s;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: slideUp 1s ease forwards 0.6s;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-weight: 500;
          opacity: 0;
          animation: slideUp 1s ease forwards 0.9s;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Section Styles */
        .section {
          padding: 6rem 0;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .section-alt {
          background: #f8f9fa;
        }

        .section-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 700;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateY(30px);
        }

        .skill-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .skill-category {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #667eea;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #f1f3f4 0%, #e8eaed 100%);
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: scale(1.05);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
          position: relative;
        }

        .project-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .project-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #333;
        }

        .project-description {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.4rem 0.8rem;
          background: linear-gradient(135deg, #e8f0fe 0%, #f0f7ff 100%);
          color: #1a73e8;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(26, 115, 232, 0.1);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .project-link:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateX(5px);
        }

        /* Interests Section */
        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .interest-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .interest-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .interest-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .interest-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8f0fe 0%, #f0f7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .interest-card:hover .interest-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .interest-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #333;
        }

        .interest-description {
          color: #666;
          line-height: 1.6;
        }

        /* Contact Section */
        .contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-link:hover {
          background: white;
          color: #667eea;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Footer */
        .footer {
          padding: 2rem 0;
          background: #1a1a1a;
          color: white;
          text-align: center;
        }

        .footer-content {
          opacity: 0.8;
          font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            transition: all 0.3s ease;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
          }

          .nav-menu.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .nav-item {
            padding: 1rem 0;
            color: #333;
            font-size: 1.1rem;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .container {
            padding: 0 1rem;
          }

          .section {
            padding: 4rem 0;
          }

          .skills-grid,
          .projects-grid,
          .interests-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .contact-info {
            flex-direction: column;
            gap: 1rem;
          }

          .social-links {
            gap: 0.8rem;
          }

          .social-link {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 0 1rem;
          }

          .skill-card,
          .project-content,
          .interest-card {
            padding: 1.5rem;
          }

          .profile-image {
            width: 120px;
            height: 120px;
          }

          .project-card {
            border-radius: 15px;
          }

          .project-image {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
}
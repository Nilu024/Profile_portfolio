import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express', 'Java'],
    'Database': ['MongoDB', 'MySQL'],
    'Tools': ['Git', 'GitHub', 'Version-control']
  };

  const projects = [
    {
      title: 'Netflix Clone',
      description: 'Responsive Netflix clone with user authentication, video streaming, and personalized recommendations.',
      tech: ['React', 'CSS3'],
      github: 'https://github.com/Nilu024/netflix-clone',
      demo: 'https://netflix-clone-phi-lake.vercel.app/',
      image: '/images/netflix.png'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Node.js', 'Bootstrap'],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://demo-taskmanager.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop'
    },
    {
      title: 'E-Commerce Platform (in development)',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    }
  ];

  const interests = [
    { name: 'Web Performance', icon: <Globe size={24} />, description: 'Optimizing web applications for speed and accessibility' },
    { name: 'Open Source', icon: <Code size={24} />, description: 'Contributing to open source projects and community development' },
    { name: 'Mobile Development', icon: <Smartphone size={24} />, description: 'Building cross-platform mobile applications' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: '#333',
      margin: 0,
      padding: 0
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Nilesh Desale
          </h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['about', 'skills', 'projects', 'interests', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: activeSection === section ? '#667eea' : '#666',
                  textTransform: 'capitalize',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                onMouseOver={(e) => e.target.style.color = '#667eea'}
                onMouseOut={(e) => e.target.style.color = activeSection === section ? '#667eea' : '#666'}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem' }}>
          <div style={{
            width: '150px',
            height: '150px',
            overflow: 'hidden',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            fontWeight: 'bold',
            border: '3px solid rgba(255, 255, 255, 0.2)'
          }}>
            <img src="/images/crop.jpg" alt="Nilesh Desale" width="300" height="200" />
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            MERN Stack Developer
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Passionate about creating exceptional digital experiences with modern web technologies. 
            I build scalable, user-friendly applications that make a difference.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="mailto:nileshdesale24@gmail.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Technical Skills
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skillList.map(skill => (
                    <span key={skill} style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#f1f3f4',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
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
      <section id="projects" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Featured Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <img src={project.image} alt={project.title} style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{
                        padding: '0.3rem 0.8rem',
                        backgroundColor: '#e8f0fe',
                        color: '#1a73e8',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.github} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}>
                      <Github size={16} />
                      Code
                    </a>
                    <a href={project.demo} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}>
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
      <section id="interests" style={{
        padding: '6rem 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Interests & Learning
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {interests.map((interest, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#e8f0fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#667eea'
                }}>
                  {interest.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  {interest.name}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontWeight: '700'
          }}>
            Let's Work Together
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.9
          }}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <a href="mailto:john@example.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              <Mail size={20} />
              nileshdesale24@gmail.com
            </a>
            <a href="tel:+1234567890" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              <Phone size={20} />
              +91 9699951857
            </a>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.1rem'
            }}>
              <MapPin size={20} />
              Hadapsar, Pune
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://github.com/Nilu024/" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-desale-a79872282/" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 0',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ margin: 0, opacity: 0.7 }}>
            © 2025 Nilesh Desale. Built with React and passion for great user experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}
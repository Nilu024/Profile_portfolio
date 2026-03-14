import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">

          {/* Experience */}
          <div className="timeline-item">
            <div className="timeline-icon timeline-work">
              <Briefcase size={18} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">MERN Stack Intern</h3>
                  <p className="timeline-org">Instaplex Solution Pvt. Ltd.</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={14} /> Sep 2025 – Present
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} /> Pune
                  </span>
                </div>
              </div>
              <ul className="timeline-points">
                <li>Developed and maintained full-stack web applications using the MERN stack.</li>
                <li>Designed and implemented RESTful APIs for efficient frontend-backend communication.</li>
                <li>Built reusable and responsive React components improving UI consistency.</li>
                <li>Optimized MongoDB queries, reducing API response time by ~20%.</li>
                <li>Implemented JWT-based authentication and role-based access control.</li>
                <li>Collaborated in an agile team environment using Git for version control and deployment workflows.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div className="timeline-icon timeline-edu">
              <GraduationCap size={18} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">B.E. in Information Technology</h3>
                  <p className="timeline-org">Savitribai Phule Pune University</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={14} /> Jul 2022 – Jul 2026
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} /> Pune
                  </span>
                </div>
              </div>
              <p className="timeline-detail">GPA: 7.5 / 10</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon timeline-edu">
              <GraduationCap size={18} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Higher Secondary Certificate (HSC)</h3>
                  <p className="timeline-org">Maharashtra State Board</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={14} /> Jun 2022
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} /> Malegaon, Nashik
                  </span>
                </div>
              </div>
              <p className="timeline-detail">Score: 76%</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;

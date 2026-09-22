import { Briefcase, Code2, Brain, GraduationCap, Building2 } from "lucide-react";
import { experience } from "../data/experience";

const ICONS = {
  code: Code2,
  brain: Brain,
  cap: GraduationCap,
};

function Experience() {
  const hasExperience = experience && experience.length > 0;

  return (
    <div className="section-container">
      <p className="section-label">EXPERIENCE</p>
      <h2 className="section-title">Professional Experience</h2>

      <p className="section-description">
        Internships, trainings, and project experience that shaped my
        development journey.
      </p>

      {!hasExperience ? (
        <div className="empty-state">
          <Briefcase size={32} />
          <div style={{ marginTop: 10 }}>
            Internship details will appear here. Add entries in{" "}
            <code>src/data/experience.js</code>.
          </div>
        </div>
      ) : (
        <div className="exp-grid">
          {experience.map((item, index) => {
            const IconComponent = ICONS[item.icon] || Briefcase;
            return (
              <article
                className={`exp-card exp-accent-${item.accent || "purple"}`}
                key={index}
              >
                <div className="exp-header">
                  <div className="exp-icon">
                    <IconComponent size={20} />
                  </div>

                  <div className="exp-title-block">
                    <h3 className="exp-role">{item.role}</h3>
                    <div className="exp-org">
                      <Building2 size={14} />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <span className="exp-duration">{item.duration}</span>
                </div>

                <p className="exp-description">{item.description}</p>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="exp-tech">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Experience;
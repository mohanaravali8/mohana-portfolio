import { GraduationCap, Award, TrendingUp } from "lucide-react";
import { education } from "../data/education";

function Education() {
  return (
    <div className="section-container">
      <p className="section-label">ACADEMIC BACKGROUND</p>
      <h2 className="section-title">Academic &amp; Technical Overview</h2>

      <p className="section-description">
        My academic journey from school to engineering — with consistent
        performance across SSC, Diploma, and B.Tech.
      </p>

      <div className="education-timeline">
        {education.map((item, index) => (
          <article className="education-item" key={index}>
            <span className="education-period">{item.period}</span>

            <span
              className={`education-badge ${
                item.badge === "Pursuing" ? "pursuing" : "completed"
              }`}
            >
              {item.badge}
            </span>

            <h3>
              <GraduationCap size={18} style={{ marginRight: 8, verticalAlign: "-3px" }} />
              {item.degree}
            </h3>
            <p>{item.institution}</p>

            <div className="education-scores">
              {item.cgpa && item.cgpa !== "—" && (
                <span className="score-chip">
                  <Award size={14} />
                  CGPA: {item.cgpa}
                </span>
              )}
              {item.percentage && (
                <span className="score-chip">
                  <TrendingUp size={14} />
                  Percentage: {item.percentage}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Education;
import * as Icons from "lucide-react";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <div className="section-container">
      <p className="section-label">TECHNICAL SKILLS</p>
      <h2 className="section-title">Technical Matrix</h2>

      <p className="section-description">
        A categorized overview of the languages, frameworks, and tools I work
        with across full-stack and AI development.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const IconComponent = Icons[group.icon] || Icons.Code2;
          return (
            <article className="skill-card" key={group.category}>
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <IconComponent size={20} />
                </div>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-badges">
                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
import {
 GitBranch,
  ExternalLink,
  Code2,
  ShoppingCart,
  Brain,
  Plane,
  CreditCard,
  UtensilsCrossed,
  Users,
  Server,
  Waves,
  Wallet,
  GraduationCap,
  BarChart3,
  Sprout,
} from "lucide-react";
import { projects } from "../data/projects";

// Map each project id to a fixed icon component (avoids dynamic lookups
// that can crash if an icon name doesn't exist in this lucide version).
const ICON_BY_ID = {
  1: Brain,
  2: Plane,
  3: CreditCard,
  4: UtensilsCrossed,
  5: Users,
  6: Server,
  7: ShoppingCart,
  8: Waves,
  9: Wallet,
  10: GraduationCap,
  11: BarChart3,
  12: Sprout,
};

function Projects() {
  return (
    <div className="section-container">
      <p className="section-label">MY WORK</p>
      <h2 className="section-title">Featured Projects</h2>

      <p className="section-description">
        A selection of academic and personal projects spanning full-stack
        development, AI/NLP, and modern web applications.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const IconComponent = ICON_BY_ID[project.id] || Code2;

          return (
            <article className="project-card" key={project.id}>
              {/* Colored header */}
              <div
                className={`project-header ${project.headerStyle || "lavender"}`}
              >
                <div className="project-header-icon">
                  <IconComponent size={22} />
                </div>

                <div className="project-header-badges">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span className="tech-pill" key={i}>
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link source"
                    >
                      <GitBranch size={15} />
                      View Source
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link demo"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
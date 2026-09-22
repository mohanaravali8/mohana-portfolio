import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  GitBranch,
  Mail,
} from "lucide-react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-intro">AI &amp; Full Stack Developer</p>

        <h1>
          Hi, I'm <span>Mohana Ravali</span>
        </h1>

        <h2>Full Stack Developer | AI Enthusiast | B.Tech IT</h2>

        <p className="hero-description">
          Passionate Information Technology student and aspiring full-stack
          developer with an interest in Artificial Intelligence, NLP, and
          building practical web applications.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Get In Touch
            <ArrowRight size={18} />
          </a>

          <a href="#projects" className="secondary-button">
            Featured Projects
          </a>

          <a
            href="/MohanaRavali.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
            download
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/mohanaravali8"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={21} />
          </a>

          <a
            href="https://linkedin.com/in/mohanaravalimodugudumudi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={21} />
          </a>

          <a href="mailto:mohanaravali@example.com" aria-label="Email">
            <Mail size={21} />
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-glow"></div>
        <div className="hero-image">
          <img src="/profile.png" alt="Mohana Ravali Modugumudi" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
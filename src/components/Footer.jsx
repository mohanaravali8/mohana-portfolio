import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          MR<span>.</span>
        </div>
        <div className="footer-name">Mohana Ravali</div>
        <div className="footer-role">
          Full Stack Developer | AI Enthusiast
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/mohanaravali8"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mohanaravalimodugudumudi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a href="mailto:ravalimodugumudi8@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-copy">
          © 2026 Mohana Ravali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
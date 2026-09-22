import { User } from "lucide-react";

function About() {
  return (
    <div className="section-container">
      <div className="about-inline-card">
        <div className="about-inline-header">
          <User size={20} />
          <h2>About Me</h2>
        </div>
        <p>
          I am a final-year B.Tech Information Technology student passionate
          about full-stack development, artificial intelligence, and solving
          real-world problems through technology. I enjoy developing responsive
          web applications and exploring AI/NLP-based solutions. I have
          completed multiple internships and built full-stack projects using
          the MERN stack, Python, and modern web technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
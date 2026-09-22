import { Menu, X, Home, User, Code2, GraduationCap, Folder, Briefcase, Award, Mail } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home", icon: Home },
    { name: "About", link: "#about", icon: User },
    { name: "Skills", link: "#skills", icon: Code2 },
    { name: "Education", link: "#education", icon: GraduationCap },
    { name: "Projects", link: "#projects", icon: Folder },
    { name: "Experience", link: "#experience", icon: Briefcase },
    { name: "Certifications", link: "#certifications", icon: Award },
    { name: "Contact", link: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.link.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">MR</span>
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const id = item.link.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.link}
                className={isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={15} />
                {item.name}
              </a>
            );
          })}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
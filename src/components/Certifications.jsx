import { useState, useEffect } from "react";
import {
  Award,
  Building2,
  Calendar,
  Eye,
  X,
  Download,
  Medal,
  GraduationCap,
} from "lucide-react";
import { certifications } from "../data/certifications";

const ICONS = {
  award: Award,
  medal: Medal,
  cap: GraduationCap,
};

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const hasCerts = certifications && certifications.length > 0;

  useEffect(() => {
    if (!activeCert) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeCert]);

  return (
    <div className="section-container">
      <p className="section-label">CERTIFICATIONS</p>
      <h2 className="section-title">Certifications Chain</h2>

      <p className="section-description">
        Courses and certifications that support my technical foundation in
        full-stack development and AI.
      </p>

      {!hasCerts ? (
        <div className="empty-state">
          <Award size={32} />
          <div style={{ marginTop: 10 }}>
            Certification cards will appear here. Add your certificates by
            editing <code>src/data/certifications.js</code>.
          </div>
        </div>
      ) : (
        <div className="cert-list">
          {certifications.map((cert, index) => {
            const IconComponent = ICONS[cert.icon] || Award;
            return (
              <article
                className={`cert-row cert-accent-${cert.accent || "purple"}`}
                key={index}
              >
                {/* Icon badge — no image */}
                <div className="cert-row-icon">
                  <IconComponent size={22} />
                </div>

                {/* Body */}
                <div className="cert-row-body">
                  <h3 className="cert-row-title">{cert.title}</h3>

                  <div className="cert-row-meta">
                    {cert.issuer && (
                      <span className="cert-row-issuer">
                        <Building2 size={13} />
                        {cert.issuer}
                      </span>
                    )}

                    {cert.date && cert.date !== "" && (
                      <span className="cert-row-date">
                        <Calendar size={12} />
                        {cert.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* View button — opens modal with full image */}
                <button
                  type="button"
                  className="cert-row-view"
                  onClick={() => setActiveCert(cert)}
                  aria-label={`View ${cert.title}`}
                >
                  View
                  <Eye size={13} />
                </button>
              </article>
            );
          })}
        </div>
      )}

      {/* ============ MODAL ============ */}
      {activeCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="cert-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div>
                <h3 className="cert-modal-title">{activeCert.title}</h3>
                <div className="cert-modal-meta">
                  {activeCert.issuer && <span>{activeCert.issuer}</span>}
                  {activeCert.date && <span>· {activeCert.date}</span>}
                </div>
              </div>

              <div className="cert-modal-actions">
                {activeCert.image && (
                  <a
                    href={activeCert.image}
                    download
                    className="cert-modal-btn"
                    title="Download"
                  >
                    <Download size={16} />
                  </a>
                )}
                <button
                  type="button"
                  className="cert-modal-btn"
                  onClick={() => setActiveCert(null)}
                  title="Close (Esc)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="cert-modal-body">
              {activeCert.image ? (
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="cert-modal-image"
                />
              ) : (
                <div className="cert-modal-empty">
                  No image available for this certificate.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;
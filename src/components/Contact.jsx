import { useState } from "react";
import {
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const CONTACT_EMAIL = "ravalimodugumudi8@gmail.com"; // TODO: replace with your email

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) {
      next.message = "Please write a message.";
    } else if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend yet — open the user's mail client with the message pre-filled.
    // To wire this to a real backend later, replace this block with a fetch()
    // POST to your API or an EmailJS / Formspree call.
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hi Mohana Ravali,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="section-container">
      <p className="section-label">GET IN TOUCH</p>
      <h2 className="section-title">Let's Connect &amp; Collaborate</h2>

      <p className="section-description">
        Open to opportunities, internships, collaborations, and project
        discussions — feel free to reach out.
      </p>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>Reach out through any of the channels below.</p>

          <div className="contact-item">
            <div className="contact-item-icon">
              <Mail size={18} />
            </div>
            <div className="contact-item-body">
              <strong>Email</strong>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <Phone size={18} />
            </div>
            <div className="contact-item-body">
              <strong>Phone</strong>
              <span>Available on request</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <MapPin size={18} />
            </div>
            <div className="contact-item-body">
              <strong>Location</strong>
              <span>Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="contact-socials">
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
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className={`form-field ${errors.name ? "error" : ""}`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-field ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className={`form-field ${errors.subject ? "error" : ""}`}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <span className="form-error">{errors.subject}</span>
            )}
          </div>

          <div className={`form-field ${errors.message ? "error" : ""}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="form-submit">
            <Send size={16} />
            Send Message
          </button>

          {submitted && (
            <div className="form-success">
              Your email app should now open with the message pre-filled.
            </div>
          )}

          <p className="form-note">
            This form opens your email client. For direct delivery, wire it to
            a backend or EmailJS later.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
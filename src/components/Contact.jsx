import { contactLinks } from '../data/content';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <p className="section-label">Contact</p>
        <div className="contact-inner">
          <div className="reveal">
            <h2 className="contact-headline">Let&apos;s work<br />together.</h2>
            <p className="contact-sub">
              Open to AI Consultant, Technical Program Manager, and AI Transformation roles.
              Also available for advisory and freelance engagements.
            </p>
          </div>
          <div className="contact-links-col reveal reveal-d1">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="contact-link-row"
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="label">{l.label}</span>
                <span className="value">{l.value}</span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

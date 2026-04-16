import { credentials } from '../data/content';
import '../styles/Credentials.css';

export default function Credentials() {
  return (
    <section id="credentials" className="credentials-section">
      <div className="wrap">
        <p className="section-label">Education &amp; Credentials</p>
        <div className="cred-grid reveal">
          {credentials.map((c) => (
            <div className="cred-block" key={c.title}>
              <p className="cred-block-eyebrow">{c.eyebrow}</p>
              <p className="cred-block-title">{c.title}</p>
              <p className="cred-block-sub">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

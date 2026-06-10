import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import '../styles/Projects.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <line x1="2" y1="10" x2="10" y2="2" />
    <polyline points="4,2 10,2 10,8" />
  </svg>
);

const delayClass = ['', ' reveal-d1', ' reveal-d2', ' reveal-d3', ''];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="section-label">Projects</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className={`proj-card reveal${delayClass[i]}`} key={p.title}>
              <p className={`proj-status status-${p.status}`}>
                {p.status === 'active' ? '● Active' : p.status === 'delivered' ? '✓ Completed' : '○ Planned'}
              </p>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-footer">
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.caseStudy && (
                    <Link to={p.caseStudy} className="proj-link">
                      Case Study <ArrowIcon />
                    </Link>
                  )}
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj-link">
                      GitHub <ArrowIcon />
                    </a>
                  )}
                  {p.site && (
                    <a href={p.site} target="_blank" rel="noopener noreferrer" className="proj-link">
                      Live Site <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

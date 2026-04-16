import { experience } from '../data/content';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="section-label">Experience</p>
        <div className="exp-list">
          {experience.map((job) => (
            <div className="exp-row reveal" key={`${job.company}-${job.dates}`}>
              <div className="exp-meta">
                <p className="exp-company">{job.company}</p>
                <p className="exp-dates">{job.dates}</p>
              </div>
              <div>
                <h3 className="exp-role-title">{job.role}</h3>
                <ul className="exp-bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
          <p className="exp-linkedin">
            Full history on{' '}
            <a href="https://www.linkedin.com/in/j-pendergrass" target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import { stats } from '../data/content';
import '../styles/About.css';

const creds = [
  { abbr: 'CSM', text: 'Certified ScrumMaster — Scrum Alliance · ID 001517151 · Exp. Apr 2027' },
  { abbr: 'Dev', text: 'Full Stack Certificate — Vanderbilt University · 2020' },
  { abbr: 'BA',  text: 'Music Education — Tennessee Technological University · 1996' },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <p className="section-label">About</p>
        <div className="about-grid">
          <div>
            <h2 className="about-headline reveal" id="about-heading">
              Fifteen years teaching people.<br />Now building with machines.
            </h2>
            <div className="about-body reveal reveal-d1">
              <p>
                My career started in education — designing curriculum, coaching instructors, scaling
                corporate language programs for clients like Coca-Cola. I brought that same systems
                thinking into Agile leadership: improving team velocity, launching AI programs at
                scale, and turning complexity into clarity.
              </p>
              <p>
                Now I&apos;m building at the intersection of machine learning, instructional design,
                and product leadership. I don&apos;t just understand AI theory — I build with it,
                teach it, and lead the teams that ship it.
              </p>
            </div>
            <div className="about-creds reveal reveal-d2">
              {creds.map((c) => (
                <div className="cred-item" key={c.abbr}>
                  <strong>{c.abbr}</strong> {c.text}
                </div>
              ))}
            </div>
          </div>
          <aside>
            <div className="stat-stack reveal">
              {stats.map((s) => (
                <div className="stat-item" key={s.num}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { expertise } from '../data/content';
import '../styles/Expertise.css';

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="wrap">
        <p className="section-label">Expertise</p>
        <div className="expertise-grid reveal">
          {expertise.map((col) => (
            <div className="exp-col" key={col.num}>
              <p className="exp-col-num">{col.num}</p>
              <h3 className="exp-col-title">{col.title}</h3>
              <p className="exp-col-body">{col.body}</p>
              <div className="tags">
                {col.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

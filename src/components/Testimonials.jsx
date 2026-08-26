import { testimonials } from '../data/content';
import '../styles/Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <p className="section-label" id="testimonials-heading">Testimonials</p>
        <div className="testi-grid reveal">
          {testimonials.map((t) => (
            <figure className="testi-card" key={t.name}>
              <blockquote>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <p className="testi-name">{t.name}</p>
                <p className="testi-title">{t.title}</p>
                <p className="testi-context">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

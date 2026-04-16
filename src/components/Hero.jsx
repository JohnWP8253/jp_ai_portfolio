import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-name">
      <div className="hero-inner">
        <p className="hero-kicker">Lebanon, Tennessee &mdash; Available for AI &amp; ML roles</p>
        <h1 className="hero-name" id="hero-name">John<br />Pendergrass</h1>
        <div className="hero-bottom">
          <p className="hero-tagline">
            I don&apos;t push from behind or pull from ahead. I walk alongside — that&apos;s what educating actually is.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-dark">View work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

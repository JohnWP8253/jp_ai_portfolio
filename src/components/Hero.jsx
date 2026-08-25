import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <div className="hero-inner">
        <div className="hero-top">
          <div className="hero-text">
            <p className="hero-kicker">Lebanon, Tennessee &mdash; Available for AI &amp; ML roles</p>
            <h1 className="hero-name" id="hero-name">John<br />Pendergrass</h1>
          </div>
          <div className="hero-photo-wrap">
            <img src={`${import.meta.env.BASE_URL}john-pendergrass.jpg`} alt="John Pendergrass" className="hero-photo" />
          </div>
        </div>
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

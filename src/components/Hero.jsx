function Hero() {
  return (
    <section className="hero">
      <nav className="hero-nav">
        <a href="/" className="brand">
          Created by Paige
        </a>

        <div className="nav-links">
          <a href="#work">My Work</a>
          <a href="#about">About</a>
          <a href="/request" className="nav-cta">
            Request a Design
          </a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            HAND-PAINTED IN WEST CHESTER, PA ✦
          </span>

          <h1>
            Your event deserves
            <span> something original.</span>
          </h1>

          <p>
            Custom hand-painted banners made for birthdays, graduations,
            parties, and the moments worth celebrating.
          </p>

          <div className="hero-actions">
            <a href="/request" className="primary-button">
                Request a Design →
            </a>

            <a href="#work" className="secondary-button">
              See My Work
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-card art-card-one">
            <img
                src="/src/assets/banner-1.png"
                alt="Custom hand-painted celebration banner"
            />
            </div>

            <div className="art-card art-card-two">
            <img
                src="/src/assets/banner-2.png"
                alt="Custom hand-painted birthday banner"
            />
          </div>

          <span className="doodle doodle-one">✦</span>
          <span className="doodle doodle-two">✷</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
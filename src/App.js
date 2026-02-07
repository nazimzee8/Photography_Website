import './App.css';
import React, { useRef } from 'react';

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 60,
      behavior: 'smooth',
    });
  };

  const scrollToSectionInstant = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 60,
      behavior: 'auto',
    });
  };

  const contactEmail = "michael.watson@gmail.com";

  // Modern unique logo with a "Lens" vibe
  const BrandLogo = () => (
    <div className="lens-logo">
      <div className="outer-ring">
        <div className="inner-dot"></div>
      </div>
      <div className="logo-text-wrapper">
        <span className="logo-main">MICHAEL WATSON</span>
        <span className="logo-sub">PHOTOGRAPHY</span>
      </div>
    </div>
  );

  return (
    <div className="App">
      <header className="header">
        <BrandLogo />
        <nav className="nav-menu">
          <button onClick={() => scrollToSection(introRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </nav>
      </header>

      <main id="page">
        {/* SECTION 1: INTRODUCTION (HERO) */}
        <section ref={introRef} className="hero-section section">
          <div className="hero-content">
            <h1>Capturing the Pacific Northwest</h1>
            <p>Professional nature and lifestyle photography through a lens of authenticity.</p>
            <button className="cta-button hero-btn" onClick={() => scrollToSection(contactRef)}>
              Book a Session
            </button>
          </div>
          <div className="hero-gallery">
            <img src="../public/img/nature_gallery.jpeg" alt="Nature" className="hero-img" />
            <img src="../public/img/portrait_gallery.jpg" alt="Portrait" className="hero-img" />
            <img src="../public/img/city_gallery.jpeg" alt="City" className="hero-img" />
            <img src="../public/img/social_gallery.png" alt="Lifestyle" className="hero-img" />
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section ref={aboutRef} className="about-section section">
          <div className="about-grid">
            <div className="about-image">
              <img src="./img/michael_profile.jpg" alt="Michael Watson" />
            </div>
            <div className="about-text">
              <span className="subtitle">The Storyteller</span>
              <h2>Visualizing the stories that matter.</h2>
              <p>Based in Seattle, I specialize in bridging the gap between the majestic quiet of the outdoors and the dynamic energy of digital platforms.</p>
              <div className="about-contacts">
                <div className="about-contact-block email-block">
                  <span className="contact-label">Get in Touch</span>
                  <a className="email-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
                <div className="about-contact-block digital-block">
                  <span className="contact-label">Social Medias</span>
                  <div className="pill-row">
                    <a className="pill-link" href="https://www.instagram.com/michaeljames316/" target="_blank" rel="noreferrer">
                      <img src="./img/instagram.png" alt="Instagram icon" />
                      Instagram
                    </a>
                    <a className="pill-link" href="https://www.twitch.tv/f0xygrandad" target="_blank" rel="noreferrer">
                      <img src="./img/twitch.png" alt="Twitch icon" />
                      Twitch
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <button className="ghost-button" onClick={() => scrollToSection(contactRef)}>Contact Me</button>
                <button className="ghost-button" onClick={() => scrollToSection(portfolioRef)}>Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PORTFOLIO (7 IMAGES RESTORED) */}
        <section ref={portfolioRef} className="portfolio-section section">
          <h2>Portfolio</h2>
          <div className="portfolio-grid-7">
            <img src="../public/img/portfolio1.jpg" alt="Portfolio 1" />
            <img src="../public/img/portfolio2.jpg" alt="Portfolio 2" />
            <img src="../public/img/portfolio3.jpg" alt="Portfolio 3" />
            <img src="../public/img/portfolio4.jpg" alt="Portfolio 4" />
            <img src="../public/img/portfolio5.jpg" alt="Portfolio 5" />
            <img src="../public/img/portfolio6.jpg" alt="Portfolio 6" />
            <img src="../public/img/portfolio7.jpg" alt="Portfolio 7" />
            <img src="../public/img/museum_photo.jpeg" alt="Museum photo" />
            <img src="../public/img/grungey_photo.jpeg" alt="Grungey photo" />
          </div>
        </section>

        {/* SECTION 4: CONTACT */}
        <section ref={contactRef} className="contact-section section">
          <div className="contact-container">
            <h2>Let's Create Something Together</h2>
            <div className="contact-info-block">
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Tell me about your project..."></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-container">
        <div className="footer-content">
          <BrandLogo />
          {/* Quicklinks centered horizontally on the right */}
          <nav className="footer-quicklinks">
              <button onClick={() => scrollToSectionInstant(introRef)}>Home</button>
              <button onClick={() => scrollToSectionInstant(aboutRef)}>About</button>
              <button onClick={() => scrollToSectionInstant(portfolioRef)}>Portfolio</button>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Michael Watson. Seattle, WA.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

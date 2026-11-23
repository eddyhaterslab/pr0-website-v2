export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "pr0",
    description: "Website modernization agency for high-value professionals in Belgium and the Netherlands.",
    url: "https://pr0-website-v2.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="header">
        <div className="logo serif">pr0®</div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="cta">Let’s talk</a>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Digital-first · Modernization · 2026</p>
          <h1 className="serif">pr0</h1>
          <p>We modernize websites that no longer serve the business behind them.</p>
        </section>

        <section>
          <p className="statement serif">
            Design and code are tools.<br />
            What matters is the result:<br />
            <em>a site that works as hard as you do.</em>
          </p>
        </section>

        <section id="work">
          <div className="featured-header">
            <h2 className="serif">Featured work</h2>
            <a href="#" style={{fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888'}}>All work →</a>
          </div>
          <div className="work-list">
            {[
              ["01", "Aurora Studio", "Interior brand · Full modernization"],
              ["02", "Northline Legal", "Professional services · Digital rebuild"],
              ["03", "Helix Clinic", "Healthcare · Strategy to launch"],
              ["04", "Veldt Advisory", "Finance · Performance & identity"],
            ].map(([num, title, meta]) => (
              <a key={num} href="#" className="work-item">
                <div className="work-left">
                  <span className="work-num">{num}</span>
                  <span className="work-title serif">{title}</span>
                </div>
                <span className="work-meta">{meta}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="approach" style={{background: '#111'}}>
          <p className="eyebrow">Approach</p>
          <div className="approach-item">
            <div className="approach-num serif">01</div>
            <div>
              <h3>Audit & clarity</h3>
              <p>We examine what exists, what works, and what is holding the business back.</p>
            </div>
          </div>
          <div className="approach-item">
            <div className="approach-num serif">02</div>
            <div>
              <h3>Design the future</h3>
              <p>Editorial structure, precise typography, and a system that scales.</p>
            </div>
          </div>
          <div className="approach-item">
            <div className="approach-num serif">03</div>
            <div>
              <h3>Build & launch</h3>
              <p>Engineered for speed, accessibility and long-term ownership.</p>
            </div>
          </div>
        </section>

        <section id="pricing">
          <p className="eyebrow">Transparent pricing</p>
          <h2 className="serif" style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Simple. Clear. Premium.</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-label">Basis</div>
              <div className="price serif">€4.500</div>
              <p className="price-desc">Modern website + online intake</p>
            </div>
            <div className="price-card featured">
              <div className="price-label">Groei</div>
              <div className="price serif">€7.500</div>
              <p className="price-desc">Basis + local SEO + extra pages</p>
            </div>
            <div className="price-card">
              <div className="price-label">Premium</div>
              <div className="price serif">€12.000</div>
              <p className="price-desc">Full + AI chat + advanced features</p>
            </div>
          </div>
          <p style={{marginTop: '2rem', color: '#888', fontSize: '0.9rem'}}>Recurring from €149/month (hosting & maintenance).</p>
        </section>

        <section id="contact" className="contact">
          <h2 className="serif">Let’s modernize.</h2>
          <p>Tell us about the site that needs to catch up with the business.</p>
          <a href="mailto:hello@pr0.be" className="btn">Start a conversation</a>
        </section>
      </main>

      <footer>
        <span>© 2026 pr0</span>
        <span>Website modernization · BE / NL</span>
      </footer>
    </>
  );
}
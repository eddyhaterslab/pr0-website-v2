export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "pr0",
    description: "Website modernization agency for high-value professionals in Belgium and the Netherlands.",
    url: "https://pr0-website-v2.vercel.app",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-diff">
        <div className="serif text-2xl tracking-tight">pr0®</div>
        <nav className="hidden md:flex gap-12 text-[11px] tracking-[0.2em] uppercase text-neutral-300">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="text-[11px] tracking-[0.2em] uppercase border-b border-neutral-600 pb-1">
          Let’s talk
        </a>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-10 pt-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-8">
            Digital-first · Modernization · 2026
          </p>
          <h1 className="serif text-[18vw] md:text-[14vw] leading-[0.75] tracking-[-0.04em]">
            pr0
          </h1>
          <div className="mt-8 max-w-2xl">
            <p className="text-xl md:text-2xl text-neutral-300 leading-snug">
              We modernize websites that no longer serve the business behind them.
            </p>
          </div>
        </section>

        <section className="py-32 px-6 md:px-10 border-t border-neutral-900">
          <p className="serif text-4xl md:text-6xl leading-[1.1] max-w-4xl">
            Design and code are tools.<br />
            What matters is the result:<br />
            <span className="italic">a site that works as hard as you do.</span>
          </p>
        </section>

        <section id="work" className="py-20 px-6 md:px-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="serif text-5xl">Featured work</h2>
            <a href="#" className="text-xs tracking-widest uppercase text-neutral-500">All work →</a>
          </div>
          <div className="divide-y divide-neutral-800">
            {[
              ["01", "Aurora Studio", "Interior brand · Full modernization"],
              ["02", "Northline Legal", "Professional services · Digital rebuild"],
              ["03", "Helix Clinic", "Healthcare · Strategy to launch"],
              ["04", "Veldt Advisory", "Finance · Performance & identity"],
            ].map(([num, title, meta]) => (
              <a
                key={num}
                href="#"
                className="featured-item group flex items-center justify-between py-10 hover:bg-neutral-950 px-2 -mx-2 transition-colors"
              >
                <div className="flex items-baseline gap-10">
                  <span className="text-neutral-500 text-sm w-8">{num}</span>
                  <span className="title serif text-4xl md:text-6xl transition-colors">{title}</span>
                </div>
                <span className="text-sm text-neutral-500 hidden md:block">{meta}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="approach" className="py-40 px-6 md:px-10 bg-neutral-950">
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-8">Approach</p>
          <div className="space-y-20 max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div className="serif text-6xl text-neutral-700">01</div>
              <div>
                <h3 className="text-3xl mb-3">Audit & clarity</h3>
                <p className="text-neutral-400 text-lg">We examine what exists, what works, and what is holding the business back.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div className="serif text-6xl text-neutral-700">02</div>
              <div>
                <h3 className="text-3xl mb-3">Design the future</h3>
                <p className="text-neutral-400 text-lg">Editorial structure, precise typography, and a system that scales.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div className="serif text-6xl text-neutral-700">03</div>
              <div>
                <h3 className="text-3xl mb-3">Build & launch</h3>
                <p className="text-neutral-400 text-lg">Engineered for speed, accessibility and long-term ownership.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-40 px-6 md:px-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-8">Transparent pricing</p>
          <h2 className="serif text-5xl mb-16">Simple. Clear. Premium.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <div className="border border-neutral-800 p-8">
              <div className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Basis</div>
              <div className="serif text-5xl mb-4">€4.500</div>
              <p className="text-neutral-400">Modern website + online intake</p>
            </div>
            <div className="border border-neutral-800 p-8 bg-neutral-950">
              <div className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Groei</div>
              <div className="serif text-5xl mb-4">€7.500</div>
              <p className="text-neutral-400">Basis + local SEO + extra pages</p>
            </div>
            <div className="border border-neutral-800 p-8">
              <div className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Premium</div>
              <div className="serif text-5xl mb-4">€12.000</div>
              <p className="text-neutral-400">Full + AI chat + advanced features</p>
            </div>
          </div>
          <p className="mt-12 text-neutral-500 text-sm">Recurring from €149/month (hosting & maintenance).</p>
        </section>

        <section id="contact" className="py-48 px-6 md:px-10 text-center border-t border-neutral-900">
          <h2 className="serif text-7xl md:text-8xl mb-8">Let’s modernize.</h2>
          <p className="text-xl text-neutral-400 max-w-lg mx-auto mb-12">
            Tell us about the site that needs to catch up with the business.
          </p>
          <a
            href="mailto:hello@pr0.be"
            className="inline-block border border-white px-12 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            Start a conversation
          </a>
        </section>
      </main>

      <footer className="py-10 px-6 md:px-10 text-xs text-neutral-600 flex justify-between border-t border-neutral-900">
        <span>© 2026 pr0</span>
        <span>Website modernization · BE / NL</span>
      </footer>
    </>
  );
}
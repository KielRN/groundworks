import { useEffect } from 'react';

export default function InstantQuotePage() {
  useEffect(() => {
    const scriptId = 'txai-form-embed-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://link.texasaiconsulting.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <header className="iq-hero">
        <div className="iq-hero-bg" />
        <div className="iq-hero-overlay" />
        <div className="iq-hero-grid" />
        <div className="accent-top" />

        <div className="iq-header container-wide">
          <a href="/" className="brand-link" aria-label="GroundWorks Construction Home">
            <img
              src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d69a0cf5ebf27de3523dd3.png"
              alt="GroundWorks Construction LLC"
              className="brand-logo"
            />
          </a>

          <div className="iq-header-right">
            <a className="phone-pill" href="tel:2103432878">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              210-343-2878
            </a>
            <p>
              <span>Licensed &amp; Insured</span> • San Antonio, TX
            </p>
          </div>
        </div>

        <div className="container iq-content">
          <p className="iq-eyebrow">Free • Fast • No Obligation</p>
          <h1>
            Stop Guessing.
            <br />
            Get an <span>Instant</span>
            <br />
            Precision Estimate
            <br />
            <strong>for Your Next Dig</strong>
          </h1>
          <p className="iq-copy">
            Answer a few quick questions about your project — trenching, grading, demolition, septic, or utility work — and
            get a real ballpark number from an experienced San Antonio crew.
          </p>

          <div className="badge-row iq-badges">
            <span>Trenching</span>
            <span>Grading</span>
            <span>Demolition</span>
            <span>Septic Tank</span>
            <span>Utility Lines</span>
          </div>
        </div>

        <div className="accent-bottom" />
      </header>

      <main className="iq-main">
        <section className="iq-form-section">
          <div className="container iq-form-wrap">
            <p className="iq-step">Step 1 of 1 — Takes About 2 Minutes</p>

            <article className="iq-form-card">
              <header className="iq-form-card-header">
                <div className="iq-icon-wrap">
                  <i className="fas fa-hard-hat" aria-hidden="true" />
                </div>
                <h2>Get Your Instant Quote</h2>
                <p>Tell us about your project — we&apos;ll get back to you with a real number</p>
              </header>

              <iframe
                src="https://link.texasaiconsulting.com/widget/form/ely2PgEcRzcBhOAa2Eyp"
                id="inline-ely2PgEcRzcBhOAa2Eyp"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Instant Quote"
                data-height="1333"
                data-layout-iframe-id="inline-ely2PgEcRzcBhOAa2Eyp"
                data-form-id="ely2PgEcRzcBhOAa2Eyp"
                title="Instant Quote"
                className="quote-embed"
              />

              <div className="iq-seals">
                <div className="iq-seal-item">
                  <i className="fas fa-shield-alt" aria-hidden="true" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="iq-seal-item">
                  <i className="fas fa-lock" aria-hidden="true" />
                  <span>100% Private</span>
                </div>
                <div className="iq-seal-item">
                  <i className="fas fa-clock" aria-hidden="true" />
                  <span>Fast Response</span>
                </div>
                <div className="iq-seal-item">
                  <i className="fas fa-ban" aria-hidden="true" />
                  <span>No Spam Ever</span>
                </div>
              </div>
            </article>

            <p className="iq-footnote">
              GroundWorks Construction LLC • San Antonio, TX •{' '}
              <a href="tel:2103432878">210-343-2878</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <img
            src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d69a0cf5ebf27de3523dd3.png"
            alt="GroundWorks Construction LLC"
            className="footer-logo"
          />
          <p className="footer-tag">Site Preparation • Earthwork • Haul-Off</p>
          <p className="footer-sub">Trenching | Grading | Demolition | Septic Tank | Utility Lines</p>

          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=61587479912435" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/ground.worksconstructionllc/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </div>

          <div className="legal">
            <p>© 2026 GroundWorks Construction LLC. All Rights Reserved.</p>
            <p>
              <a href="https://go.groundworksconstructionllc.com/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="https://go.groundworksconstructionllc.com/terms-of-service" target="_blank" rel="noreferrer">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


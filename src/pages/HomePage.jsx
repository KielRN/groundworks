import { useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Excavation & Grading',
    icon: (
      <img
        src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/698515930708e416aef52496.svg"
        alt="Excavator"
        className="service-svg"
      />
    ),
    items: ['Trenching for utilities & drainage', 'Fine grading and base prep', 'GC site cleanup', 'Material handling'],
  },
  {
    title: 'Demolition & Removal',
    icon: <i className="fas fa-hammer" aria-hidden="true" />,
    items: ['Light structural demolition', 'Concrete and flatwork demolition', 'Site tear-outs and removal prep', 'Debris loading and disposal'],
  },
  {
    title: 'Concrete & Haul-Off',
    icon: <i className="fas fa-truck-loading" aria-hidden="true" />,
    items: ['Driveways, slabs, patios, sidewalks', 'Dirt removal and backfill', 'Building pads and driveway prep', 'High-volume load-outs'],
  },
  {
    title: 'Partner Services',
    icon: <i className="fas fa-cogs" aria-hidden="true" />,
    items: ['Core drilling (structural, plumbing)', 'Slab sawing (concrete, asphalt)', 'GPR scanning for utilities', 'Rebar detection services'],
  },
];

const WHY_US = [
  ['⚡', 'Fast Turnaround', 'Same-day to 2-day completion on most projects. We keep your timeline on track.'],
  ['🛡️', 'Fully Insured', 'Complete insurance coverage for your peace of mind on every project.'],
  ['💰', 'Transparent Pricing', 'Competitive, upfront pricing with no hidden fees or surprises.'],
  ['🚜', 'In-House Fleet', 'Modern equipment fleet with trained operators — no subbing out.'],
  ['🌱', 'Eco-Friendly Options', 'Electric-capable equipment for zero-emission and low-noise job sites.'],
  ['✅', 'Safety-Driven', 'Clear job sequencing and safety SOPs for every project.'],
];

const EQUIPMENT = [
  ['🚜', 'John Deere 333G Compact Track Loader', 'Equipped with 2D Slope Control for accurate grading and precision work.'],
  ['🚛', 'Toro Ultra Buggy 2500-TS', 'High-capacity material shuttling with electric-capable operation for zero-emission sites.'],
  ['⛏️', 'Mini Excavators (2 Units)', 'Perfect for trenching, footings, and tight-access excavation. One unit electric-capable.'],
  ['🚚', 'Heavy-Duty Gooseneck Dump Trailer', 'Dual tandem, low deck design for equipment transport and haul-off operations.'],
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="hero" id="top">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="accent-top" />

        <div className="hero-header container-wide">
          <a href="#top" className="brand-link" aria-label="GroundWorks Construction Home">
            <img
              src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d69a0cf5ebf27de3523dd3.png"
              alt="GroundWorks Construction LLC"
              className="brand-logo"
            />
          </a>

          <nav className="hero-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#equipment">Equipment</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="hero-contact">
            <a className="phone-pill" href="tel:2103432878">
              <i className="fas fa-phone-alt" aria-hidden="true" />
              210-343-2878
            </a>
            <p>
              <span>Licensed &amp; Insured</span> • San Antonio, TX
            </p>
          </div>
        </div>

        <div className="hero-content container">
          <img
            src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d69a0cf5ebf27de3523dd4.png"
            alt="GroundWorks icon"
            className="hero-icon"
          />
          <p className="eyebrow">Commercial & Residential Site Work</p>
          <h1>
            GROUND<span>WORKS</span>
            <br />
            <strong>CONSTRUCTION LLC</strong>
          </h1>
          <p className="hero-copy">
            Production-focused site preparation and earthwork contractor serving San Antonio. Fast, controlled excavation,
            concrete removal, grading, and haul-off with an in-house fleet.
          </p>

          <div className="badge-row">
            <span>Trenching</span>
            <span>Grading</span>
            <span>Demolition</span>
            <span>Septic Tank</span>
            <span>Utility Lines</span>
          </div>

          <button className="btn-gw" onClick={() => navigate('/instant-quote')}>
            <i className="fas fa-hard-hat" aria-hidden="true" />
            Free Estimate →
          </button>
          <small>NO OBLIGATION • FAST RESPONSE</small>
        </div>

        <div className="hero-image-wrap container-wide">
          <img
            src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d797ce017845ff95cf58df.png"
            alt="GroundWorks Construction aerial job site view"
            className="hero-image"
          />
        </div>

        <div className="accent-bottom" />
      </header>

      <main>
        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-title">
              <h2>
                OUR <span>CORE SERVICES</span>
              </h2>
              <div className="title-bar" />
            </div>

            <div className="services-grid">
              {SERVICES.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                  onClick={() => navigate('/instant-quote')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/instant-quote')}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="service-card-cta">Get a Free Estimate →</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="why">
          <div className="why-image-col">
            <img
              src="https://assets.cdn.filesafe.space/K7aFzhobg8yJLdUf1h05/media/69d797ce019dc508d3b8d699.png"
              alt="GroundWorks excavators at work"
            />
          </div>

          <div className="why-content-col">
            <div className="section-title left">
              <h2>
                WHY <span>GROUNDWORKS</span>
              </h2>
              <div className="title-bar" />
            </div>

            <div className="why-list">
              {WHY_US.map(([icon, title, text]) => (
                <article className="why-item" key={title}>
                  <div className="emoji">{icon}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipment" className="section section-light">
          <div className="container">
            <div className="section-title">
              <h2>
                OUR <span>EQUIPMENT FLEET</span>
              </h2>
              <div className="title-bar" />
            </div>

            <div className="equipment-grid">
              {EQUIPMENT.map(([icon, title, description]) => (
                <article className="equipment-card" key={title}>
                  <div className="emoji">{icon}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-dark">
          <div className="container">
            <div className="section-title">
              <h2>
                CONTACT <span>US</span>
              </h2>
              <div className="title-bar" />
            </div>

            <div className="contact-grid">
              <article className="contact-card">
                <h3>Get In Touch</h3>

                <div className="contact-item red">
                  <i className="fas fa-phone-alt" aria-hidden="true" />
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:2103432878">210-343-2878</a>
                  </div>
                </div>

                <div className="contact-item gold">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                  <div>
                    <h4>Service Area</h4>
                    <p>San Antonio &amp; Surrounding Areas</p>
                  </div>
                </div>

                <div className="contact-item silver">
                  <i className="fas fa-clock" aria-hidden="true" />
                  <div>
                    <h4>Availability</h4>
                    <p>Commercial &amp; Residential</p>
                  </div>
                </div>

                <div className="contact-tags">
                  <span>Fully Insured</span>
                  <span>Safety-Driven</span>
                  <span>Schedule-Focused</span>
                </div>
              </article>

              <article className="form-card">
                <h3>Request a Quote</h3>
                <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                <iframe
                  src="https://link.texasaiconsulting.com/widget/form/EM36cCwLVIDVGetqquz5"
                  id="inline-EM36cCwLVIDVGetqquz5"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Us"
                  data-height="585"
                  data-layout-iframe-id="inline-EM36cCwLVIDVGetqquz5"
                  data-form-id="EM36cCwLVIDVGetqquz5"
                  title="Contact Us"
                  className="form-embed"
                />
              </article>
            </div>
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


/* global React */
const { useState: useStateChrome, useEffect: useEffectChrome } = React;

// ============================================================
// HEADER + MOBILE MENU
// ============================================================
function Header({ page, navigate, onDark = false }) {
  const [mobileOpen, setMobileOpen] = useStateChrome(false);

  useEffectChrome(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    ["home", "Home"],
    ["services", "Services"],
    ["about", "About"],
    ["faq", "FAQ"],
    ["locations", "Visit"],
  ];

  const go = (p) => { navigate(p); setMobileOpen(false); };

  return (
    <React.Fragment>
      <header className={`site-header ${onDark ? "on-dark" : ""}`}>
        <div className="header-inner">
          <div className="logo" onClick={() => go("home")}>
            <span className="logo-mark" aria-hidden="true"></span>
            <span>{window.SHOP.shortName}</span>
          </div>

          <nav className="nav-desktop" aria-label="Primary">
            {links.map(([id, label]) => (
              <a key={id} className={`nav-link ${page === id ? "active" : ""}`} role="button" tabIndex={0} onClick={() => go(id)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(id)}>{label}</a>
            ))}
          </nav>

          <div className="header-cta">
            <button className="btn btn-primary btn-sm header-book-btn" onClick={() => go("book")}>Book Now</button>
            <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(true)}>
              <window.Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu-backdrop ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-menu ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <button className="mobile-menu-close" aria-label="Close" onClick={() => setMobileOpen(false)}>
          <window.Icon name="x" size={20} />
        </button>
        {[...links, ["gift-cards", "Gift Cards"]].map(([id, label]) => (
          <a key={id} className="mobile-nav-link" role="button" tabIndex={0} onClick={() => go(id)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(id)}>
            <span>{label}</span>
            <span className="arrow">→</span>
          </a>
        ))}
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          <button className="btn btn-primary btn-lg" onClick={() => go("book")}>Book Now</button>
          <a className="btn btn-ghost-dark" href={`tel:${window.SHOP.phoneRaw}`}>
            <window.Icon name="phone" size={14} /> {window.SHOP.phone}
          </a>
        </div>
      </aside>
    </React.Fragment>
  );
}

// ============================================================
// STICKY MOBILE BOOK BAR
// ============================================================
function BookBar({ navigate }) {
  return (
    <div className="book-bar" role="region" aria-label="Quick book">
      <span className="book-bar-text">Open today · 8a–7p</span>
      <button className="btn btn-primary" onClick={() => navigate("book")}>Book Now</button>
    </div>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-tagline">Quality cuts.<br/>No drama.</p>
            <p style={{ color: "rgba(244,237,227,0.7)", fontSize: 14, margin: 0, maxWidth: 32 + "ch" }}>
              {window.SHOP.street}, {window.SHOP.suite}<br/>
              {window.SHOP.city}, {window.SHOP.state} {window.SHOP.zip}<br/>
              <a href={`tel:${window.SHOP.phoneRaw}`} style={{ color: "var(--brass)" }}>{window.SHOP.phone}</a>
            </p>
            <div className="social-row" style={{ marginTop: 20 }}>
              <a className="social-icon" aria-label="Instagram"><window.Icon name="ig" size={16} /></a>
              <a className="social-icon" aria-label="Facebook"><window.Icon name="fb" size={16} /></a>
              <a className="social-icon" aria-label="Google"><window.Icon name="google" size={16} /></a>
            </div>
          </div>

          <div>
            <h4>Visit</h4>
            <ul>
              <li><a role="button" tabIndex={0} onClick={() => navigate("services")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("services")}>Services & Pricing</a></li>
              <li><a role="button" tabIndex={0} onClick={() => navigate("locations")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("locations")}>Hours & Directions</a></li>
              <li><a role="button" tabIndex={0} onClick={() => navigate("about")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("about")}>Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              <li><a role="button" tabIndex={0} onClick={() => navigate("gift-cards")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("gift-cards")}>Gift Cards</a></li>
              <li><a role="button" tabIndex={0} onClick={() => navigate("book")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("book")}>Book Online</a></li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li><a role="button" tabIndex={0} onClick={() => navigate("faq")} onKeyDown={(e) => (e.key==="Enter"||e.key===" ")&&navigate("faq")}>FAQ</a></li>
              <li><a>Cancellation Policy</a></li>
              <li><a>Privacy</a></li>
              <li><a>Terms</a></li>
              <li><a>Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {window.SHOP.name}. All rights reserved.</span>
          <span>Built in {window.SHOP.city}, {window.SHOP.state}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, BookBar, Footer });

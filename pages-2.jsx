/* global React */
const { useState: useStateP2 } = React;

// ============================================================
// LOCATIONS / CONTACT PAGE
// ============================================================
function LocationsPage({ navigate }) {
  return (
    <div className="page-fade">
      <section className="page-hero" style={{ backgroundImage: "url('img/storefront-night.webp')" }}>
        <div className="container">
          <p className="eyebrow eyebrow-cream">— Visit</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>{window.SHOP.neighborhood},<br/>{window.SHOP.city}.</h1>
          <p className="lede">One shop. One barber pole out front. Easy parking, no appointment needed if there's a chair open.</p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          <div className="map-grid">
            <div className="map-canvas">
              <svg className="map-svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(244,237,227,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="600" height="400" fill="url(#grid2)"/>
                <path d="M 0 200 L 600 180" stroke="rgba(244,237,227,0.18)" strokeWidth="3" fill="none"/>
                <path d="M 320 0 L 310 400" stroke="rgba(244,237,227,0.18)" strokeWidth="3" fill="none"/>
                <text x="40" y="195" fill="rgba(244,237,227,0.4)" fontSize="10" fontFamily="monospace">NE 132ND ST</text>
                <text x="330" y="50" fill="rgba(244,237,227,0.4)" fontSize="10" fontFamily="monospace" transform="rotate(90 330 50)">100TH AVE NE</text>
                <circle cx="120" cy="100" r="20" fill="rgba(244,237,227,0.05)"/>
                <circle cx="450" cy="320" r="30" fill="rgba(244,237,227,0.05)"/>
              </svg>
              <div className="map-pin">
                <span className="map-pin-label">Tony's · 13520 100th Ave NE</span>
                <span className="map-pin-dot" />
              </div>
            </div>
            <div className="contact-info">
              <p className="eyebrow eyebrow-cream">— Address & hours</p>
              <h3 className="display h3" style={{ color: "var(--bg)", margin: "8px 0 8px" }}>Tony's Barber Shop</h3>

              <div className="contact-row">
                <span className="contact-row-icon"><window.Icon name="pin" size={16} /></span>
                <div>
                  <div className="contact-row-label">Address</div>
                  <div className="contact-row-value">{window.SHOP.street}, {window.SHOP.suite}<br/>{window.SHOP.city}, {window.SHOP.state} {window.SHOP.zip}</div>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-row-icon"><window.Icon name="phone" size={16} /></span>
                <div>
                  <div className="contact-row-label">Phone</div>
                  <a href={`tel:${window.SHOP.phoneRaw}`} className="contact-row-value" style={{ color: "var(--brass)" }}>{window.SHOP.phone}</a>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-row-icon"><window.Icon name="clock" size={16} /></span>
                <div style={{ flex: 1 }}>
                  <div className="contact-row-label">Hours</div>
                  <div className="hours-grid" style={{ marginTop: 8 }}>
                    {window.SHOP.hours.map((h) => (
                      <React.Fragment key={h.day}>
                        <span className="day">{h.day}</span>
                        <span className={h.closed ? "closed" : ""}>{h.time}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={`tel:${window.SHOP.phoneRaw}`}>Call</a>
                <a className="btn btn-ghost-light">Get Directions</a>
                <button className="btn btn-ghost-light" onClick={() => navigate("book")}>Book Online</button>
              </div>
            </div>
          </div>

          <div className="split" style={{ marginTop: 64 }}>
            <div>
              <p className="eyebrow">— Parking & getting here</p>
              <h2 className="display h3" style={{ marginTop: 8 }}>Easy in, easy out.</h2>
              <p className="lede" style={{ marginTop: 16 }}>Free lot parking right out front — usually a spot within ten feet of the door. Five minutes off I-405 (Exit 20A). The {window.SHOP.shortName} sign is on the strip mall facing 100th Ave NE; the barber pole is unmistakable at night.</p>
              <p className="lede" style={{ marginTop: 16 }}>King County Metro Route 234 stops two blocks south at Juanita Village.</p>
            </div>
            <div className="split-img" style={{ backgroundImage: "url('img/storefront-night.webp')", aspectRatio: "4 / 3" }} />
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// GIFT CARDS PAGE
// ============================================================
function GiftCardsPage({ navigate }) {
  const [amount, setAmount] = useStateP2(65);
  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow-cream">— Gift Cards</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>Best gift<br/>for the guy<br/>who has everything<br/>except a good barber.</h1>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          <div className="gc-grid">
            <div className="gc-card brass">
              <span className="gc-card-label">Tony's Gift Card</span>
              <div>
                <div className="gc-card-amount">${amount}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", marginTop: 8 }}>Redeemable for any service</div>
              </div>
            </div>
            <div className="gc-card">
              <span className="gc-card-label" style={{ color: "var(--brass)" }}>Choose an amount</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[35, 45, 65, 100, 150, 200].map((a) => (
                  <button key={a} className={`btn btn-sm ${amount === a ? "btn-primary" : "btn-ghost-light"}`} onClick={() => setAmount(a)}>${a}</button>
                ))}
              </div>
              <div>
                <p style={{ color: "rgba(244,237,227,0.75)", fontSize: 14, marginBottom: 16 }}>Send digitally by email, or stop by the shop for a printed card.</p>
                <button className="btn btn-primary btn-lg" style={{ width: "100%" }}>Buy Gift Card · ${amount}</button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 64, maxWidth: 70 + "ch" }}>
            <p className="eyebrow">— Fine print</p>
            <h2 className="display h3" style={{ marginTop: 8, marginBottom: 16 }}>How they work.</h2>
            <ul style={{ paddingLeft: 20, color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.8 }}>
              <li>Gift cards never expire and can be used for any service or product.</li>
              <li>Redeemable in shop or applied at checkout when booking online.</li>
              <li>Lost the digital card? Email us — every code is on file.</li>
              <li>Not transferable for cash, but they are transferable to other people. Pass it on.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { LocationsPage, GiftCardsPage });

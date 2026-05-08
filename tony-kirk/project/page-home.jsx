/* global React, SHOP, REVIEWS, SERVICES_PREVIEW, VALUE_PROPS, Icon, Stars */

// ============================================================
// HOME PAGE
// ============================================================
function HomePage({ navigate }) {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="hero">
        <div className="hero-img" style={{ backgroundImage: "url('img/shave-portrait.webp')" }} />
        <div className="hero-content container">
          <div className="hero-meta-row">
            <span><span className="live-dot"></span>Open now · until 7pm</span>
            <span className="dot">●</span>
            <span>{SHOP.city}, {SHOP.state} · {SHOP.neighborhood}</span>
            <span className="dot">●</span>
            <span>★ {SHOP.rating} ({SHOP.reviewCount} Google reviews)</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1 className="hero-tagline">Where men get<br/><span className="accent">ready.</span></h1>
              <p className="hero-sub">Mid-range master barbering in {SHOP.neighborhood}, {SHOP.city}. Sharp cuts, hot-towel shaves, and a chair you'll want to keep coming back to. Walk in or book ahead — everyone welcome.</p>
              <div className="hero-cta-row">
                <button className="btn btn-primary btn-lg" onClick={() => navigate("book")}>Book Now <Icon name="arrow" size={14} /></button>
                <button className="btn btn-ghost-light btn-lg" onClick={() => navigate("locations")}>Find the Shop</button>
              </div>
            </div>
            <div className="hero-side-card">
              <p className="book-card-title">Make an Appointment</p>
              <p style={{ color: "rgba(244,237,227,0.7)", fontSize: 13, margin: "0 0 8px" }}>Or call <a href={`tel:${SHOP.phoneRaw}`} style={{ color: "var(--brass)" }}>{SHOP.phone}</a>.</p>
              <div className="book-card">
                <div>
                  <label>Service</label>
                  <select className="field" defaultValue="signature">
                    <option value="signature">The Signature Cut — $65</option>
                    <option value="classic">Classic Cut — $45</option>
                    <option value="skinfade">Skin Fade — $55</option>
                    <option value="shave">Hot-Lather Straight Razor — $55</option>
                    <option value="beard">Beard Trim & Line-Up — $28</option>
                  </select>
                </div>
                <div>
                  <label>Barber</label>
                  <select className="field" defaultValue="any">
                    <option value="any">Any available</option>
                    <option value="tony">Tony</option>
                    <option value="marcus">Marcus</option>
                    <option value="diego">Diego</option>
                    <option value="james">James (Apprentice)</option>
                  </select>
                </div>
                <div className="row-2">
                  <div>
                    <label>Date</label>
                    <input className="field" type="date" defaultValue="2026-05-02" />
                  </div>
                  <div>
                    <label>Time</label>
                    <select className="field" defaultValue="1030">
                      <option value="0900">9:00 AM</option>
                      <option value="1030">10:30 AM</option>
                      <option value="1200">12:00 PM</option>
                      <option value="1430">2:30 PM</option>
                      <option value="1600">4:00 PM</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg" style={{ marginTop: 4 }} onClick={() => navigate("book")}>
                  Confirm Appointment <Icon name="arrow" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            <span>Walk-Ins Welcome</span><span className="star">★</span>
            <span>Hot-Towel Shaves</span><span className="star">★</span>
            <span>Master Barbers</span><span className="star">★</span>
            <span>Open 6 Days</span><span className="star">★</span>
            <span>Cold Beer On The House</span><span className="star">★</span>
            <span>Family Friendly</span><span className="star">★</span>
          </span>
          <span aria-hidden="true">
            <span>Walk-Ins Welcome</span><span className="star">★</span>
            <span>Hot-Towel Shaves</span><span className="star">★</span>
            <span>Master Barbers</span><span className="star">★</span>
            <span>Open 6 Days</span><span className="star">★</span>
            <span>Cold Beer On The House</span><span className="star">★</span>
            <span>Family Friendly</span><span className="star">★</span>
          </span>
        </div>
      </div>

      {/* VALUE PROPS */}
      <section className="value-strip">
        <div className="value-grid">
          {VALUE_PROPS.map((v) => (
            <div className="value-item" key={v.title}>
              <span className="value-icon"><Icon name={v.icon} size={18} /></span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">— What we do</p>
              <h2 className="display h2">Sharp cuts.<br/>Honest prices.</h2>
            </div>
            <p className="lede">Six core services that cover ninety-nine percent of what walks through the door. Need something specific? See the full menu, or just ask in the chair.</p>
          </div>

          <div className="service-grid">
            {SERVICES_PREVIEW.map((s) => (
              <article className="service-card" key={s.id}>
                <div className="service-card-img" style={{ backgroundImage: `url('${s.img}')` }} />
                <div className="service-card-body">
                  {s.flagship && <span className="flagship-tag">★ Signature</span>}
                  <div className="service-card-head">
                    <h3>{s.name}</h3>
                    <span className="service-card-price"><span className="from">From</span>${s.price}</span>
                  </div>
                  <span className="service-card-meta">{s.duration}</span>
                  <p className="service-card-desc">{s.desc}</p>
                  <div className="service-card-foot">
                    <a className="book-link" onClick={() => navigate("book")}>Book {s.name.split(" ")[0]} →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <button className="btn btn-ghost-dark btn-lg" onClick={() => navigate("services")}>See Full Menu <Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section-pad section-dark">
        <div className="container">
          <div className="split">
            <div className="split-img" style={{ backgroundImage: "url('img/tony-at-work.webp')" }} />
            <div>
              <p className="eyebrow eyebrow-cream">— The shop</p>
              <h2 className="display h2" style={{ marginTop: 8, color: "var(--bg)" }}>Three decades<br/>in the chair.</h2>
              <p className="lede" style={{ marginTop: 24 }}>Tony opened the shop in 2023 after years cutting hair around the Eastside. The chairs are the same Belmonts he learned on. The mirrors are clean. The music is good. And the cut is yours — exactly the way you want it, every time.</p>
              <p className="lede" style={{ marginTop: 16 }}>No upsells. No drama. No corporate playbook. Just sharp tools and a steady hand.</p>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn-primary" onClick={() => navigate("about")}>Read Our Story <Icon name="arrow" size={14} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BAND */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="member-band">
            <div>
              <p className="eyebrow" style={{ color: "var(--ink-soft)" }}>— Membership</p>
              <h2 className="display h2" style={{ marginTop: 8 }}>Cut once a month?<br/>Save the math.</h2>
              <p className="lede" style={{ color: "var(--ink-2)", marginTop: 16 }}>Members get priority booking, $10 off every cut, free beard trims, and a free birthday shave. Starts at $42/month.</p>
            </div>
            <div className="member-band-actions">
              <button className="btn btn-dark btn-lg" onClick={() => navigate("memberships")}>See Plans</button>
              <button className="btn btn-ghost-dark btn-lg" onClick={() => navigate("gift-cards")}>Gift It</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div>
              <p className="eyebrow">— @TonysBarberShop</p>
              <h2 className="display h2" style={{ marginTop: 8 }}>Fresh from<br/>the chair.</h2>
            </div>
            <p className="lede">Real cuts. Real clients. Tag us — we re-post the good ones.</p>
          </div>
          <div className="gallery-grid">
            {[
              "img/cut-fade-1.webp", "img/cut-fade-2.webp", "img/cut-textured.webp",
              "img/shave-portrait.webp", "img/interior-chairs.webp", "img/tony-at-work.webp",
              "img/storefront-night.webp", "img/cut-fade-1.webp", "img/cut-fade-2.webp",
              "img/cut-textured.webp", "img/shave-portrait.webp", "img/interior-chairs.webp",
            ].map((src, i) => (
              <div className="gallery-tile" key={i} style={{ backgroundImage: `url('${src}')` }}>
                <span className="ig"><Icon name="ig" size={14} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <div className="reviews-head">
            <div>
              <p className="eyebrow">— Google reviews</p>
              <div className="rating-big" style={{ marginTop: 12 }}>
                <span className="num">{SHOP.rating}</span>
                <div>
                  <Stars n={5} />
                  <div className="meta" style={{ marginTop: 4 }}>{SHOP.reviewCount} verified reviews</div>
                </div>
              </div>
            </div>
            <a className="btn btn-ghost-dark"><Icon name="google" size={14} /> Read all on Google</a>
          </div>
          <div className="review-grid">
            {REVIEWS.slice(0, 6).map((r, i) => (
              <article className="review-card" key={i}>
                <Stars n={r.stars} />
                <p className="review-quote">"{r.quote}"</p>
                <div className="review-foot">
                  <span className="review-avatar">{r.name.charAt(0)}</span>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-meta">{r.meta}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAP / CONTACT */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="map-grid">
            <div className="map-canvas">
              <svg className="map-svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(244,237,227,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="600" height="400" fill="url(#grid)"/>
                <path d="M 0 200 L 600 180" stroke="rgba(244,237,227,0.18)" strokeWidth="3" fill="none"/>
                <path d="M 320 0 L 310 400" stroke="rgba(244,237,227,0.18)" strokeWidth="3" fill="none"/>
                <path d="M 0 280 L 600 260" stroke="rgba(244,237,227,0.10)" strokeWidth="2" fill="none"/>
                <path d="M 100 0 L 90 400" stroke="rgba(244,237,227,0.10)" strokeWidth="2" fill="none"/>
                <path d="M 480 0 L 470 400" stroke="rgba(244,237,227,0.10)" strokeWidth="2" fill="none"/>
                <text x="40" y="195" fill="rgba(244,237,227,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="1">NE 132ND ST</text>
                <text x="330" y="50" fill="rgba(244,237,227,0.4)" fontSize="10" fontFamily="monospace" letterSpacing="1" transform="rotate(90 330 50)">100TH AVE NE</text>
                <circle cx="120" cy="100" r="20" fill="rgba(244,237,227,0.05)"/>
                <circle cx="450" cy="320" r="30" fill="rgba(244,237,227,0.05)"/>
              </svg>
              <div className="map-pin">
                <span className="map-pin-label">Tony's · 13520 100th Ave NE</span>
                <span className="map-pin-dot" />
              </div>
            </div>
            <div className="contact-info">
              <p className="eyebrow eyebrow-cream">— Visit us</p>
              <h3 className="display h3" style={{ color: "var(--bg)", margin: "8px 0 8px" }}>{SHOP.city}, {SHOP.neighborhood}</h3>

              <div className="contact-row">
                <span className="contact-row-icon"><Icon name="pin" size={16} /></span>
                <div>
                  <div className="contact-row-label">Address</div>
                  <div className="contact-row-value">{SHOP.street}, {SHOP.suite}<br/>{SHOP.city}, {SHOP.state} {SHOP.zip}</div>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-row-icon"><Icon name="phone" size={16} /></span>
                <div>
                  <div className="contact-row-label">Phone</div>
                  <a href={`tel:${SHOP.phoneRaw}`} className="contact-row-value" style={{ color: "var(--brass)" }}>{SHOP.phone}</a>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-row-icon"><Icon name="clock" size={16} /></span>
                <div style={{ flex: 1 }}>
                  <div className="contact-row-label">Hours</div>
                  <div className="hours-grid" style={{ marginTop: 8 }}>
                    {SHOP.hours.map((h) => (
                      <React.Fragment key={h.day}>
                        <span className="day">{h.day}</span>
                        <span className={h.closed ? "closed" : ""}>{h.time}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <a className="btn btn-primary" href={`tel:${SHOP.phoneRaw}`}>Call</a>
                <a className="btn btn-ghost-light">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="newsletter">
            <div>
              <span className="badge">— $20 off your first visit</span>
              <h2 className="display h2" style={{ color: "var(--bg)" }}>Save twenty bucks.<br/>Look like a million.</h2>
              <p className="lede" style={{ marginTop: 16 }}>Drop your email and we'll send a one-time code worth $20 off any service. No spam. We text once a month, max.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Demo — no email sent."); }}>
              <input type="email" placeholder="your@email.com" required />
              <button className="btn btn-primary" type="submit">Send Code</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });

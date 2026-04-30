/* global React, SHOP, SERVICES_FULL, TEAM, Icon */
const { useState: useStateP } = React;

// ============================================================
// SERVICES PAGE
// ============================================================
function ServicesPage({ navigate }) {
  return (
    <div className="page-fade">
      <section className="page-hero" style={{ backgroundImage: "url('img/cut-fade-1.jpg')" }}>
        <div className="container">
          <p className="eyebrow eyebrow-cream">— Services & Pricing</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>The full menu.</h1>
          <p className="lede" style={{ maxWidth: 60 + "ch" }}>Every service includes a real consultation, hot towel, and the time it takes to get it right. No upsells. No surprise add-ons at the register.</p>
          <div className="page-hero-meta">
            <span>Cards on file required</span><span className="dot">●</span>
            <span>Walk-ins welcome</span><span className="dot">●</span>
            <span>Tip in cash or card</span>
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          {/* Flagship */}
          <div className="flagship-card">
            <div>
              <span className="flagship-tag">★ Flagship Service</span>
              <h2 className="display h2" style={{ color: "var(--bg)", margin: "16px 0 16px" }}>The Signature Cut</h2>
              <p className="lede">The whole experience, start to finish. Sixty minutes that you'll feel for the next three weeks. Most regulars start here, then come back monthly.</p>
              <ul className="flagship-includes" style={{ marginTop: 24, padding: 0 }}>
                <li>Consultation & style discussion</li>
                <li>Wash with premium product</li>
                <li>Scissor + clipper cut</li>
                <li>Hot-towel finish on the neck</li>
                <li>Straight razor neck shave</li>
                <li>Five-minute scalp massage</li>
                <li>Style with your choice of product</li>
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
              <div className="flagship-price-block">$65<small>60 minutes · book any barber</small></div>
              <button className="btn btn-primary btn-lg" onClick={() => navigate("book")}>Book the Signature <Icon name="arrow" size={14} /></button>
            </div>
          </div>

          {/* Categories */}
          {SERVICES_FULL.map((cat) => (
            <div className="svc-category" key={cat.cat}>
              <div className="svc-cat-head">
                <p className="eyebrow">— {String(cat.cat.split(" ")[0]).toLowerCase()}</p>
                <h2 className="display h2">{cat.cat}</h2>
                <p>{cat.blurb}</p>
              </div>
              <div className="svc-list">
                {cat.items.map((s) => (
                  <div className="svc-row" key={s.name}>
                    <div className="svc-row-info">
                      <h3>{s.name} {s.flagship && <span className="flagship-tag" style={{ marginLeft: 8, verticalAlign: "middle" }}>★ Signature</span>}</h3>
                      <p>{s.desc}</p>
                    </div>
                    <span className="svc-row-meta">{s.duration}</span>
                    <span className="svc-row-price"><span className="from">From</span>${s.price}</span>
                    <button className="btn btn-ghost-dark btn-sm svc-row-cta" onClick={() => navigate("book")}>Book</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================
// ABOUT PAGE
// ============================================================
function AboutPage({ navigate }) {
  return (
    <div className="page-fade">
      <section className="page-hero" style={{ backgroundImage: "url('img/tony-at-work.jpg')" }}>
        <div className="container">
          <p className="eyebrow eyebrow-cream">— Our story</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>One chair.<br/>Thirty years.<br/>One block from where you live.</h1>
          <p className="lede">Tony's is a {SHOP.neighborhood}-{SHOP.city} barbershop run by a barber, not a brand. We opened in 2023 to do one thing well: cut hair the way it's supposed to be cut.</p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-hero-img" style={{ backgroundImage: "url('img/interior-chairs.jpg')" }} />
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">— The founder</p>
              <h2 className="display h2" style={{ marginTop: 8 }}>Tony spent thirty years cutting hair before he ever owned a chair.</h2>
            </div>
            <div>
              <p className="lede">He learned the trade in the late nineties, working through a half-dozen shops across the Eastside. Apprentice work first — sweeping floors, washing capes, watching every cut from the corner. Then his own chair. Then a clientele that followed him through three different shops because nobody else cut their hair the way he did.</p>
              <p className="lede" style={{ marginTop: 16 }}>In 2023, with his daughter heading off to UW and a wall full of regulars asking when he'd finally hang his own sign, Tony took the lease on a 900-square-foot space in the Juanita strip mall. He painted it himself. Hauled in three Belmont chairs from a closing shop in Bellevue. Hung the barber pole on a Saturday morning and opened on the Monday.</p>
              <p className="lede" style={{ marginTop: 16 }}>Two years in, the shop is full from open to close most days, the regulars brought their kids, and the kids brought their friends. The work is the same as it's always been. The sign on the door is new.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">— What we believe</p>
              <h2 className="display h2" style={{ marginTop: 8 }}>Three rules.<br/>That's the whole playbook.</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">No. 01</div>
              <h3>Take the time</h3>
              <p>Sixty minutes for a Signature Cut. Not because it needs to be slow — because it needs to be right. Rushed haircuts look rushed.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">No. 02</div>
              <h3>Everyone welcome</h3>
              <p>Men, women, kids, first-timers, the guy from the bargain chain who just wants better. All-y'all. Bring whoever. We'll cut their hair too.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">No. 03</div>
              <h3>Honest pricing</h3>
              <p>What's on the menu is what you pay. No "premium product fee," no surprise upcharges. Tip what feels right.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 16 }}>— Press & recognition</p>
          <div className="press-strip">
            <div className="press-item">425 Magazine</div>
            <div className="press-item">Seattle Met</div>
            <div className="press-item">Eastside Best ★ '25</div>
            <div className="press-item">Yelp Top 10 WA</div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h2">Come see for yourself.</h2>
          <p className="lede" style={{ margin: "16px auto 32px" }}>Walk in any day except Tuesday. We'll have a beer waiting.</p>
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate("book")}>Book a Cut</button>
            <button className="btn btn-ghost-dark btn-lg" onClick={() => navigate("locations")}>See Hours & Map</button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage, AboutPage });

/* global React */
const { useState: useStateP3 } = React;

// ============================================================
// FAQ PAGE
// ============================================================
const FAQS = [
  { q: "Walk-in or appointment?", a: "Both. Walk-ins are welcome anytime we're open — though Saturdays and after 4pm on weekdays often have a wait. Booking online or by phone guarantees the time slot and the barber." },
  { q: "What's the cancellation policy?", a: "We require a card on file to book. Cancel or reschedule with at least 24 hours notice and there's no charge. Inside 24 hours: 50% of the service. No-shows: 100%. We get it — life happens. Reach out and we'll work with you." },
  { q: "What payment methods do you accept?", a: "All major cards, Apple Pay, Google Pay, and cash. Tips can go on the card or in cash — whichever you prefer." },
  { q: "What should I expect on a first visit?", a: "Show up five minutes early. Your barber will sit with you for a minute to talk through what you want — references on your phone are encouraged. Then a wash, the cut, hot-towel finish, and you're out the door. Most first visits run 45–60 minutes. Mention 'first visit' for $20 off." },
  { q: "Are kids welcome?", a: "Absolutely. We cut for under-12s at $32 and have a booster seat. Bring distractions if they're little — a tablet, a snack, whatever works. Patient barbers, no judgment." },
  { q: "How much should I tip?", a: "Standard service-industry rates: 15–20% is great. Tips can go on the card or cash. Whatever feels right is fine — we're not counting." },
  { q: "Do gift cards expire?", a: "Never. Buy one today, use it in five years. Lost the code? Email us with the recipient's name and we'll find it." },
  { q: "Can I bring my own product?", a: "Yes. Tell your barber what you usually use and they'll style with it. We also stock products we actually use ourselves — ask if you're curious." },
  { q: "Are you accessible?", a: "The shop is single-floor with a flat entrance and a wide doorway. The chair lowers all the way down. Service animals welcome. Email us if you have specific accessibility questions before your visit." },
];

function FAQPage({ navigate }) {
  const [openIdx, setOpenIdx] = useStateP3(0);
  return (
    <div className="page-fade">
      <section className="page-hero" style={{ backgroundImage: "url('img/interior-chairs.webp')" }}>
        <div className="container">
          <p className="eyebrow eyebrow-cream">— FAQ</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>Questions,<br/>answered.</h1>
          <p className="lede">If your question isn't here, call us at <a href={`tel:${window.SHOP.phoneRaw}`} style={{ color: "var(--brass)" }}>{window.SHOP.phone}</a> — Tony or whoever's at the front desk will pick up.</p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${openIdx === i ? "open" : ""}`}>
                <div className="faq-q" role="button" tabIndex={0} onClick={() => setOpenIdx(openIdx === i ? -1 : i)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenIdx(openIdx === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="icon">+</span>
                </div>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--bg-cream)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h2">Still got questions?</h2>
          <p className="lede" style={{ margin: "16px auto 24px" }}>Easiest way to find out is to come in.</p>
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate("book")}>Book a Cut</button>
            <a className="btn btn-ghost-dark btn-lg" href={`tel:${window.SHOP.phoneRaw}`}><window.Icon name="phone" size={14} /> Call the Shop</a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// BOOKING PAGE (simple flow)
// ============================================================
function getUpcomingDates(count) {
  const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dates = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (dates.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 2) { // skip Tuesday (closed)
      dates.push(`${DAY_NAMES[d.getDay()]}, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`);
    }
  }
  return dates;
}

function BookPage({ navigate }) {
  const [step, setStep] = useStateP3(1);
  const upcomingDates = getUpcomingDates(5);
  const [picked, setPicked] = useStateP3({ service: "Signature Cut", barber: "Any available", date: upcomingDates[0], time: "10:30 AM" });

  const services = [
    { name: "The Signature Cut", price: 65, dur: "60 min" },
    { name: "Classic Cut", price: 45, dur: "45 min" },
    { name: "Skin Fade", price: 55, dur: "50 min" },
    { name: "Hot-Lather Shave", price: 55, dur: "45 min" },
    { name: "Beard Trim & Line-Up", price: 28, dur: "25 min" },
  ];
  const barbers = ["Any available", "Tony", "Marcus", "Diego", "James (Apprentice)"];
  const slots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

  return (
    <div className="page-fade">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow-cream">— Book a Cut</p>
          <h1 className="display h1" style={{ color: "var(--bg)", marginTop: 12 }}>Pick your time.<br/>We'll see you soon.</h1>
          <p className="lede">Three steps. Takes about 20 seconds.</p>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Stepper */}
          <div style={{ display: "flex", gap: 8, marginBottom: 32, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {["Service", "Schedule", "Confirm"].map((label, i) => {
              const n = i + 1;
              const active = step >= n;
              return (
                <div key={label} style={{ flex: 1, padding: "12px 10px", background: active ? "var(--ink)" : "var(--bg-cream)", color: active ? "var(--bg)" : "var(--muted)", borderRadius: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {String(n).padStart(2, "0")} · {label}
                </div>
              );
            })}
          </div>

          {step === 1 && (
            <div>
              <h2 className="display h3" style={{ marginBottom: 24 }}>What're we doing today?</h2>
              <div style={{ display: "grid", gap: 8 }}>
                {services.map((s) => (
                  <button key={s.name} onClick={() => { setPicked({ ...picked, service: s.name }); setStep(2); }}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: 10, textAlign: "left", cursor: "pointer" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.01em", textTransform: "uppercase" }}>{s.name}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 4 }}>{s.dur}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span className="price" style={{ fontSize: 18 }}>${s.price}</span>
                      <window.Icon name="arrow" size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="display h3" style={{ marginBottom: 24 }}>Who and when?</h2>
              <p className="eyebrow" style={{ marginBottom: 12 }}>— Barber</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {barbers.map((b) => (
                  <button key={b} className={`btn btn-sm ${picked.barber === b ? "btn-dark" : "btn-ghost-dark"}`} onClick={() => setPicked({ ...picked, barber: b })}>{b}</button>
                ))}
              </div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>— Date</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {upcomingDates.map((d) => (
                  <button key={d} className={`btn btn-sm ${picked.date === d ? "btn-dark" : "btn-ghost-dark"}`} onClick={() => setPicked({ ...picked, date: d })}>{d}</button>
                ))}
              </div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>— Time</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {slots.map((t) => (
                  <button key={t} className={`btn btn-sm ${picked.time === t ? "btn-dark" : "btn-ghost-dark"}`} onClick={() => setPicked({ ...picked, time: t })}>{t}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-ghost-dark" onClick={() => setStep(1)}>Back</button>
                <button className="btn btn-primary btn-lg" onClick={() => setStep(3)}>Continue <window.Icon name="arrow" size={14} /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="display h3" style={{ marginBottom: 24 }}>Confirm your appointment.</h2>
              <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 10, padding: 32, marginBottom: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "16px 32px", fontFamily: "var(--font-mono)", fontSize: 14 }}>
                  <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.12em" }}>Service</span><span>{picked.service}</span>
                  <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.12em" }}>Barber</span><span>{picked.barber}</span>
                  <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.12em" }}>Date</span><span>{picked.date}</span>
                  <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.12em" }}>Time</span><span>{picked.time}</span>
                  <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.12em" }}>Where</span><span>{window.SHOP.street}, {window.SHOP.suite}</span>
                </div>
              </div>
              <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Your name</span>
                  <input className="field" style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 4, fontSize: 15 }} placeholder="e.g. Marcus Rivera" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Phone</span>
                  <input className="field" type="tel" style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 4, fontSize: 15 }} placeholder="(425) 000-0000 — for confirmation text" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Email</span>
                  <input className="field" type="email" style={{ padding: 14, border: "1px solid var(--line)", borderRadius: 4, fontSize: 15 }} placeholder="you@email.com" />
                </label>
              </div>
              <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 24 }}>Card on file required. We charge 50% for cancellations inside 24 hours and 100% for no-shows. <a onClick={() => navigate("faq")} style={{ borderBottom: "1px solid var(--brass)", cursor: "pointer" }}>Full policy</a>.</p>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-ghost-dark" onClick={() => setStep(2)}>Back</button>
                <button className="btn btn-primary btn-lg" onClick={() => alert("Demo — booking confirmed.")}>Confirm Appointment <window.Icon name="arrow" size={14} /></button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { FAQPage, BookPage });

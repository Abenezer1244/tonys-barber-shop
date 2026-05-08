/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// SHARED DATA
// ============================================================
const SHOP = {
  name: "Tony's Barber Shop",
  shortName: "Tony's",
  city: "Kirkland",
  neighborhood: "Juanita",
  state: "WA",
  zip: "98034",
  street: "13520 100th Ave NE",
  suite: "Suite 55",
  phone: "(425) 821-3767",
  phoneRaw: "+14258213767",
  rating: 4.9,
  reviewCount: 48,
  hours: [
    { day: "Monday",    time: "8:00 AM – 7:00 PM" },
    { day: "Tuesday",   time: "Closed", closed: true },
    { day: "Wednesday", time: "8:00 AM – 7:00 PM" },
    { day: "Thursday",  time: "8:00 AM – 7:00 PM" },
    { day: "Friday",    time: "8:00 AM – 7:00 PM" },
    { day: "Saturday",  time: "8:00 AM – 7:00 PM" },
    { day: "Sunday",    time: "9:00 AM – 6:00 PM" },
  ],
};

// Real reviews from the customer-provided data, lightly trimmed.
const REVIEWS = [
  { name: "Mack Clausen", meta: "Local Guide · 6 mo ago", stars: 5,
    quote: "Take it from the cowlick king — this is where you go to get your haircut. Decades of experience and an eye to help you create whatever style you want, and he remembers it every time." },
  { name: "Adam A.", meta: "1 yr ago", stars: 5,
    quote: "I've been going to Tony for a while now. He takes his time, pays attention to every detail, and always gives me a perfect cut. Great atmosphere — he makes sure every visit feels right." },
  { name: "Dave Lipman", meta: "Local Guide · 11 mo ago", stars: 5,
    quote: "Five well-deserved stars. Went in for the first time and was very impressed. Professional, friendly, and runs a nice little shop with easy parking." },
  { name: "Michael Curnutt", meta: "Local Guide · 7 mo ago", stars: 5,
    quote: "I have never had a better haircut in my life. Takes their time, precise, thorough. Very reasonably priced. 10/10, will return." },
  { name: "Syed H.", meta: "Local Guide · 1 yr ago", stars: 5,
    quote: "Great barbershop in Kirkland Juanita. Tony is detail oriented — even fixed errors from a prior cut I thought looked fine. Definitely coming back." },
  { name: "Darren Kress", meta: "Local Guide · 1 yr ago", stars: 5,
    quote: "Best haircut of my life. Tony is highly detailed and provides the quality extras — straight razor on neck and sideburns, light shoulder massage — not found elsewhere." },
];

const SERVICES_PREVIEW = [
  { id: "signature", name: "The Signature Cut", price: "65", duration: "60 min", desc: "Consultation, shampoo, scissor + clipper, hot-towel finish, neck shave, scalp massage, style.", img: "img/shave-portrait.webp", flagship: true },
  { id: "classic", name: "Classic Cut", price: "45", duration: "45 min", desc: "Sharp, straightforward haircut tailored to you. Includes wash and finish.", img: "img/cut-fade-2.webp" },
  { id: "skinfade", name: "Skin Fade", price: "55", duration: "50 min", desc: "Tight skin fade, blended clean from skin to length. Razor detail at the edges.", img: "img/cut-fade-1.webp" },
  { id: "shave", name: "Hot-Lather Straight Razor", price: "55", duration: "45 min", desc: "Old-school straight razor shave. Hot towels, lather, the works. Sit back.", img: "img/tony-at-work.webp" },
  { id: "beard", name: "Beard Trim & Line-Up", price: "28", duration: "25 min", desc: "Shape, line, and trim. Hot towel and beard oil to finish.", img: "img/cut-textured.webp" },
  { id: "kids", name: "Kids Cut (Under 12)", price: "32", duration: "30 min", desc: "Patience and a steady hand for the next generation. First-timers welcome.", img: "img/interior-chairs.webp" },
];

const SERVICES_FULL = [
  {
    cat: "Cuts",
    blurb: "The bread and butter. Every cut includes a consult, a wash if you want one, and a clean finish.",
    items: [
      { name: "The Signature Cut", price: "65", duration: "60 min", desc: "The full experience. Consultation, shampoo, scissor + clipper, hot-towel finish, neck shave, scalp massage, style.", flagship: true },
      { name: "Classic Cut", price: "45", duration: "45 min", desc: "Sharp, straightforward haircut tailored to you. Includes wash and finish." },
      { name: "Skin Fade", price: "55", duration: "50 min", desc: "Tight skin fade blended clean from skin to length. Razor detail on the edges." },
      { name: "Buzz Cut", price: "30", duration: "20 min", desc: "Single-guard all-over. In and out, no fuss." },
      { name: "Long Hair Style", price: "58", duration: "55 min", desc: "Layered cut and style for hair past the collar. Texture and movement." },
    ]
  },
  {
    cat: "Beards & Shaves",
    blurb: "Hot lather, sharp steel, no rush. The face deserves the same care as the head.",
    items: [
      { name: "Hot-Lather Straight Razor Shave", price: "55", duration: "45 min", desc: "The full traditional shave. Hot towels, pre-shave oil, lather, two passes, balm to finish." },
      { name: "Beard Trim & Line-Up", price: "28", duration: "25 min", desc: "Shape, line, and trim. Hot towel and beard oil to finish." },
      { name: "Beard Sculpt (Long Beard)", price: "40", duration: "35 min", desc: "Full beard shape and style for beards over 1 inch. Detailed scissor work." },
      { name: "Neck Shave & Clean-Up", price: "20", duration: "15 min", desc: "Straight razor on the neck and around the ears. Quick refresh between cuts." },
    ]
  },
  {
    cat: "Color & Grey Blending",
    blurb: "Subtle, natural, never obvious. Cover the grey or take some off — your call.",
    items: [
      { name: "Grey Blending", price: "40", duration: "30 min", desc: "Soft grey reduction. Looks like you, just a few years back. Lasts 4–6 weeks." },
      { name: "Beard Color", price: "35", duration: "25 min", desc: "Color match for the beard. Add to any cut or shave." },
      { name: "Full Color (Single Process)", price: "75", duration: "60 min", desc: "Full single-process color. Consultation included." },
    ]
  },
  {
    cat: "Scalp & Skin",
    blurb: "Add-on treatments to send you out feeling brand new.",
    items: [
      { name: "Hot Towel Facial", price: "30", duration: "20 min", desc: "Three hot towels, exfoliating scrub, balm. Great paired with a shave." },
      { name: "Scalp Treatment", price: "25", duration: "15 min", desc: "Tea tree wash, scalp massage, conditioning rinse. Add to any cut." },
      { name: "Wax (Ear / Nose / Brow)", price: "15", duration: "10 min", desc: "Per area. Quick and painless." },
    ]
  },
  {
    cat: "Add-Ons",
    blurb: "Build out your service. Most of these stack onto a cut.",
    items: [
      { name: "Shampoo & Style", price: "12", duration: "10 min", desc: "Wash and blow-dry style. Adds a few minutes to any cut." },
      { name: "Scalp Massage Upgrade", price: "10", duration: "5 min", desc: "Extra five minutes of pressure-point scalp massage." },
      { name: "Beard Oil & Balm Application", price: "8", duration: "5 min", desc: "Premium product, applied properly. Take some home if you like it." },
    ]
  },
  {
    cat: "Kids, Senior & First-Timers",
    blurb: "Everyone welcome. Bring the whole family.",
    items: [
      { name: "Kids Cut (Under 12)", price: "32", duration: "30 min", desc: "Patience and a steady hand for the next generation. Booster seat available." },
      { name: "Senior Cut (65+)", price: "38", duration: "40 min", desc: "Take your time. Same care, gentle pace, neck shave included." },
      { name: "Father & Son Combo", price: "70", duration: "75 min", desc: "Back-to-back cuts in the same chair. Memory-making material." },
      { name: "First Visit (New Clients)", price: "25", duration: "30 min", desc: "Walk-in special — $20 off any cut on your first visit. Mention online." },
    ]
  },
];

const VALUE_PROPS = [
  { title: "Master Barbers", desc: "Decades of work in the chair. Real craft, not a chain.", icon: "scissors" },
  { title: "On the House", desc: "Cold beer, espresso, or a good bourbon. Pick your poison.", icon: "drink" },
  { title: "Book in Seconds", desc: "Online booking 24/7. Walk-ins always welcome too.", icon: "calendar" },
  { title: "Open 6 Days", desc: "Closed Tuesdays. Otherwise we're here, ready when you are.", icon: "clock" },
];

const TEAM = [
  { name: "Tony", role: "Master Barber & Owner", years: "30+ years", img: "img/tony-at-work.webp",
    bio: "Tony's been in the chair for thirty years. He'll remember your cut, your kids' names, and the last bourbon you tried. The straight razor is his specialty.",
    specialties: ["Straight Razor", "Classic Cuts", "Grey Blending"] },
  { name: "Marcus", role: "Senior Barber", years: "12 years", img: "img/cut-fade-1.webp",
    bio: "Came up cutting in Seattle, joined Tony in 2023. Marcus does the cleanest skin fades in Juanita. Patient with first-timers and kids.",
    specialties: ["Skin Fades", "Textured Cuts", "Kids Cuts"] },
  { name: "Diego", role: "Barber", years: "6 years", img: "img/cut-fade-2.webp",
    bio: "Diego learned the trade in Brooklyn before moving west. He's the guy you want for long hair, layered cuts, and beard sculpting.",
    specialties: ["Long Hair", "Beard Sculpts", "Modern Styles"] },
  { name: "James", role: "Apprentice Barber", years: "2 years", img: "img/cut-textured.webp",
    bio: "James is finishing his apprenticeship under Tony. Books at a discount while he learns — every cut still gets the boss's approval before you leave the chair.",
    specialties: ["Buzz Cuts", "Beard Trims", "Apprentice Rate"] },
];

// ============================================================
// ICONS
// ============================================================
const Icon = ({ name, size = 18 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "scissors": return <svg {...props}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>;
    case "drink": return <svg {...props}><path d="M5 4h14l-2 9H7L5 4z"/><path d="M12 13v7"/><path d="M8 20h8"/></svg>;
    case "calendar": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></svg>;
    case "clock": return <svg {...props}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>;
    case "phone": return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "pin": return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "menu": return <svg {...props}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
    case "x": return <svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case "ig": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>;
    case "fb": return <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    case "google": return <svg {...props}><path d="M22 12h-10v3.8h5.7c-.5 2.5-2.7 4.2-5.7 4.2A6 6 0 0 1 12 6c1.5 0 2.9.5 3.9 1.4l2.7-2.7A10 10 0 1 0 22 12z"/></svg>;
    case "arrow": return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case "star": return <svg {...props} fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "check": return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case "mail": return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    default: return null;
  }
};

// Tiny inline star row
const Stars = ({ n = 5 }) => (
  <span className="review-stars" aria-label={`${n} stars`}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={14} />)}
  </span>
);

// Export to window
Object.assign(window, { SHOP, REVIEWS, SERVICES_PREVIEW, SERVICES_FULL, VALUE_PROPS, TEAM, Icon, Stars });

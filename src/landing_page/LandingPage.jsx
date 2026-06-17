import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

if (typeof document !== "undefined") {
  const s = document.createElement("style");
  s.textContent = `@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`;
  document.head.appendChild(s);
}

const TYPEWRITER_TEXT =
  "At LAFODAP, we believe that every individual, regardless of their circumstances, deserves the opportunity to thrive. Our mission is to empower orphans, vulnerable families, individuals with disabilities, and those facing hardship by providing the support, education, and resources needed to rebuild their futures. Through our work, we create a ripple effect of transformation, offering the tools for self-sufficiency and growth. With a focus on empowerment, self-sustainability, and advocacy, we strive to build a world where every person has the chance to reach their full potential and live a life full of hope and opportunity.";

const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Project", "/project"],
  ["Donations", "/donate"],
  ["Contact", "/contact"],
];

const BARS = [
  { label: "Clean Water", target: 72 },
  { label: "Empowerment", target: 85 },
  { label: "Education", target: 98 },
  { label: "Disabilities", target: 60 },
  { label: "Advocacy", target: 78 },
  { label: "Skill Acquisition", target: 91 },
];

const CAMPAIGNS = [
  {
    img: "/assets/education-causes-img.jpg",
    tag: "Education",
    tagColor: "#1E3D2A",
    title: "A Greater Reach for Uptown Skills",
    desc: "Help us expand our reach to more communities and provide quality education to underprivileged children.",
    raised: 12400,
    goal: 20000,
    percent: 62,
  },
  {
    img: "/assets/orphan-causes.jpg",
    tag: "Care",
    tagColor: "#1E3D2A",
    title: "Run & NGO Children's Sponsorship",
    desc: "We aim to sponsor children in partnership with our network of NGOs to ensure every child gets a chance.",
    raised: 8750,
    goal: 15000,
    percent: 46,
  },
  {
    img: "/assets/empowerment-causes2.jpg",
    tag: "Skills",
    tagColor: "#1E3D2A",
    title: "Raising Money for Vision Rescue",
    desc: "We provide essential eye care and assistive resources for people living with visual impairments.",
    raised: 4200,
    goal: 25000,
    percent: 77,
  },
];

const INITIATIVES = [
  {
    id: 1,
    title: "Education & Mentorship",
    desc: "Building brighter futures through learning and guidance.",
    img: "/assets/education-causes-img.jpg",
    featured: false,
  },
  {
    id: 2,
    title: "Clean Energy Access",
    desc: "Solar lights and safe power for off-grid families.",
    img: "/assets/clean-energy.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Community Empowerment",
    desc: "Supporting women and youth to start sustainable businesses.",
    img: "/assets/disability-causes-img.jpg",
    featured: false,
  },
];

const STATS = [
  { num: 900, suffix: "+", label: "Students\nMentored" },
  { num: 120, suffix: "+", label: "Villages\nLit Up" },
  { num: 3000, suffix: "k+", label: "Families\nReached", display: "3k+" },
];

const SCALLOP_ID = "scallop-clip";

const TESTIMONIALS = [
  {
    quote: "LAFODAP changed everything for my family. My daughter now attends school and I have skills to provide for us. This organisation gave us back our dignity.",
    name: "Fatima Musa",
    role: "Program Beneficiary",
    img: "/assets/orphan-causes.jpg",
  },
  {
    quote: "Volunteering with LAFODAP has been the most humbling experience of my life. Seeing children smile and learn fills my heart with immeasurable joy every single day.",
    name: "Emeka Okafor",
    role: "Volunteer Teacher",
    img: "/assets/about-lafodap.jpg",
  },
  {
    quote: "The vocational training program gave me confidence to start my own tailoring business. I now support my entire household. LAFODAP is a true blessing.",
    name: "Ngozi Adeyemi",
    role: "Skills Graduate",
    img: "/assets/empowerment-causes2.jpg",
  },
];



/* ═══════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════ */
function MobileMenu({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 90,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        style={{
          position: "fixed", top: 0, right: 0,
          height: "100dvh",
          width: "min(320px, 85vw)",
          background: "#080f1c",
          zIndex: 100,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "flex", flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Link to="/" onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "#E8745A", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(232,116,90,0.4)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "white", fontSize: "1rem" }}>LAFODAP</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav style={{ padding: "16px 0", flex: 1 }}>
          {NAV_LINKS.map(([label, href], i) => (
            <Link
              key={label}
              to={href}
              onClick={onClose}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 24px", textDecoration: "none",
                color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", fontWeight: 600,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s, background 0.2s",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transitionDelay: `${0.1 + i * 0.05}s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#A8D96C"; e.currentTarget.style.background = "rgba(168,217,108,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.background = "transparent"; }}
            >
              <span>{label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </nav>

        <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a href="tel:+2348000000000" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, textDecoration: "none", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +234 800 000 0000
          </a>
          <Link
            to="/donate"
            onClick={onClose}
            style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #E8745A, #d4614a)", color: "white", fontWeight: 700, fontSize: "0.875rem", padding: "14px 0", borderRadius: 100, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 6px 20px rgba(232,116,90,0.4)" }}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════
   SCALLOP DEFS
═══════════════════════════════════════ */
function ScallopDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <clipPath id={SCALLOP_ID} clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,0.82 Q0.94,0.75 0.875,0.82 Q0.81,0.89 0.75,0.82 Q0.69,0.75 0.625,0.82 Q0.56,0.89 0.5,0.82 Q0.44,0.75 0.375,0.82 Q0.31,0.89 0.25,0.82 Q0.19,0.75 0.125,0.82 Q0.06,0.89 0,0.82 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════ */
function TypewriterText({ start }) {
  const [displayed, setDisplayed] = useState("");
  const [hovered, setHovered] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const delay = setTimeout(() => {
      timerRef.current = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(TYPEWRITER_TEXT.slice(0, indexRef.current));
        if (indexRef.current >= TYPEWRITER_TEXT.length) clearInterval(timerRef.current);
      }, 18);
    }, 900);
    return () => { clearTimeout(delay); clearInterval(timerRef.current); };
  }, [start]);

  const done = displayed.length >= TYPEWRITER_TEXT.length;

  return (
    <p
      className="leading-[1.85] cursor-default transition-all duration-300"
      style={{ fontSize: hovered ? "0.875rem" : "0.78rem", color: hovered ? "#1A1A18" : "#888", fontWeight: hovered ? 500 : 400, letterSpacing: hovered ? "0.005em" : "normal", minHeight: "5rem" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {displayed}
      {!done && (
        <span style={{ display: "inline-block", width: 2, height: "1em", background: "#E8745A", marginLeft: 2, verticalAlign: "middle", animation: "blink 0.7s step-end infinite" }} />
      )}
    </p>
  );
}

/* ═══════════════════════════════════════
   CIRCLE PROGRESS
═══════════════════════════════════════ */
function CircleProgress({ percent }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;
  return (
    <svg width="68" height="68" viewBox="0 0 68 68">
      <circle cx="34" cy="34" r={r} fill="white" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
      <circle cx="34" cy="34" r={r} fill="none" stroke="white" strokeWidth="4" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 34 34)" style={{ transition: "stroke-dasharray 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
      <text x="34" y="39" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1E3D2A">{percent}%</text>
    </svg>
  );
}

/* ═══════════════════════════════════════
   CAMPAIGN CARD
═══════════════════════════════════════ */
function CampaignCard({ card, visible, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{ opacity: visible ? 1 : 0, transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(30px)", boxShadow: hovered ? "0 20px 56px rgba(0,0,0,0.13)" : "0 4px 24px rgba(0,0,0,0.08)", transition: "opacity 0.6s ease, transform 0.35s ease, box-shadow 0.35s ease", transitionDelay: visible ? "0s" : delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex-shrink-0" style={{ height: 240 }}>
        <div className="w-full h-full" style={{ clipPath: `url(#${SCALLOP_ID})`, WebkitClipPath: `url(#${SCALLOP_ID})` }}>
          <img src={card.img} alt={card.title} className="w-full h-full object-cover" style={{ transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.65s ease" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)" }} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: -2, zIndex: 20 }}>
          <div className="rounded-full flex items-center justify-center" style={{ width: 68, height: 68, background: "#1E3D2A", padding: 4 }}>
            <CircleProgress percent={card.percent} />
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col gap-3 flex-1" style={{ paddingTop: 44 }}>
        <h3 className="font-extrabold text-[#1A1A18] leading-snug" style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem" }}>{card.title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-1">{card.desc}</p>
        <div className="flex items-center justify-between text-xs font-bold pt-1">
          <span><span className="text-gray-400 font-semibold">Raise: </span><span className="text-[#1A1A18]">${card.raised.toLocaleString()}</span></span>
          <span><span className="text-gray-400 font-semibold">Goal: </span><span className="text-[#1A1A18]">${card.goal.toLocaleString()}</span></span>
        </div>
        <Link to="/donate" className="block text-center text-white text-sm font-bold uppercase tracking-widest py-3.5 rounded-full no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "linear-gradient(90deg,#E8745A,#d4614a)" }}>
          Donate Now
        </Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   COUNT UP
═══════════════════════════════════════ */
function CountUp({ target, suffix, display, start }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 2000, steps = 60, increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target]);
  if (display) return <span>{start ? display : "0"}</span>;
  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* ═══════════════════════════════════════
   INITIATIVE CARD
═══════════════════════════════════════ */
function InitiativeCard({ item, visible, delay }) {
  const [hovered, setHovered] = useState(false);

  if (item.featured) {
    return (
      <div
        className="rounded-3xl overflow-hidden flex flex-col relative h-full"
        style={{ background: "#A8D96C", opacity: visible ? 1 : 0, transform: visible ? (hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)") : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.4s ease, box-shadow 0.4s ease", transitionDelay: delay, boxShadow: hovered ? "0 24px 60px rgba(168,217,108,0.4)" : "0 8px 32px rgba(168,217,108,0.25)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="overflow-hidden" style={{ height: 280 }}>
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.7s ease" }} />
        </div>
        <div className="px-5 py-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-extrabold text-[#1A1A18] text-base leading-tight mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
            <p className="text-[#1A1A18]/70 text-xs leading-relaxed">{item.desc}</p>
          </div>
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl overflow-hidden flex flex-col h-full"
      style={{ background: "#ffffff", opacity: visible ? 1 : 0, transform: visible ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.4s ease, box-shadow 0.4s ease", transitionDelay: delay, boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.1)" : "0 4px 20px rgba(0,0,0,0.06)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-3 flex-shrink-0">
        <div>
          <h3 className="font-extrabold text-[#1A1A18] text-base leading-tight mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
          <p className="text-[#6b7280] text-xs leading-relaxed">{item.desc}</p>
        </div>
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#A8D96C] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
        </div>
      </div>
      <div className="overflow-hidden mx-4 mb-4 rounded-2xl flex-1" style={{ minHeight: 190 }}>
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" style={{ transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.7s ease" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   NEWSLETTER
═══════════════════════════════════════ */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => { if (email.trim()) setSubmitted(true); };

  return (
    <div ref={ref} className="w-full" style={{ background: "#1E3D2A" }}>
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="w-full rounded-3xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 2px 40px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex flex-col md:flex-row items-stretch min-h-[200px]">
            <div className="flex flex-col justify-center gap-4 px-8 md:px-12 py-10 md:py-12 flex-1" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-28px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-[2px] rounded-full" style={{ background: "#E8745A" }} />
                <span className="text-[#E8745A] text-sm font-bold uppercase tracking-[0.18em]">Stay in the Loop</span>
                <span className="inline-block w-6 h-[2px] rounded-full" style={{ background: "#E8745A" }} />
              </div>
              <h2 className="text-[#1A1A18] font-black leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em" }}>
                Subscribe To Our<br /><em className="not-italic" style={{ color: "#1E3D2A" }}>Newsletter</em>
              </h2>
              <p className="text-[#888] text-sm leading-relaxed max-w-xs" style={{ fontWeight: 400 }}>
                Get weekly impact stories, campaign updates, and ways to support our mission — delivered straight to your inbox. No spam, ever.
              </p>
            </div>
            <div className="hidden md:block w-px self-stretch my-8" style={{ background: "#f0ece7" }} />
            <div className="flex flex-col justify-center px-8 md:px-12 py-10 md:py-12 md:min-w-[420px]" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(28px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
              {!submitted ? (
                <div className="flex flex-col gap-5">
                  <p className="text-[#1A1A18] font-extrabold text-sm uppercase tracking-widest">Enter your email address</p>
                  <div className="flex items-center rounded-full overflow-hidden" style={{ background: "#F5F2EE", border: `2px solid ${focused ? "#E8745A" : "transparent"}`, transition: "border-color 0.2s ease", padding: "4px 4px 4px 20px" }}>
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="you@example.com"
                      className="flex-1 bg-transparent outline-none text-[#1A1A18] text-sm font-medium placeholder-[#bbb]"
                      style={{ minWidth: 0 }}
                    />
                    <button onClick={handleSubmit} className="flex-shrink-0 font-bold text-sm text-white rounded-full px-7 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #E8745A, #d4614a)", boxShadow: "0 4px 16px rgba(232,116,90,0.35)", whiteSpace: "nowrap" }}>
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[#bbb] text-xs font-medium flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A8D96C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(168,217,108,0.15)", border: "2px solid #A8D96C" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8D96C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div>
                    <p className="font-black text-[#1A1A18] text-lg leading-tight mb-1" style={{ fontFamily: "Georgia, serif" }}>You're in!</p>
                    <p className="text-[#888] text-sm leading-relaxed">Welcome to the LAFODAP family. Your first story of change is on its way.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════ */
export default function LandingPage() {
  const aboutRef = useRef(null);
  const impactRef = useRef(null);
  const empowerRef = useRef(null);
  const empowerStatsRef = useRef(null);
  const campaignRef = useRef(null);
  const testimonialRef = useRef(null);
  const storyRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [impactVisible, setImpactVisible] = useState(false);
  const [empowerVisible, setEmpowerVisible] = useState(false);
  const [empowerStatsVisible, setEmpowerStatsVisible] = useState(false);
  const [campaignVisible, setCampaignVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [barWidths, setBarWidths] = useState(BARS.map(() => 0));
  const [hoveredBar, setHoveredBar] = useState(null);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  const next = () => setCurrent((c) => (c + 1) % CAMPAIGNS.length);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const make = (setter, extra) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) { setter(true); extra?.(); } }, { threshold: 0.15 });

    const aObs = make(setAboutVisible);
    const iObs = make(setImpactVisible, () => setTimeout(() => setBarWidths(BARS.map((b) => b.target)), 200));
    const eObs = make(setEmpowerVisible);
    const esObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setEmpowerStatsVisible(true); }, { threshold: 0.2 });
    const cObs = make(setCampaignVisible);
    const sObs = make(setStoryVisible);
    const tObs = make(setTestimonialVisible);

    if (aboutRef.current) aObs.observe(aboutRef.current);
    if (impactRef.current) iObs.observe(impactRef.current);
    if (empowerRef.current) eObs.observe(empowerRef.current);
    if (empowerStatsRef.current) esObs.observe(empowerStatsRef.current);
    if (campaignRef.current) cObs.observe(campaignRef.current);
    if (testimonialRef.current) tObs.observe(testimonialRef.current);
    if (storyRef.current) sObs.observe(storyRef.current);

    return () => [aObs, iObs, eObs, esObs, cObs, tObs, sObs].forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <ScallopDefs />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ══ HERO ══ */}
      <div className="relative h-screen min-h-[580px] overflow-hidden">
        <img src="/assets/hero-lafodap.jpg" alt="Children" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-[5vw] py-4 md:py-5 bg-slate-950">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded-[9px] bg-[#E8745A] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span className="font-bold text-white text-base md:text-[1.05rem]" style={{ fontFamily: "Georgia, serif" }}>LAFODAP</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {NAV_LINKS.map(([l, t]) => (
              <li key={l}>
                <Link to={t} className="text-white/75 text-sm font-semibold no-underline hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1 text-white/60 text-xs font-semibold">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +234 800 000 0000
            </span>
            <Link to="/donate" className="bg-[#E8745A] text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 rounded-full no-underline hover:bg-[#d4614a] transition-colors">Donate</Link>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2.5">
            <Link to="/donate" className="bg-[#E8745A] text-white text-xs font-bold px-4 py-2 rounded-full no-underline">Donate</Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer" }}
            >
              <span style={{ display: "block", width: 18, height: 2, background: "white", borderRadius: 2 }} />
              <span style={{ display: "block", width: 13, height: 2, background: "white", borderRadius: 2 }} />
              <span style={{ display: "block", width: 18, height: 2, background: "white", borderRadius: 2 }} />
            </button>
          </div>
        </nav>

        <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-[5vw] max-w-xl">
          <h1 className="text-white font-bold leading-[1.1] mb-6 md:mb-9" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,5.5vw,4rem)", letterSpacing: "-0.02em" }}>
            Restoring Dignity. <br /> Rebuilding Lives.
          </h1>
          <p className="text-white/70 text-sm md:text-[0.94rem] leading-[1.78] mb-6 md:mb-7 max-w-sm">
            Supporting persons with disabilities, educating children, caring for orphans, and empowering displaced families.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/donate" className="bg-[#E8745A] text-white font-bold text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full no-underline hover:bg-[#d4614a] transition-colors">Donate Now</Link>
            <Link to="/project" className="text-white font-semibold text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full no-underline border border-white/40 bg-white/10 hover:bg-white/20 transition-colors">Learn More</Link>
          </div>
        </div>

      </div>

      {/* ══ ABOUT ══ */}
      <div className="bg-white w-full py-12 md:py-20 px-5 md:px-10">
        <div className="w-full max-w-[1080px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="w-full md:w-1/2 relative flex-shrink-0" style={{ height: "clamp(280px,50vw,480px)" }}>
            <div className="absolute border-2 border-dashed border-[#c8d8c0] rounded-sm pointer-events-none" style={{ top: 20, left: 20, width: "62%", height: "58%", zIndex: 0 }} />
            <div className="absolute overflow-hidden rounded-sm shadow-lg" style={{ top: 0, left: 0, width: "48%", height: "100%", zIndex: 2 }}>
              <img src="/assets/orphan-causes.jpg" alt="Child" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute overflow-hidden rounded-sm shadow-lg" style={{ top: 0, right: 0, width: "48%", height: "44%", zIndex: 3 }}>
              <img src="/assets/education-causes-img.jpg" alt="Hands" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute overflow-hidden rounded-sm shadow-xl" style={{ bottom: 0, right: 0, width: "48%", height: "52%", zIndex: 4 }}>
              <img src="/assets/about-lafodap.jpg" alt="Community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div ref={aboutRef} className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-2 w-fit cursor-default group" style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translate(0,0)" : "translate(-20px,10px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
              <span className="h-[2px] bg-[#E8745A] transition-all duration-300 ease-out w-5 group-hover:w-10" />
              <span className="text-[#E8745A] text-sm font-semibold uppercase tracking-widest transition-transform duration-300 ease-out group-hover:translate-x-2">About Us</span>
              <span className="h-[2px] bg-[#E8745A] transition-all duration-300 ease-out w-5 group-hover:w-10" />
            </div>
            <div className="flex flex-col">
              {[{ text: "When We Choose to Uplift", delay: "0.15s" }, { text: "the Vulnerable, We Ignite", delay: "0.32s" }, { text: "the Spark of Hope.", delay: "0.48s" }].map(({ text, delay }) => (
                <h2 key={text} className="font-black text-[#111] cursor-default" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem,3vw,2.15rem)", lineHeight: 1.25, opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translate(0,0)" : "translate(-24px,16px)", transition: "opacity 0.65s ease,transform 0.65s ease,color 0.25s ease", transitionDelay: delay }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#C1440E"; e.currentTarget.style.transform = "translate(6px,-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#111"; e.currentTarget.style.transform = "translate(0,0)"; }}
                >{text}</h2>
              ))}
            </div>
            <TypewriterText start={aboutVisible} />
            <div className="grid grid-cols-2 mt-1">
              <div className="bg-[#1a4a2e] px-4 md:px-7 py-5 md:py-6">
                <p className="text-[#a8c5b0] text-[10px] uppercase tracking-widest mb-1">Donation Goal</p>
                <p className="text-white text-2xl md:text-3xl font-bold">$55,000</p>
              </div>
              <div className="bg-[#2d6e47] px-4 md:px-7 py-5 md:py-6 cursor-default" style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translate(0,0)" : "translate(20px,16px)", transition: "opacity 0.6s ease,transform 0.6s ease,box-shadow 0.3s ease", transitionDelay: "1.1s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(4px,-6px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <p className="text-[#a8d5b5] text-[10px] uppercase tracking-widest mb-1">Donation Raised</p>
                <p className="text-white text-2xl md:text-3xl font-bold">$40,000</p>
              </div>
            </div>
            <div style={{ opacity: aboutVisible ? 1 : 0, transform: aboutVisible ? "translate(0,0)" : "translate(-16px,16px)", transition: "opacity 0.6s ease,transform 0.6s ease", transitionDelay: "1.25s" }}>
              <Link to="/donate" className="inline-block bg-[#E8745A] text-white text-sm font-bold uppercase tracking-widest px-7 md:px-8 py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#d4614a] hover:translate-x-1 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(232,116,90,0.45)]">Donate Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══ IMPACT / PROGRESS BARS ══ */}
      <div className="bg-[#FAF8F5] w-full py-12 md:py-16 px-5 md:px-10">
        <div ref={impactRef} className="max-w-[1080px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          <div className="w-full lg:hidden flex gap-3 mb-2">
            <div className="rounded-2xl overflow-hidden shadow-md group flex-1" style={{ height: 180 }}>
              <img src="/assets/education-causes-img.jpg" alt="Impact" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md group flex-1" style={{ height: 180 }}>
              <img src="/assets/orphan-causes.jpg" alt="Child" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="hidden lg:flex gap-3 flex-shrink-0" style={{ width: 500 }}>
            <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: 250 }}>
              <div className="rounded-2xl overflow-hidden shadow-md group" style={{ height: 220 }}><img src="/assets/education-causes-img.jpg" alt="Impact" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
              <div className="rounded-2xl overflow-hidden shadow-md group" style={{ height: 180 }}><img src="/assets/disability-causes-img.jpg" alt="Disability" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
              <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100" style={{ height: 170 }}>
                <p className="text-gray-500 text-sm leading-relaxed italic mb-4">"LAFODAP gave my daughter a chance at life. We are forever grateful."</p>
                <p className="font-bold text-[#1A1A18] text-sm">Fatima Musa</p>
                <p className="text-gray-400 text-xs">Community Member</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: 228 }}>
              <div className="rounded-2xl overflow-hidden shadow-lg group" style={{ height: 340 }}><img src="/assets/orphan-causes.jpg" alt="Child portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
              <div className="rounded-2xl overflow-hidden shadow-md group" style={{ height: 230 }}><img src="/assets/empowerment-causes2.jpg" alt="Empowerment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#1E3D2A", opacity: impactVisible ? 1 : 0, transform: impactVisible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.5s ease,transform 0.5s ease" }}>Our Focused Impact</span>
            <h2 className="font-extrabold text-[#1A1A18] leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem,3vw,2.8rem)", letterSpacing: "-0.02em", opacity: impactVisible ? 1 : 0, transform: impactVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease,transform 0.6s ease", transitionDelay: "0.1s" }}>
              Helping Others<br />Improves World
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm" style={{ opacity: impactVisible ? 1 : 0, transform: impactVisible ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.6s ease,transform 0.6s ease", transitionDelay: "0.2s" }}>
              Ensuring communities have access to life-changing benefits like clean water, education, skill training, and disability support.
            </p>
            <div className="flex flex-col gap-4 mt-1 w-full">
              {BARS.map((bar, i) => (
                <div key={bar.label} style={{ opacity: impactVisible ? 1 : 0, transform: impactVisible ? "translateX(0)" : "translateX(24px)", transition: "opacity 0.5s ease,transform 0.5s ease", transitionDelay: `${0.3 + i * 0.08}s` }}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold transition-all duration-300 cursor-default" style={{ fontSize: hoveredBar === i ? "1.1rem" : "0.88rem", color: hoveredBar === i ? "#1E3D2A" : "#1A1A18" }}>{bar.label}</span>
                    <span className="font-bold tabular-nums transition-all duration-300" style={{ fontSize: hoveredBar === i ? "1.1rem" : "0.88rem", color: hoveredBar === i ? "#1E3D2A" : "#6b7280" }}>{barWidths[i]}%</span>
                  </div>
                  <div className="w-full rounded-full overflow-hidden cursor-pointer" style={{ height: hoveredBar === i ? 11 : 8, background: "#e5e7eb", transition: "height 0.25s ease" }} onMouseEnter={() => setHoveredBar(i)} onMouseLeave={() => setHoveredBar(null)}>
                    <div className="h-full rounded-full" style={{ width: `${barWidths[i]}%`, background: hoveredBar === i ? "linear-gradient(90deg,#1E3D2A,#2d8a52)" : "#1E3D2A", transition: "width 1.4s cubic-bezier(0.22,1,0.36,1),background 0.3s ease" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2" style={{ opacity: impactVisible ? 1 : 0, transform: impactVisible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.5s ease,transform 0.5s ease", transitionDelay: "0.85s" }}>
              <Link to="/project" className="inline-flex items-center gap-2 border-2 border-[#1A1A18] text-[#1A1A18] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full no-underline transition-all duration-300 hover:bg-[#1A1A18] hover:text-white hover:shadow-lg">View Details</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══ EMPOWER ══ */}
      <div className="w-full" style={{ background: "#dce8d4" }}>
        <div ref={empowerRef} className="max-w-[1080px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-10">
          <div className="text-center mb-10 md:mb-14" style={{ opacity: empowerVisible ? 1 : 0, transform: empowerVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
            <h2 className="font-extrabold text-[#1A1A18] leading-tight mb-3" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem,4.5vw,3.2rem)", letterSpacing: "-0.02em" }}>
              Empowering People. Inspiring<br />Real Change.
            </h2>
            <p className="text-[#4a5e42] text-sm md:text-base max-w-md mx-auto">Every initiative is designed with communities, not just for them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
            {INITIATIVES.map((item, i) => (
              <InitiativeCard key={item.id} item={item} visible={empowerVisible} delay={`${i * 0.12}s`} />
            ))}
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
          <div ref={empowerStatsRef} className="bg-white rounded-3xl px-8 md:px-12 py-10 md:py-12" style={{ opacity: empowerVisible ? 1 : 0, transform: empowerVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease", transitionDelay: "0.4s", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8">
              <div>
                <h3 className="font-extrabold text-[#1A1A18] leading-tight mb-2" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem,3vw,2.4rem)" }}>Every Number Holds a Story</h3>
                <p className="text-[#6b7280] text-sm max-w-sm leading-relaxed">Each figure represents hope restored, futures rewritten, and lives forever changed.</p>
              </div>
              <Link to="/about" className="flex-shrink-0 inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "#1E3D2A", whiteSpace: "nowrap" }}>
                More Stories Of Change
                <div className="w-6 h-6 rounded-full bg-[#A8D96C] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-0 overflow-hidden">
              {STATS.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-6 overflow-hidden">
                    <span className="font-extrabold leading-none select-none block w-full text-center" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3.5rem,7vw,6rem)", color: "rgba(168,217,108,0.5)", lineHeight: 1, overflow: "hidden", textOverflow: "clip", whiteSpace: "nowrap" }}>
                      <CountUp target={stat.num} suffix={stat.suffix} display={stat.display} start={empowerStatsVisible} />
                    </span>
                    <p className="font-black text-[#1A1A18] leading-tight mt-3 whitespace-pre-line" style={{ fontSize: "clamp(1rem,1.8vw,1.25rem)", letterSpacing: "-0.01em" }}>{stat.label}</p>
                  </div>
                  {i < STATS.length - 1 && <div className="hidden sm:block w-px self-stretch my-4" style={{ background: "#e5e7eb" }} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ CAMPAIGNS ══ */}
      <div className="bg-green py-14 md:py-20 px-5 md:px-10">
        <div ref={campaignRef} className="max-w-[1080px] mx-auto">
          <div className="flex items-start justify-between mb-10 md:mb-14">
            <div style={{ opacity: campaignVisible ? 1 : 0, transform: campaignVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
              <p className="text-[#E8745A] text-xs font-bold uppercase tracking-widest mb-2">We Need Your Help</p>
              <h2 className="font-extrabold text-[#1A1A18] leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }}>Featured Campaigns</h2>
            </div>
            <div className="flex gap-2 mt-2 flex-shrink-0" style={{ opacity: campaignVisible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
              <button onClick={prev} className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#E8745A] hover:text-[#E8745A] transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={next} className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#E8745A] hover:text-[#E8745A] transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
            {CAMPAIGNS.map((card, i) => (
              <CampaignCard key={card.title} card={card} visible={campaignVisible} delay={`${i * 0.15}s`} />
            ))}
          </div>
          <div className="md:hidden">
            <CampaignCard card={CAMPAIGNS[current]} visible={campaignVisible} delay="0s" />
            <div className="flex justify-center gap-2 mt-6">
              {CAMPAIGNS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300" style={{ width: i === current ? 20 : 8, height: 8, background: i === current ? "#E8745A" : "#e5e7eb" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ FEATURED STORY ══ */}
      <div ref={storyRef} className="bg-[#1E3D2A] w-full">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row min-h-[520px]">
          <div className="flex flex-col justify-center gap-5 px-8 md:px-12 py-14 md:py-16 w-full md:w-[42%] flex-shrink-0">
            <div className="flex items-center gap-2" style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#A8D96C"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
              <span className="text-[#A8D96C] text-xs font-bold uppercase tracking-widest">Our Story</span>
            </div>
            <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em", opacity: storyVisible ? 1 : 0, transform: storyVisible ? "translateY(0)" : "translateY(18px)", transition: "opacity 0.65s ease,transform 0.65s ease", transitionDelay: "0.12s" }}>
              Featured Campaing<br />Building A Future<br /><em className="italic text-[#A8D96C]">Ikorodu Rally</em>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed" style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.65s ease,transform 0.65s ease", transitionDelay: "0.25s" }}>
              Our recent campaign in Ikorodu, Lagos, showcased the power of community collaboration. In partnership with local government officials, including the Chairman of Ikorodu Local Government, we delivered essential services to vulnerable groups, including orphans, disabled individuals, youth, and mothers. <br /><br />
              We distributed over 100 wheelchairs, provided food supplies, and offered free medical screenings to hundreds. Additionally, we empowered local businesses with grants, and provided sewing machines and motorcycles to youth and mothers, creating opportunities for financial independence. <br /><br />
              This impactful campaign, made possible by local leaders, volunteers, and partners, ignited lasting change and brought hope to the community, taking us a step closer to our mission of a brighter, more inclusive future.
            </p>
            <div style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.6s ease,transform 0.6s ease", transitionDelay: "0.38s" }}>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#A8D96C] text-xs font-bold uppercase tracking-widest no-underline hover:opacity-75 transition-opacity">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-1.5 p-1.5 min-h-[320px] md:min-h-0" style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "translateX(0)" : "translateX(40px)", transition: "opacity 0.75s ease,transform 0.75s ease", transitionDelay: "0.2s" }}>
            <div className="row-span-2 rounded-xl overflow-hidden group min-h-[260px]"><img src="/assets/about-lafodap.jpg" alt="Story 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="rounded-xl overflow-hidden group" style={{ minHeight: 130 }}><img src="/assets/orphan-causes.jpg" alt="Story 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="rounded-xl overflow-hidden group" style={{ minHeight: 130 }}><img src="/assets/education-causes-img.jpg" alt="Story 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="rounded-xl overflow-hidden group" style={{ minHeight: 120 }}><img src="/assets/disability-causes-img.jpg" alt="Story 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="rounded-xl overflow-hidden group" style={{ minHeight: 120 }}><img src="/assets/empowerment-causes2.jpg" alt="Story 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
          </div>
        </div>
      </div>

      {/* ══ TESTIMONIALS ══ */}
      <div ref={testimonialRef} className="relative w-full overflow-hidden bg-[#FAF8F5]" style={{ minHeight: 480 }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 0 }}>
          <img src="/assets/african-map.png" alt="" style={{ width: "min(55vw, 520px)", height: "auto", opacity: 0.08, filter: "grayscale(100%) brightness(0)" }} />
        </div>
        
        <div className="relative z-10 max-w-[1080px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="text-center mb-12" style={{ opacity: testimonialVisible ? 1 : 0, transform: testimonialVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            <p className="text-[#E8745A] text-xs font-bold uppercase tracking-widest mb-2">Testimonial</p>
            <h2 className="font-extrabold text-[#1A1A18] leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }}>What Our Community Says</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto leading-relaxed">Real voices from the people whose lives have been transformed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 flex flex-col gap-4" style={{ opacity: testimonialVisible ? 1 : 0, transform: testimonialVisible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease", transitionDelay: `${0.2 + i * 0.15}s`, boxShadow: "0 2px 20px rgba(0,0,0,0.06)", borderTop: "3px solid #E8745A" }}>
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                  <path d="M0 28V17.2C0 12.5333 1.06667 8.6 3.2 5.4C5.33333 2.2 8.66667 0.266667 13.2 0L14.4 3C11.6 3.53333 9.46667 4.86667 8 7C6.53333 9.13333 5.86667 11.5333 6 14.2H13.2V28H0ZM21.6 28V17.2C21.6 12.5333 22.6667 8.6 24.8 5.4C26.9333 2.2 30.2667 0.266667 34.8 0L36 3C33.2 3.53333 31.0667 4.86667 29.6 7C28.1333 9.13333 27.4667 11.5333 27.6 14.2H34.8V28H21.6Z" fill="#E8745A" fillOpacity="0.25" />
                </svg>
                <p className="text-[#444] leading-relaxed flex-1" style={{ fontStyle: "italic", fontSize: "0.88rem", lineHeight: 1.75 }}>"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 46, height: 46, border: "2px solid #E8745A" }}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#1A1A18] text-sm leading-tight" style={{ fontFamily: "Georgia, serif" }}>{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ NEWSLETTER ══ */}
      <NewsletterSection />

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#080f1c" }}>
        <div style={{ height: 4, background: "linear-gradient(90deg, #E8745A 0%, #A8D96C 50%, #1E3D2A 100%)" }} />
        <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-3 no-underline">
                <div className="w-12 h-12 rounded-xl bg-[#E8745A] flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: "0 4px 20px rgba(232,116,90,0.4)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-black text-xl leading-tight tracking-tight" style={{ fontFamily: "Georgia, serif" }}>LAFODAP</p>
                  <p className="text-[#A8D96C] text-xs font-bold uppercase tracking-widest mt-0.5">Empowering Lives</p>
                </div>
              </Link>
              <p className="text-white/75 text-sm leading-relaxed font-medium">Dedicated to transforming lives through empowerment, education, and sustainable development for the less privileged.</p>
              <div className="flex gap-2.5">
                {[
                  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "Twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                  { label: "Instagram" },
                  { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#E8745A]" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
                    {s.label === "Instagram" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d={s.path} /></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Quick Links</h4>
                <div className="w-10 h-[3px] rounded-full bg-[#E8745A]" />
              </div>
              <ul className="flex flex-col gap-3 list-none">
                {[["Home", "/"], ["About", "/about"], ["Projects", "/project"], ["Contact", "#"], ["Donate", "/donate"]].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-white/80 text-sm font-semibold no-underline hover:text-[#A8D96C] transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 h-[2px] rounded-full bg-[#A8D96C] transition-all duration-300 group-hover:w-5 flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Our Focus</h4>
                <div className="w-10 h-[3px] rounded-full bg-[#E8745A]" />
              </div>
              <ul className="flex flex-col gap-3 list-none">
                {["Orphans & Vulnerable Children", "Internally Displaced Persons", "Persons with Disabilities", "Families in Hardship"].map((item) => (
                  <li key={item} className="text-white/80 text-sm font-semibold leading-snug">{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Get In Touch</h4>
                <div className="w-10 h-[3px] rounded-full bg-[#E8745A]" />
              </div>
              <ul className="flex flex-col gap-4 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <span className="text-white/80 text-sm font-semibold leading-relaxed">No. 5 Community Road, Ikorodu, Lagos, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <a href="tel:+2348000000000" className="text-white/80 text-sm font-semibold no-underline hover:text-[#A8D96C] transition-colors">+234 800 000 0000</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <a href="mailto:info@lafodap.org" className="text-white/80 text-sm font-semibold no-underline hover:text-[#A8D96C] transition-colors">info@lafodap.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm font-semibold">© 2026 LAFODAP Foundation. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/50 text-sm font-semibold no-underline hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 text-sm font-semibold no-underline hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
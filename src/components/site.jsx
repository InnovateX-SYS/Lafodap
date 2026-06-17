import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════
   LAFODAP — Shared design system
   Brand palette + reusable motion primitives + Nav / Footer.
   Mirrors the language established on the landing page.
═══════════════════════════════════════════════════════════════ */

export const C = {
  coral: "#E8745A",
  coralDark: "#d4614a",
  lime: "#A8D96C",
  green: "#1E3D2A",
  green2: "#2d6e47",
  ink: "#1A1A18",
  cream: "#FAF8F5",
  mint: "#dce8d4",
  night: "#080f1c",
};

export const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Project", "/project"],
  ["Volunteer", "/volunteer"],
  ["Donate", "/donate"],
  ["Contact", "/contact"],
];

/* Inject the keyframes used across every page once. */
if (typeof document !== "undefined" && !document.getElementById("lafodap-kf")) {
  const s = document.createElement("style");
  s.id = "lafodap-kf";
  s.textContent = `
    @keyframes lf-blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes lf-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes lf-float-slow{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
    @keyframes lf-spin-slow{to{transform:rotate(360deg)}}
    @keyframes lf-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
    @keyframes lf-pop{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
    @keyframes lf-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    html{scroll-behavior:smooth}
    .lf-grad-text{background:linear-gradient(90deg,#E8745A,#A8D96C,#2d8a52);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:200% auto;animation:lf-shimmer 6s linear infinite}
    *::selection{background:rgba(232,116,90,0.25)}
  `;
  document.head.appendChild(s);
}

/* ─── Scroll to top on route change ─── */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

/* ─── Reveal-on-scroll hook ─── */
export function useReveal(opts = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); if (opts.once !== false) obs.disconnect(); } },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, shown];
}

/* ─── Reveal wrapper (fade + slide / zoom) ─── */
export function Reveal({ children, delay = 0, y = 28, x = 0, scale = 1, className = "", as: Tag = "div", style = {}, threshold = 0.15 }) {
  const [ref, shown] = useReveal({ threshold });
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate(0,0) scale(1)" : `translate(${x}px,${y}px) scale(${scale})`,
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ─── Scroll progress for a section (0 → 1 as it crosses viewport) ─── */
export function useScrollProgress() {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = 1 - (r.top + r.height / 2) / (vh + r.height / 2);
      setP(Math.min(1, Math.max(0, prog)));
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return [ref, p];
}

/* ─── Word-by-word animated heading ─── */
export function SplitHeading({ text, className = "", style = {}, delay = 0, stagger = 0.06, color, hoverColor = C.coral }) {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <span
            style={{
              display: "inline-block", cursor: "default",
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(100%)",
              transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1), color 0.25s ease",
              transitionDelay: `${delay + i * stagger}s`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = color || "inherit")}
          >
            {w}&nbsp;
          </span>
        </span>
      ))}
    </h2>
  );
}

/* ─── Eyebrow label with animated rules ─── */
export function Eyebrow({ children, center = false, color = C.coral, light = false }) {
  return (
    <div className={`flex items-center gap-2 w-fit cursor-default group ${center ? "mx-auto" : ""}`}>
      <span className="h-[2px] transition-all duration-300 ease-out w-5 group-hover:w-10" style={{ background: color }} />
      <span className="text-sm font-bold uppercase tracking-[0.18em] transition-transform duration-300 ease-out group-hover:translate-x-1" style={{ color }}>{children}</span>
      <span className="h-[2px] transition-all duration-300 ease-out w-5 group-hover:w-10" style={{ background: color }} />
    </div>
  );
}

/* ─── Pill button ─── */
export function Btn({ to, href, children, variant = "solid", className = "", ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest px-7 py-3 rounded-full no-underline transition-all duration-300";
  const styles = {
    solid: { background: `linear-gradient(135deg, ${C.coral}, ${C.coralDark})`, color: "#fff", boxShadow: "0 8px 24px rgba(232,116,90,0.35)" },
    dark: { background: C.green, color: "#fff" },
    lime: { background: C.lime, color: C.ink },
    ghost: { background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)" },
    outline: { background: "transparent", color: C.ink, border: `2px solid ${C.ink}` },
  };
  const hover = (e, on) => {
    e.currentTarget.style.transform = on ? "translateY(-3px)" : "translateY(0)";
    if (variant === "outline") { e.currentTarget.style.background = on ? C.ink : "transparent"; e.currentTarget.style.color = on ? "#fff" : C.ink; }
    if (variant === "solid") e.currentTarget.style.boxShadow = on ? "0 14px 32px rgba(232,116,90,0.5)" : "0 8px 24px rgba(232,116,90,0.35)";
  };
  const props = { className: `${base} ${className}`, style: styles[variant], onMouseEnter: (e) => hover(e, true), onMouseLeave: (e) => hover(e, false), ...rest };
  if (href) return <a href={href} {...props}>{children}</a>;
  return <Link to={to || "#"} {...props}>{children}</Link>;
}

/* ═══════════════════════════════════════
   SCALLOP CLIP (shared with landing)
═══════════════════════════════════════ */
export const SCALLOP_ID = "scallop-clip";
export function ScallopDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <clipPath id={SCALLOP_ID} clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,0.82 Q0.94,0.75 0.875,0.82 Q0.81,0.89 0.75,0.82 Q0.69,0.75 0.625,0.82 Q0.56,0.89 0.5,0.82 Q0.44,0.75 0.375,0.82 Q0.31,0.89 0.25,0.82 Q0.19,0.75 0.125,0.82 Q0.06,0.89 0,0.82 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════ */
function MobileMenu({ open, onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 190, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 0.3s ease" }} />
      <div style={{ position: "fixed", top: 0, right: 0, height: "100dvh", width: "min(320px,85vw)", background: C.night, zIndex: 200, transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Brand onClick={onClose} />
          <button onClick={onClose} aria-label="Close menu" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <nav style={{ padding: "16px 0", flex: 1 }}>
          {NAV_LINKS.map(([label, href], i) => (
            <Link key={label} to={href} onClick={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", textDecoration: "none", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "color 0.2s, background 0.2s", opacity: open ? 1 : 0, transform: open ? "translateX(0)" : "translateX(20px)", transitionDelay: `${0.1 + i * 0.05}s` }}
              onMouseEnter={(e) => { e.currentTarget.style.color = C.lime; e.currentTarget.style.background = "rgba(168,217,108,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.background = "transparent"; }}>
              <span>{label}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </Link>
          ))}
        </nav>
        <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Link to="/donate" onClick={onClose} style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${C.coral}, ${C.coralDark})`, color: "#fff", fontWeight: 700, fontSize: "0.875rem", padding: "14px 0", borderRadius: 100, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 6px 20px rgba(232,116,90,0.4)" }}>Donate Now</Link>
        </div>
      </div>
    </>
  );
}

function Brand({ onClick, dark = false }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2 no-underline">
      <div className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0" style={{ background: C.coral, boxShadow: "0 4px 16px rgba(232,116,90,0.4)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      </div>
      <span className="font-bold text-base md:text-[1.05rem]" style={{ fontFamily: "Georgia, serif", color: dark ? C.ink : "#fff" }}>LAFODAP</span>
    </Link>
  );
}

/* ═══════════════════════════════════════
   NAV — sticky, transitions to solid on scroll
═══════════════════════════════════════ */
export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-[120] flex items-center justify-between px-5 md:px-[5vw] transition-all duration-500"
        style={{ paddingTop: scrolled ? 12 : 18, paddingBottom: scrolled ? 12 : 18, background: scrolled ? "rgba(8,15,28,0.92)" : "rgba(8,15,28,0.35)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "transparent"}`, boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.25)" : "none" }}>
        <Brand />
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_LINKS.map(([l, t]) => {
            const active = pathname === t;
            return (
              <li key={l}>
                <Link to={t} className="relative text-sm font-semibold no-underline transition-colors group" style={{ color: active ? C.lime : "rgba(255,255,255,0.78)" }}>
                  {l}
                  <span className="absolute -bottom-1.5 left-0 h-[2px] rounded-full transition-all duration-300" style={{ width: active ? "100%" : 0, background: C.lime }} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/donate" className="text-white text-sm font-bold px-5 py-2.5 rounded-full no-underline transition-all duration-300 hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${C.coral}, ${C.coralDark})`, boxShadow: "0 6px 18px rgba(232,116,90,0.4)" }}>Donate</Link>
        </div>
        <div className="flex md:hidden items-center gap-2.5">
          <Link to="/donate" className="text-white text-xs font-bold px-4 py-2 rounded-full no-underline" style={{ background: C.coral }}>Donate</Link>
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer" }}>
            <span style={{ width: 18, height: 2, background: "#fff", borderRadius: 2 }} />
            <span style={{ width: 13, height: 2, background: "#fff", borderRadius: 2 }} />
            <span style={{ width: 18, height: 2, background: "#fff", borderRadius: 2 }} />
          </button>
        </div>
      </nav>
    </>
  );
}

/* ═══════════════════════════════════════
   PAGE HERO — parallax bg + scroll zoom + layered depth
═══════════════════════════════════════ */
export function PageHero({ image, eyebrow, title, sub, crumb, height = "78vh", children, align = "center" }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { setP(Math.min(1, window.scrollY / (window.innerHeight || 800))); raf = 0; }); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header className="relative overflow-hidden" style={{ height, minHeight: 480 }}>
      {/* Parallax + scroll-zoom image */}
      <div className="absolute inset-0" style={{ transform: `scale(${1.12 + p * 0.12}) translateY(${p * 60}px)`, transition: "transform 0.1s linear", willChange: "transform" }}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,15,28,0.55) 0%, rgba(8,15,28,0.35) 40%, rgba(8,15,28,0.82) 100%)" }} />
      {/* Floating depth blobs */}
      <div className="absolute pointer-events-none" style={{ top: "18%", right: "10%", width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,217,108,0.35), transparent 70%)", filter: "blur(8px)", animation: "lf-float 7s ease-in-out infinite", transform: `translateY(${p * -80}px)` }} />
      <div className="absolute pointer-events-none" style={{ bottom: "22%", left: "8%", width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,116,90,0.4), transparent 70%)", filter: "blur(6px)", animation: "lf-float-slow 9s ease-in-out infinite", transform: `translateY(${p * 60}px)` }} />

      <div className={`relative z-10 h-full max-w-[1080px] mx-auto px-5 md:px-10 flex flex-col justify-center ${align === "center" ? "items-center text-center" : "items-start"}`} style={{ transform: `translateY(${p * 40}px)`, opacity: 1 - p * 0.6 }}>
        {crumb && (
          <Reveal y={14} className="mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Link to="/" className="no-underline hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>Home</Link>
              <span style={{ color: C.lime }}>/</span>
              <span className="text-white">{crumb}</span>
            </div>
          </Reveal>
        )}
        {eyebrow && <Reveal y={16} delay={0.05}><div className="mb-4"><Eyebrow center={align === "center"} color={C.lime}>{eyebrow}</Eyebrow></div></Reveal>}
        <SplitHeading text={title} className="text-white font-black leading-[1.05]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem,6vw,4.6rem)", letterSpacing: "-0.02em", maxWidth: align === "center" ? 900 : 760 }} color="#fff" />
        {sub && <Reveal y={18} delay={0.25} className={align === "center" ? "mx-auto" : ""}><p className="text-white/75 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">{sub}</p></Reveal>}
        {children && <Reveal y={20} delay={0.4} className="mt-8">{children}</Reveal>}
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ bottom: 28, opacity: 1 - p * 2 }}>
        <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <span className="w-[22px] h-[36px] rounded-full border-2 border-white/40 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-white/70" style={{ animation: "lf-float 1.6s ease-in-out infinite" }} />
        </span>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════
   FOOTER — shared
═══════════════════════════════════════ */
export function SiteFooter() {
  return (
    <footer style={{ background: C.night }}>
      <div style={{ height: 4, background: `linear-gradient(90deg, ${C.coral} 0%, ${C.lime} 50%, ${C.green} 100%)` }} />
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: C.coral, boxShadow: "0 4px 20px rgba(232,116,90,0.4)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <div>
                <p className="text-white font-black text-xl leading-tight tracking-tight" style={{ fontFamily: "Georgia, serif" }}>LAFODAP</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: C.lime }}>Empowering Lives</p>
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
                <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.coral)} onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}>
                  {s.label === "Instagram" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" /></svg>
                  ) : (<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d={s.path} /></svg>)}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div><h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Quick Links</h4><div className="w-10 h-[3px] rounded-full" style={{ background: C.coral }} /></div>
            <ul className="flex flex-col gap-3 list-none">
              {NAV_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-white/80 text-sm font-semibold no-underline transition-colors duration-200 flex items-center gap-2 group" onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                    <span className="w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-5 flex-shrink-0" style={{ background: C.lime }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div><h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Our Focus</h4><div className="w-10 h-[3px] rounded-full" style={{ background: C.coral }} /></div>
            <ul className="flex flex-col gap-3 list-none">
              {["Orphans & Vulnerable Children", "Internally Displaced Persons", "Persons with Disabilities", "Families in Hardship"].map((item) => (
                <li key={item} className="text-white/80 text-sm font-semibold leading-snug">{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div><h4 className="text-white font-black text-base uppercase tracking-widest mb-2">Get In Touch</h4><div className="w-10 h-[3px] rounded-full" style={{ background: C.coral }} /></div>
            <ul className="flex flex-col gap-4 list-none">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <span className="text-white/80 text-sm font-semibold leading-relaxed">No. 5 Community Road, Ikorodu, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <a href="tel:+2348000000000" className="text-white/80 text-sm font-semibold no-underline transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>+234 800 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <a href="mailto:info@lafodap.org" className="text-white/80 text-sm font-semibold no-underline transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = C.lime)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>info@lafodap.org</a>
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
  );
}

/* ─── Animated number counter ─── */
export function CountUp({ target, suffix = "", duration = 2000, display }) {
  const [ref, shown] = useReveal({ threshold: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    let cur = 0; const steps = 60; const inc = target / steps;
    const t = setInterval(() => { cur += inc; if (cur >= target) { setN(target); clearInterval(t); } else setN(Math.floor(cur)); }, duration / steps);
    return () => clearInterval(t);
  }, [shown, target]);
  return <span ref={ref}>{display && n >= target ? display : n.toLocaleString()}{!display && suffix}{display && n >= target ? "" : ""}</span>;
}

/* ─── Page shell: nav + scroll-restore + content + footer ─── */
export function Page({ children }) {
  return (
    <div className="w-full overflow-x-hidden" style={{ background: "#fff" }}>
      <ScrollToTop />
      <ScallopDefs />
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

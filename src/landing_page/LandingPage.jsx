import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ── blink keyframe injected once ── */
if (typeof document !== "undefined") {
  const s = document.createElement("style");
  s.textContent = `@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`;
  document.head.appendChild(s);
}

/* ── constants ── */
const TYPEWRITER_TEXT =
  "At LAFODAP, we believe that every individual, regardless of their circumstances, deserves the opportunity to thrive. Our mission is to empower orphans, vulnerable families, individuals with disabilities, and those facing hardship by providing the support, education, and resources needed to rebuild their futures. Through our work, we create a ripple effect of transformation, offering the tools for self-sufficiency and growth. With a focus on empowerment, self-sustainability, and advocacy, we strive to build a world where every person has the chance to reach their full potential and live a life full of hope and opportunity.";

const BARS = [
  { label: "Clean Water", target: 72 },
  { label: "Empowerment", target: 85 },
  { label: "Education", target: 98 },
  { label: "Disabilities", target: 60 },
  { label: "Advocacy", target: 78 },
  { label: "Skill Acquisition", target: 91 },
];

/* ── TypewriterText ── */
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
        if (indexRef.current >= TYPEWRITER_TEXT.length)
          clearInterval(timerRef.current);
      }, 18);
    }, 900);
    return () => {
      clearTimeout(delay);
      clearInterval(timerRef.current);
    };
  }, [start]);

  const done = displayed.length >= TYPEWRITER_TEXT.length;

  

  return (
    <p
      className="leading-[1.85] cursor-default transition-all duration-300"
      style={{
        fontSize: hovered ? "0.875rem" : "0.78rem",
        color: hovered ? "#1A1A18" : "#888",
        fontWeight: hovered ? 500 : 400,
        letterSpacing: hovered ? "0.005em" : "normal",
        minHeight: "5rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {displayed}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "#E8745A",
            marginLeft: 2,
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite",
          }}
        />
      )}
    </p>
  );
}

/* ── Main Page ── */
export default function LandingPage() {
  const aboutRef = useRef(null);
  const impactRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [impactVisible, setImpactVisible] = useState(false);
  const [barWidths, setBarWidths] = useState(BARS.map(() => 0));
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    const aObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAboutVisible(true);
      },
      { threshold: 0.15 },
    );
    const iObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setImpactVisible(true);
          setTimeout(() => setBarWidths(BARS.map((b) => b.target)), 200);
        }
      },
      { threshold: 0.15 },
    );
    if (aboutRef.current) aObs.observe(aboutRef.current);
    if (impactRef.current) iObs.observe(impactRef.current);
    return () => {
      aObs.disconnect();
      iObs.disconnect();
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <div className="relative h-screen min-h-[580px] overflow-hidden">
        <img
          src="/assets/hero-lafodap.jpg"
          alt="Children"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* NAV */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-[5vw] py-4 md:py-5">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded-[9px] bg-[#E8745A] flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span
              className="font-bold text-white text-base md:text-[1.05rem]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              LAFODAP
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 list-none">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Project", "/project"],
              ["Donations", "/donate"],
              ["Contact", "#"],
            ].map(([l, t]) => (
              <li key={l}>
                <Link
                  to={t}
                  className="text-white/75 text-sm font-semibold no-underline hover:text-white transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1 text-white/60 text-xs font-semibold">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +234 800 000 0000
            </span>
            <Link
              to="/donate"
              className="bg-[#E8745A] text-white text-xs md:text-sm font-bold px-4 md:px-5 py-2 rounded-full no-underline hover:bg-[#d4614a] transition-colors"
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* HERO TEXT */}
        <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-[5vw] max-w-xl">
          <h1
            className="text-white font-bold leading-[1.1] mb-6 md:mb-9"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem,5.5vw,4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Restoring Dignity. <br /> Rebuilding Lives.
          </h1>
          <p className="text-white/70 text-sm md:text-[0.94rem] leading-[1.78] mb-6 md:mb-7 max-w-sm">
            Supporting persons with disabilities, educating children, caring for
            orphans, and empowering displaced families.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/donate"
              className="bg-[#E8745A] text-white font-bold text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full no-underline hover:bg-[#d4614a] transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="text-white font-semibold text-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full no-underline border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* HERO STATS — hidden on very small screens */}
        <div className="absolute bottom-0 left-0 z-10 hidden sm:flex">
          {[
            { num: "652K", label: "Lives Touched" },
            { num: "₦10M+", label: "Funds Raised" },
            { num: "55+", label: "Volunteers" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="px-5 md:px-8 py-4 text-center"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                borderTopLeftRadius: i === 0 ? 12 : 0,
                borderTopRightRadius: i === 2 ? 12 : 0,
              }}
            >
              <div
                className="font-extrabold text-white leading-none mb-1.5"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.2rem,2.5vw,1.8rem)",
                }}
              >
                {s.num}
              </div>
              <div className="text-white/50 font-bold uppercase tracking-widest text-[0.55rem]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <div className="bg-white w-full py-12 md:py-20 px-5 md:px-10">
        <div className="w-full max-w-[1080px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* LEFT: PHOTO COLLAGE — stacks on mobile, collage on md+ */}
          <div
            className="w-full md:w-1/2 relative flex-shrink-0"
            style={{ height: "clamp(280px, 50vw, 480px)" }}
          >
            <div
              className="absolute border-2 border-dashed border-[#c8d8c0] rounded-sm pointer-events-none"
              style={{
                top: 20,
                left: 20,
                width: "62%",
                height: "58%",
                zIndex: 0,
              }}
            />

            <div
              className="absolute overflow-hidden rounded-sm shadow-lg"
              style={{
                top: 0,
                left: 0,
                width: "48%",
                height: "100%",
                zIndex: 2,
              }}
            >
              <img
                src="/assets/orphan-causes.jpg"
                alt="Child"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute overflow-hidden rounded-sm shadow-lg"
              style={{
                top: 0,
                right: 0,
                width: "48%",
                height: "44%",
                zIndex: 3,
              }}
            >
              <img
                src="/assets/education-causes-img.jpg"
                alt="Hands"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute overflow-hidden rounded-sm shadow-xl"
              style={{
                bottom: 0,
                right: 0,
                width: "48%",
                height: "52%",
                zIndex: 4,
              }}
            >
              <img
                src="/assets/about-lafodap.jpg"
                alt="Community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div
            ref={aboutRef}
            className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5"
          >
            {/* Label */}
            <div
              className="flex items-center gap-2 w-fit cursor-default group"
              style={{
                opacity: aboutVisible ? 1 : 0,
                transform: aboutVisible
                  ? "translate(0,0)"
                  : "translate(-20px,10px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="h-[2px] bg-[#E8745A] transition-all duration-300 ease-out w-5 group-hover:w-10" />
              <span className="text-[#E8745A] text-sm font-semibold uppercase tracking-widest transition-transform duration-300 ease-out group-hover:translate-x-2">
                About Us
              </span>
              <span className="h-[2px] bg-[#E8745A] transition-all duration-300 ease-out w-5 group-hover:w-10" />
            </div>

            {/* Heading lines */}
            <div className="flex flex-col">
              {[
                { text: "When We Choose to Uplift", delay: "0.15s" },
                { text: "the Vulnerable, We Ignite", delay: "0.32s" },
                { text: "the Spark of Hope.", delay: "0.48s" },
              ].map(({ text, delay }) => (
                <h2
                  key={text}
                  className="font-black text-[#111] cursor-default"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.4rem, 3vw, 2.15rem)",
                    lineHeight: 1.25,
                    opacity: aboutVisible ? 1 : 0,
                    transform: aboutVisible
                      ? "translate(0,0)"
                      : "translate(-24px,16px)",
                    transition:
                      "opacity 0.65s ease, transform 0.65s ease, color 0.25s ease",
                    transitionDelay: delay,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C1440E";
                    e.currentTarget.style.transform = "translate(6px,-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#111";
                    e.currentTarget.style.transform = "translate(0,0)";
                  }}
                >
                  {text}
                </h2>
              ))}
            </div>

            {/* Typewriter */}
            <TypewriterText start={aboutVisible} />

            {/* Stat cards */}
            <div className="grid grid-cols-2 mt-1">
              <div className="bg-[#1a4a2e] px-4 md:px-7 py-5 md:py-6">
                <p className="text-[#a8c5b0] text-[10px] uppercase tracking-widest mb-1">
                  Donation Goal
                </p>
                <p className="text-white text-2xl md:text-3xl font-bold">
                  $55,000
                </p>
              </div>
              <div
                className="bg-[#2d6e47] px-4 md:px-7 py-5 md:py-6 cursor-default"
                style={{
                  opacity: aboutVisible ? 1 : 0,
                  transform: aboutVisible
                    ? "translate(0,0)"
                    : "translate(20px,16px)",
                  transition:
                    "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
                  transitionDelay: "1.1s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(4px,-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0,0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p className="text-[#a8d5b5] text-[10px] uppercase tracking-widest mb-1">
                  Donation Raised
                </p>
                <p className="text-white text-2xl md:text-3xl font-bold">
                  $40,000
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                opacity: aboutVisible ? 1 : 0,
                transform: aboutVisible
                  ? "translate(0,0)"
                  : "translate(-16px,16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "1.25s",
              }}
            >
              <Link
                to="/donate"
                className="inline-block bg-[#E8745A] text-white text-sm font-bold uppercase tracking-widest px-7 md:px-8 py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#d4614a] hover:translate-x-1 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(232,116,90,0.45)]"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          IMPACT / PROGRESS BARS SECTION
      ══════════════════════════════════════ */}
      <div className="bg-[#FAF8F5] w-full py-12 md:py-16 px-5 md:px-10">
        <div
          ref={impactRef}
          className="max-w-[1080px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-12"
        >
          {/* LEFT: PHOTO GRID */}
          <div className="w-full lg:hidden flex gap-3 mb-6">
            {/* Mobile: just 2 photos side by side */}
            <div
              className="rounded-2xl overflow-hidden shadow-md group flex-1"
              style={{ height: 180 }}
            >
              <img
                src="/assets/education-causes-img.jpg"
                alt="Impact"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-md group flex-1"
              style={{ height: 180 }}
            >
              <img
                src="/assets/orphan-causes.jpg"
                alt="Child"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Desktop: full photo grid — hidden on mobile */}
          <div
            className="hidden lg:flex gap-3 flex-shrink-0 bg-yellow-600"
            style={{ width: 500 }}
          >
            {/* LEFT COLUMN */}
            <div
              className="flex flex-col gap-3 flex-shrink-0"
              style={{ width: 250 }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-md group flex-shrink-0"
                style={{ height: 220 }}
              >
                <img
                  src="/assets/education-causes-img.jpg"
                  alt="Impact"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden shadow-md group flex-shrink-0"
                style={{ height: 180 }}
              >
                <img
                  src="/assets/disability-causes-img.jpg"
                  alt="Disability"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 flex-shrink-0"
                style={{ height: 170 }}
              >
                <p className="text-gray-500 text-sm leading-relaxed italic mb-4">
                  "LAFODAP gave my daughter a chance at life. We are forever
                  grateful."
                </p>
                <p className="font-bold text-[#1A1A18] text-sm">Fatima Musa</p>
                <p className="text-gray-400 text-xs">Community Member</p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="flex flex-col gap-3 flex-shrink-0"
              style={{ width: 228 }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-lg group flex-shrink-0"
                style={{ height: 340 }}
              >
                <img
                  src="/assets/orphan-causes.jpg"
                  alt="Child portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden shadow-md group flex-shrink-0"
                style={{ height: 230 }}
              >
                <img
                  src="/assets/empowerment-causes2.jpg"
                  alt="Empowerment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT + BARS */}
          <div className="flex flex-col gap-4 flex-1 w-full">
            {/* gift label */}
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{
                color: "#1E3D2A",
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              OUR FOCUSED IMPACT
            </span>

            {/* heading */}
            <h2
              className="font-extrabold text-[#1A1A18] leading-tight"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                letterSpacing: "-0.02em",
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.1s",
              }}
            >
              Helping Others
              <br />
              Improves World
            </h2>

            {/* subtitle */}
            <p
              className="text-gray-500 text-sm leading-relaxed max-w-sm"
              style={{
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.2s",
              }}
            >
              Ensuring communities have access to life-changing benefits like
              clean water, education, skill training, and disability support.
            </p>

            {/* progress bars */}
            <div className="flex flex-col gap-3 mt-1 w-full">
              {BARS.map((bar, i) => (
                <div
                  key={bar.label}
                  style={{
                    opacity: impactVisible ? 1 : 0,
                    transform: impactVisible
                      ? "translateX(0)"
                      : "translateX(24px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${0.3 + i * 0.08}s`,
                  }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="font-bold transition-all duration-300 cursor-default"
                      style={{
                        fontSize: hoveredBar === i ? "1rem" : "1.15rem",
                        color: hoveredBar === i ? "#1E3D2A" : "#1A1A18",
                      }}
                    >
                      {bar.label}
                    </span>
                    <span
                      className="font-bold tabular-nums transition-all duration-300"
                      style={{
                        fontSize: hoveredBar === i ? "1rem" : "1.15rem",
                        color: hoveredBar === i ? "#1E3D2A" : "#6b7280",
                      }}
                    >
                      {barWidths[i]}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden cursor-pointer"
                    style={{
                      height: hoveredBar === i ? 11 : 8,
                      background: "#e5e7eb",
                      transition: "height 0.25s ease",
                    }}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${barWidths[i]}%`,
                        background:
                          hoveredBar === i
                            ? "linear-gradient(90deg, #1E3D2A, #2d8a52)"
                            : "#1E3D2A",
                        transition:
                          "width 1.4s cubic-bezier(0.22,1,0.36,1), background 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-2"
              style={{
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: "0.85s",
              }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border-2 border-[#1A1A18] text-[#1A1A18] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full no-underline transition-all duration-300 hover:bg-[#1A1A18] hover:text-white hover:shadow-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* featured campaign */}
      <div>

      </div>
    </div>
  );
}

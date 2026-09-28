import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Page, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, useReveal, SCALLOP_ID, ScrollCue, C } from "../components/site.jsx";
import { PROJECTS, getProject } from "./projectsData.js";

/* ─── Parallax + scroll-zoom hero scoped to the project ─── */
function DetailHero({ p }) {
  const [s, setS] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { setS(Math.min(1, window.scrollY / (window.innerHeight || 800))); raf = 0; }); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <header className="relative overflow-hidden" style={{ height: "100vh", minHeight: 580 }}>
      <div className="absolute inset-0" style={{ transform: `scale(${1.12 + s * 0.14}) translateY(${s * 60}px)`, transition: "transform 0.1s linear", willChange: "transform" }}>
        <img src={p.hero || p.img} alt={p.title} className="w-full h-full object-cover" style={{ animation: "lf-kenburns 22s ease-in-out infinite alternate" }} />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,15,28,0.5) 0%, rgba(8,15,28,0.35) 35%, rgba(8,15,28,0.9) 100%)" }} />
      <div className="absolute pointer-events-none" style={{ top: "20%", right: "12%", width: 110, height: 110, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,217,108,0.35), transparent 70%)", filter: "blur(8px)", animation: "lf-float 7s ease-in-out infinite", transform: `translateY(${s * -70}px)` }} />
      <div className="relative z-10 h-full max-w-[1080px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-16" style={{ transform: `translateY(${s * 36}px)`, opacity: 1 - s * 0.5 }}>
        <Reveal y={16} delay={0.05} className="mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white" style={{ background: C.primary }}>{p.cat}</span>
            <span className="inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {p.loc}
            </span>
          </div>
        </Reveal>
        <SplitHeading text={p.title} className="text-white font-black leading-[1.05]" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem,5.5vw,4.2rem)", letterSpacing: "-0.02em", maxWidth: 880 }} color="#fff" />
        <Reveal y={18} delay={0.25}><p className="text-white/75 text-base md:text-lg leading-relaxed mt-5 max-w-2xl">{p.summary}</p></Reveal>
      </div>
      <ScrollCue />
    </header>
  );
}

/* ─── Sticky funding card ─── */
function FundCard({ p }) {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  return (
    <div ref={ref} className="rounded-[1.75rem] bg-white p-7" style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.14)" }}>
      <p className="font-black leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: C.green }}>Help this project grow</p>
      <div className="w-full rounded-full overflow-hidden my-4" style={{ height: 10, background: "#eee" }}>
        <div className="h-full rounded-full" style={{ width: shown ? `${p.pct}%` : 0, background: `linear-gradient(90deg, ${C.primary}, #2BA89A)`, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
      <div className="grid grid-cols-3 gap-2 text-center mb-6">
        {[[`${p.pct}%`, "Funded"], [p.donors, "Donors"], [p.daysLeft, "Days left"]].map(([n, l]) => (
          <div key={l} className="rounded-2xl py-3" style={{ background: C.cream }}>
            <p className="font-black text-[#1A1A18] text-lg leading-none" style={{ fontFamily: "Georgia, serif" }}>{n}</p>
            <p className="text-gray-400 text-[11px] font-semibold mt-1">{l}</p>
          </div>
        ))}
      </div>
      <Btn to="/donate" variant="solid" className="w-full">Support This Project</Btn>
      <button className="w-full mt-3 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5" style={{ border: `2px solid ${C.green}`, color: C.green, background: "transparent" }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
        Share
      </button>
    </div>
  );
}

/* ─── Story + sticky aside ─── */
function Body({ p }) {
  return (
    <section className="w-full py-16 md:py-24 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-[1fr,360px] gap-10 lg:gap-14 items-start">
        <div>
          <Reveal><Eyebrow>The Story</Eyebrow></Reveal>
          <SplitHeading text="Why this project matters" className="font-black text-[#1A1A18] mt-4 mb-6" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.7rem,3.4vw,2.5rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
          {p.story.map((para, i) => (
            <Reveal key={i} y={18} delay={i * 0.08}><p className="text-gray-600 leading-[1.9] mb-5">{para}</p></Reveal>
          ))}

          {/* Outcomes */}
          <Reveal y={24} delay={0.1} className="mt-8">
            <div className="grid grid-cols-3 gap-4 rounded-3xl p-7" style={{ background: C.mint }}>
              {p.outcomes.map(([n, l]) => (
                <div key={l} className="text-center">
                  <p className="font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: C.green }}>{n}</p>
                  <p className="text-[#4a5e42] text-xs font-bold mt-1.5 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <div className="mt-12">
            <Reveal><h3 className="font-extrabold text-[#1A1A18] text-xl mb-5" style={{ fontFamily: "Georgia, serif" }}>From the field</h3></Reveal>
            <div className="grid grid-cols-3 gap-3">
              {p.gallery.map((src, i) => (
                <Reveal key={src} wipe y={0} delay={i * 0.12}>
                  <div className="group overflow-hidden rounded-2xl" style={{ height: 150 }}>
                    <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Updates */}
          {p.updates?.length > 0 && (
            <div className="mt-12">
              <Reveal><h3 className="font-extrabold text-[#1A1A18] text-xl mb-5" style={{ fontFamily: "Georgia, serif" }}>Latest updates</h3></Reveal>
              <div className="relative pl-6">
                <div className="absolute top-1 bottom-1 left-[5px] w-[2px]" style={{ background: "#eee" }} />
                {p.updates.map((u, i) => (
                  <Reveal key={i} y={18} delay={i * 0.1} className="relative mb-6 last:mb-0">
                    <span className="absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white" style={{ background: C.primary, boxShadow: "0 0 0 3px #f3ede6" }} />
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: C.primary }}>{u.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{u.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky aside */}
        <aside className="lg:sticky" style={{ top: 96 }}>
          <FundCard p={p} />
        </aside>
      </div>
    </section>
  );
}

/* ─── Related projects ─── */
function Related({ current }) {
  const others = PROJECTS.filter((p) => p.slug !== current.slug).slice(0, 3);
  return (
    <section className="w-full py-20 md:py-24 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <Reveal><Eyebrow>Keep Going</Eyebrow></Reveal>
            <SplitHeading text="More projects to support" className="font-black text-[#1A1A18] mt-3" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem,3.4vw,2.4rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
          </div>
          <Reveal delay={0.15}><Btn to="/project" variant="outline" className="hidden sm:inline-flex">All Projects</Btn></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <Reveal key={p.slug} y={30} delay={i * 0.12}>
              <Link to={`/project/${p.slug}`} className="group block no-underline rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div className="relative overflow-hidden" style={{ height: 180 }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white" style={{ background: C.primary }}>{p.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-[#1A1A18] leading-snug transition-colors group-hover:text-[#0F766E]" style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mt-2">{p.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <Page>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
        <p className="font-black text-gray-200" style={{ fontFamily: "Georgia, serif", fontSize: "6rem", lineHeight: 1 }}>404</p>
        <h1 className="font-black text-[#1A1A18] text-2xl mt-2 mb-3" style={{ fontFamily: "Georgia, serif" }}>Project not found</h1>
        <p className="text-gray-500 mb-7 max-w-sm">The project you're looking for may have moved or completed. Explore our active work instead.</p>
        <Btn to="/project" variant="solid">Browse All Projects</Btn>
      </div>
    </Page>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;
  return (
    <Page>
      <DetailHero p={p} />
      <Body p={p} />
      <Related current={p} />
    </Page>
  );
}

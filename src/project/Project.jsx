import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Page, PageHero, GlassCTA, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, useReveal, SCALLOP_ID, C } from "../components/site.jsx";
import { PROJECTS, CATS } from "./projectsData.js";

function CircleProgress({ percent }) {
  const r = 26, circ = 2 * Math.PI * r, dash = (percent / 100) * circ;
  return (
    <svg width="68" height="68" viewBox="0 0 68 68">
      <circle cx="34" cy="34" r={r} fill="#fff" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
      <circle cx="34" cy="34" r={r} fill="none" stroke="#fff" strokeWidth="4" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 34 34)" style={{ transition: "stroke-dasharray 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
      <text x="34" y="39" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.green}>{percent}%</text>
    </svg>
  );
}

function ProjectCard({ p, delay }) {
  const [ref, shown] = useReveal({ threshold: 0.15 });
  const [hover, setHover] = useState(false);
  return (
    <div ref={ref} className="bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{ opacity: shown ? 1 : 0, transform: shown ? (hover ? "translateY(-8px)" : "translateY(0)") : "translateY(34px)", boxShadow: hover ? "0 24px 56px rgba(0,0,0,0.14)" : "0 4px 24px rgba(0,0,0,0.07)", transition: "opacity 0.7s ease, transform 0.4s ease, box-shadow 0.4s ease", transitionDelay: shown ? "0s" : delay }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="relative flex-shrink-0" style={{ height: 230 }}>
        <div className="w-full h-full" style={{ clipPath: `url(#${SCALLOP_ID})`, WebkitClipPath: `url(#${SCALLOP_ID})` }}>
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" style={{ transform: hover ? "scale(1.08)" : "scale(1)", transition: "transform 0.7s ease" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35))" }} />
        </div>
        <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white z-20" style={{ background: C.primary }}>{p.cat}</span>
        <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ bottom: -2 }}>
          <div className="rounded-full flex items-center justify-center" style={{ width: 68, height: 68, background: C.green, padding: 4 }}><CircleProgress percent={p.pct} /></div>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col gap-2.5 flex-1" style={{ paddingTop: 44 }}>
        <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: C.primary }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
          {p.loc}
        </div>
        <Link to={`/project/${p.slug}`} className="no-underline"><h3 className="font-extrabold text-[#1A1A18] leading-snug transition-colors hover:text-[#0F766E]" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem" }}>{p.title}</h3></Link>
        <p className="text-gray-400 text-xs leading-relaxed flex-1">{p.desc}</p>
        <div className="w-full rounded-full overflow-hidden mt-1" style={{ height: 6, background: "#eee" }}><div className="h-full rounded-full" style={{ width: shown ? `${p.pct}%` : 0, background: `linear-gradient(90deg, ${C.green}, #2d8a52)`, transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)" }} /></div>
        <Link to={`/project/${p.slug}`} className="flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-widest py-3 rounded-full no-underline mt-1 transition-all duration-300 hover:-translate-y-0.5" style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.primaryDark})` }}>
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}

function Featured() {
  const [ref, p] = useScrollProgress();
  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ background: C.green }}>
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow color={C.lime}>Featured Project</Eyebrow>
          <SplitHeading text="The Ikorodu Rally" className="font-black text-white mt-4 mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.8vw,2.8rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
          <Reveal y={20} delay={0.1}><p className="text-white/70 leading-[1.85] mb-4">In partnership with local government, we delivered services to orphans, persons with disabilities, youth and mothers. We gave out 10 wheelchairs, food supplies and free eye and health screenings to 80 residents.</p></Reveal>
          <Reveal y={20} delay={0.2}><p className="text-white/70 leading-[1.85] mb-7">We empowered local businesses with grants and gave sewing machines and tools to young people and mothers so they could start earning.</p></Reveal>
          <Reveal y={20} delay={0.3} className="grid grid-cols-3 gap-4 mb-8">
            {[["10", "Wheelchairs"], ["80", "Screenings"], ["5", "Grants"]].map(([n, l]) => (
              <div key={l}><p className="font-black text-2xl md:text-3xl" style={{ color: C.lime, fontFamily: "Georgia, serif" }}>{n}</p><p className="text-white/55 text-xs font-semibold mt-1">{l}</p></div>
            ))}
          </Reveal>
          <Reveal y={20} delay={0.4}><Btn to="/donate" variant="lime">Fund The Next Rally</Btn></Reveal>
        </div>
        <div className="relative" style={{ height: "clamp(380px,48vw,540px)" }}>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ top: 0, right: 0, width: "78%", height: "62%", zIndex: 2, transform: `translateY(${(p - 0.5) * -46}px)` }}>
            <img src="/assets/disability-causes-img.jpg" alt="" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.1})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ bottom: 0, left: 0, width: "60%", height: "52%", zIndex: 3, border: "6px solid #fff", transform: `translateY(${(p - 0.5) * 54}px)` }}>
            <img src="/assets/eye-exam-slitlamp.jpg" alt="" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.12})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-2xl overflow-hidden shadow-xl" style={{ top: "30%", left: "-4%", width: "34%", height: "30%", zIndex: 4, border: "4px solid #fff", transform: `translateY(${(p - 0.5) * 30}px)` }}>
            <img src="/assets/tailor-portrait.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectGrid() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-10">
          <Reveal><Eyebrow center>Where We Work</Eyebrow></Reveal>
          <SplitHeading text="Current projects" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2.5 mb-12">
          {CATS.map((c) => (
            <button key={c} onClick={() => setActive(c)} className="text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300"
              style={{ background: active === c ? C.green : "#f1efe9", color: active === c ? "#fff" : "#666", boxShadow: active === c ? "0 8px 20px rgba(30,61,42,0.3)" : "none" }}>{c}</button>
          ))}
        </Reveal>
        <div key={active} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {list.map((p, i) => <ProjectCard key={p.title} p={p} delay={`${(i % 3) * 0.12}s`} />)}
        </div>
      </div>
    </section>
  );
}

function ImpactBand() {
  const S = [{ n: 4, s: "", l: "Communities Served" }, { n: 7, s: "", l: "Live Projects" }, { n: 350, s: "", l: "Lives Touched" }, { n: 78, s: "%", l: "Funds To Field" }];
  return (
    <section className="w-full py-16 md:py-20 px-5 md:px-10" style={{ background: C.mint }}>
      <div className="max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {S.map((x, i) => (
          <Reveal key={x.l} y={26} delay={i * 0.1}>
            <p className="font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem,5vw,3.4rem)", color: C.green }}><CountUp target={x.n} suffix={x.s} display={x.d} /></p>
            <p className="text-[#4a5e42] font-bold text-sm mt-2">{x.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <GlassCTA image="/assets/hero-mobility.jpg" title="Help us fund the next project" text="Fund a programme, sponsor a child, or volunteer your time with our team."
      actions={<><Btn to="/donate" variant="solid">Fund A Project</Btn><Btn to="/volunteer" variant="ghost">Volunteer</Btn></>} />
  );
}

export default function Project() {
  return (
    <Page>
      <PageHero image="/assets/hero-outreach.jpg" title="Projects that rebuild futures." sub="School fees, eye checks, wheelchairs, solar lanterns and skills training. Here is what we are working on now.">
        <div className="flex flex-wrap gap-4 justify-center"><Btn to="/donate" variant="solid">Fund A Project</Btn><Btn href="#projects" variant="ghost">Browse Projects</Btn></div>
      </PageHero>
      <Featured />
      <div id="projects"><ProjectGrid /></div>
      <ImpactBand />
      <CTA />
    </Page>
  );
}

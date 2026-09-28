import React, { useState } from "react";
import { Page, PageHero, GlassCTA, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, C } from "../components/site.jsx";

const VALUES = [
  { icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z", title: "Dignity First", desc: "We meet every person with respect, never charity that diminishes." , color: C.primary },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Sustainability", desc: "We build skills and systems that outlast our presence.", color: C.green },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", title: "Community-Led", desc: "Programs are designed with communities, not merely for them.", color: C.lime },
  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3", title: "Accountability", desc: "Every naira is tracked, reported, and tied to real outcomes.", color: C.primary },
];

const TIMELINE = [
  { year: "2014", title: "A kitchen-table beginning", desc: "Founded by a handful of volunteers feeding orphans in Ikorodu, Lagos State.", img: "/assets/about-lafodap.jpg" },
  { year: "2017", title: "First skills academy", desc: "Launched vocational training in tailoring, carpentry and digital skills.", img: "/assets/tailor-portrait.jpg" },
  { year: "2020", title: "Disability inclusion", desc: "Gave out our first 5 wheelchairs and made our learning space accessible.", img: "/assets/disability-causes-img.jpg" },
  { year: "2023", title: "First solar lanterns", desc: "Began giving solar lanterns to off-grid homes, starting with 5 families.", img: "/assets/solar-lantern.jpg" },
  { year: "2026", title: "A growing community", desc: "Now supporting around 120 families with a small circle of partners and donors.", img: "/assets/women-group.jpg" },
];

const TEAM = [
  { name: "Omotayo Olufolahan", role: "Vice President", img: "/assets/team-omotayo.jpg" },
  { name: "Enyile Osanmohebele", role: "Treasurer", img: "/assets/team-enyile.jpg" },
  { name: "Ihegboro Chibuzor", role: "General Secretary", img: "/assets/team-ihegboro.jpg" },
  { name: "Diallo Oyede", role: "Secretary", img: "/assets/team-diallo.jpg" },
];

/* Layered, parallax mission scene */
function MissionScene() {
  const [ref, p] = useScrollProgress();
  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ background: C.cream }}>
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Layered foreground/background images */}
        <div className="relative" style={{ height: "clamp(360px,46vw,520px)" }}>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ top: 0, left: 0, width: "70%", height: "72%", zIndex: 2, transform: `translateY(${(p - 0.5) * -50}px)` }}>
            <img src="/assets/kids-playing.jpg" alt="Children celebrating" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.12})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ bottom: 0, right: 0, width: "58%", height: "60%", zIndex: 3, border: "6px solid #fff", transform: `translateY(${(p - 0.5) * 60}px)` }}>
            <img src="/assets/education-causes-img.jpg" alt="Learning" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.1})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute -z-0 rounded-full" style={{ top: "10%", right: "6%", width: 140, height: 140, background: "radial-gradient(circle, rgba(168,217,108,0.5), transparent 70%)", filter: "blur(10px)", transform: `translateY(${(p - 0.5) * -80}px)` }} />
          <div className="absolute flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl" style={{ bottom: "6%", left: "-2%", zIndex: 5, transform: `translateY(${(p - 0.5) * 40}px)` }}>
            <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: C.primary }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </span>
            <div><p className="font-black text-[#1A1A18] text-lg leading-none" style={{ fontFamily: "Georgia, serif" }}>12 Years</p><p className="text-gray-400 text-xs font-semibold">of service</p></div>
          </div>
        </div>

        <div>
          <Eyebrow>Our Story</Eyebrow>
          <SplitHeading text="We exist to turn hardship into hope." className="font-black text-[#111] mt-4 mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.18, letterSpacing: "-0.02em" }} color="#111" />
          <Reveal y={20} delay={0.1}><p className="text-gray-500 leading-[1.85] mb-4">At LAFODAP Nigeria we believe everyone deserves a fair chance, whatever their circumstances. We empower orphans, vulnerable families, persons with disabilities, and those facing hardship with the support, education and resources to rebuild their futures.</p></Reveal>
          <Reveal y={20} delay={0.2}><p className="text-gray-500 leading-[1.85] mb-7">We pair short-term help with training and follow-up, so families can keep going on their own.</p></Reveal>
          <Reveal y={20} delay={0.3}><div className="flex flex-wrap gap-3"><Btn to="/project" variant="solid">Our Work</Btn><Btn to="/volunteer" variant="outline">Join Us</Btn></div></Reveal>
        </div>
      </div>
    </section>
  );
}

const GUIDES = [
  {
    tag: "Mission",
    img: "/assets/cta-school.jpg",
    statement: "To give vulnerable people the support, education and skills to rebuild their own lives.",
    body: "We work alongside orphans, struggling families and persons with disabilities across Nigeria. We meet urgent needs today and build skills that last.",
    points: [
      ["Education", "Keeping children learning, from school fees to after-school lessons."],
      ["Livelihoods", "Training and starter kits that turn skills into steady income."],
      ["Care & access", "Wheelchairs, eye checks and basic care for those left out."],
    ],
  },
  {
    tag: "Vision",
    img: "/assets/hero-donate.jpg",
    statement: "A Nigeria where no one's potential is abandoned.",
    body: "We picture communities where hardship is a season, not a sentence, and where every person has a fair chance to thrive.",
    points: [
      ["Every child", "In school, fed, and cared for."],
      ["Every disability", "Met with access instead of barriers."],
      ["Every family", "Able to stand on its own feet."],
    ],
  },
  {
    tag: "Approach",
    img: "/assets/tailoring-women.jpg",
    statement: "Empower, don't just relieve.",
    body: "Relief meets today's need; skills and follow-up make sure the change lasts after we step back.",
    points: [
      ["Listen first", "Programmes are shaped with the community, not just for it."],
      ["Relief + skills", "Immediate help paired with training and mentoring."],
      ["Follow up", "We check in, measure results and report openly."],
    ],
  },
];

function VisionMission() {
  const [active, setActive] = useState(0);
  const g = GUIDES[active];
  const onKey = (e) => {
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % GUIDES.length);
    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + GUIDES.length) % GUIDES.length);
  };
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 px-5 md:px-10" style={{ background: C.green }}>
      {/* Blurred copy of the active photo fills the section and crossfades with the tabs */}
      {GUIDES.map((item, i) => (
        <img key={item.tag} src={item.img} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: i === active ? 1 : 0, transform: "scale(1.15)", filter: "blur(6px) saturate(115%)", transition: "opacity 0.9s ease" }} />
      ))}
      <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(8,15,28,0.72) 0%, rgba(30,61,42,0.62) 55%, rgba(8,15,28,0.7) 100%)" }} />
      <div className="relative max-w-[1080px] mx-auto grid lg:grid-cols-[5fr,6fr] gap-10 lg:gap-16 items-center">
        {/* Photo panel: crossfades with the active tab */}
        <Reveal wipe y={0} className="order-2 lg:order-1">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ height: "clamp(320px,42vw,520px)" }}>
            {GUIDES.map((item, i) => (
              <img key={item.tag} src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.06)", transition: "opacity 0.7s ease, transform 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
            ))}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,15,28,0.75) 0%, transparent 55%)" }} />
            <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
              <span className="font-black text-white/90 leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem,6vw,4.5rem)" }}>0{active + 1}</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full" style={{ background: C.lime, color: C.green }}>{g.tag}</span>
            </div>
          </div>
        </Reveal>

        {/* Tabs + content */}
        <div className="order-1 lg:order-2">
          <Reveal><Eyebrow color={C.lime}>What Drives Us</Eyebrow></Reveal>
          <Reveal y={16} delay={0.1}>
            <div role="tablist" aria-label="Mission, vision and approach" onKeyDown={onKey} className="inline-flex p-1.5 rounded-full mt-6 mb-8" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
              {GUIDES.map((item, i) => (
                <button key={item.tag} role="tab" aria-selected={i === active} tabIndex={i === active ? 0 : -1} onClick={() => setActive(i)}
                  className="text-xs sm:text-sm font-bold uppercase tracking-widest px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300"
                  style={{ background: i === active ? C.lime : "transparent", color: i === active ? C.green : "rgba(255,255,255,0.7)" }}>
                  {item.tag}
                </button>
              ))}
            </div>
          </Reveal>

          <div key={g.tag} role="tabpanel" aria-label={g.tag} className="lg:min-h-[560px]" style={{ animation: "lf-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>
            <h2 className="font-black text-white leading-[1.15] mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.7rem,3.4vw,2.6rem)", letterSpacing: "-0.02em" }}>{g.statement}</h2>
            <p className="text-white/85 leading-[1.85] mb-8 max-w-xl">{g.body}</p>
            <ul className="list-none flex flex-col gap-3">
              {g.points.map(([t, d], i) => (
                <li key={t} className="flex items-start gap-4 rounded-2xl px-5 py-4" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", animation: `lf-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both` }}>
                  <span className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: C.lime }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <div>
                    <p className="text-white font-extrabold text-[0.95rem]" style={{ fontFamily: "Georgia, serif" }}>{t}</p>
                    <p className="text-white/80 text-sm leading-relaxed mt-0.5">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <Reveal><Eyebrow center>What Guides Us</Eyebrow></Reveal>
          <SplitHeading text="Values that shape every decision" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} y={34} delay={i * 0.1} className="h-full">
              <div className="group rounded-3xl p-7 h-full border transition-all duration-500 hover:-translate-y-2" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 22px rgba(0,0,0,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 22px 50px rgba(0,0,0,0.1)")} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 22px rgba(0,0,0,0.05)")}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `${v.color}1a` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon} /></svg>
                </div>
                <h3 className="font-extrabold text-[#1A1A18] text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [ref, p] = useScrollProgress();
  return (
    <section ref={ref} className="relative w-full py-20 md:py-28 px-5 md:px-10 overflow-hidden" style={{ background: C.green }}>
      <img src="/assets/hero-light.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ transform: `scale(1.15) translateY(${(p - 0.5) * 60}px)`, filter: "blur(2px)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,15,28,0.75) 0%, rgba(30,61,42,0.72) 50%, rgba(8,15,28,0.8) 100%)" }} />
      <div className="relative max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <Reveal><Eyebrow center color={C.lime}>Our Journey</Eyebrow></Reveal>
          <SplitHeading text="How we got here" className="font-black text-white mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
        </div>
        <div className="relative">
          {/* Track, plus a lime line that fills as the section scrolls past */}
          <div className="absolute top-0 bottom-0 left-[18px] md:left-1/2 md:-translate-x-1/2 w-[2px]" style={{ background: "rgba(255,255,255,0.18)" }} />
          <div className="absolute top-0 left-[18px] md:left-1/2 md:-translate-x-1/2 w-[2px] origin-top" style={{ height: "100%", background: C.lime, transform: `scaleY(${Math.min(1, Math.max(0, (p - 0.15) * 1.6))})` }} />
          {TIMELINE.map((t, i) => {
            const right = i % 2 === 1;
            return (
              <div key={t.year} className="relative pl-12 md:pl-0 mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-14 items-center">
                <div className="absolute top-8 left-[10px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10" style={{ background: C.lime, borderColor: C.green, boxShadow: `0 0 0 6px rgba(168,217,108,0.18)` }} />
                {/* Photo sits on the opposite side from the card on desktop */}
                <Reveal wipe y={0} delay={0.05} className={`hidden md:block ${right ? "md:order-1" : "md:order-2"}`}>
                  <div className="group overflow-hidden rounded-3xl" style={{ height: 210, boxShadow: "0 20px 50px rgba(0,0,0,0.35)" }}>
                    <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </Reveal>
                <Reveal x={right ? 30 : -30} y={0} className={right ? "md:order-2" : "md:order-1"}>
                  <div className={`rounded-3xl overflow-hidden ${right ? "" : "md:text-right"}`} style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(8,20,16,0.4))", border: "1px solid rgba(255,255,255,0.26)", backdropFilter: "blur(18px) saturate(140%)", WebkitBackdropFilter: "blur(18px) saturate(140%)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                    <img src={t.img} alt={t.title} className="md:hidden w-full h-40 object-cover" />
                    <div className="p-6 md:p-7">
                      <span className="inline-block font-black leading-none mb-3" style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", color: C.lime }}>{t.year}</span>
                      <h3 className="text-white font-extrabold text-lg mb-1.5" style={{ fontFamily: "Georgia, serif" }}>{t.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const S = [{ n: 120, s: "", l: "Families Reached" }, { n: 45, s: "", l: "Students Mentored" }, { n: 20, s: "", l: "Homes Lit" }, { n: 7, s: "", l: "Active Programmes" }];
  return (
    <section className="w-full py-16 md:py-20 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto rounded-3xl px-6 md:px-10 py-12" style={{ background: C.cream, boxShadow: "0 4px 32px rgba(0,0,0,0.05)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {S.map((x, i) => (
            <Reveal key={x.l} y={26} delay={i * 0.1}>
              <p className="font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem,5vw,3.6rem)", color: C.green }}><CountUp target={x.n} suffix={x.s} display={x.d} /></p>
              <p className="text-gray-500 font-bold text-sm mt-2">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><Eyebrow>The People</Eyebrow></Reveal>
            <SplitHeading text="Meet the hearts behind the mission" className="font-black text-[#1A1A18] mt-4 max-w-xl" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
          </div>
          <Reveal delay={0.2}><Btn to="/volunteer" variant="dark">Join The Team</Btn></Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} y={34} delay={i * 0.1}>
              <div className="group rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div className="overflow-hidden" style={{ aspectRatio: "4 / 5", background: C.mint }}>
                  <img src={m.img} alt={`${m.name}, ${m.role}`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-[#1A1A18] text-base" style={{ fontFamily: "Georgia, serif" }}>{m.name}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: C.primary }}>{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <GlassCTA image="/assets/cta-training.jpg" title="Help us do more next year" text="Your support keeps a child in school, a family earning and a wheelchair on the road."
      actions={<><Btn to="/donate" variant="solid">Support Our Work</Btn><Btn to="/contact" variant="ghost">Talk To Us</Btn></>} />
  );
}

export default function About() {
  return (
    <Page>
      <PageHero image="/assets/hero-about.jpg" title="Restoring dignity, one life at a time." sub="Since 2014 we have worked alongside orphans, persons with disabilities and families in hardship across Nigeria." >
        <div className="flex flex-wrap gap-4 justify-center"><Btn to="/project" variant="solid">See Our Impact</Btn><Btn to="/donate" variant="ghost">Support Us</Btn></div>
      </PageHero>
      <MissionScene />
      <VisionMission />
      <Values />
      <Timeline />
      <Stats />
      <Team />
      <CTA />
    </Page>
  );
}

import React from "react";
import { Page, PageHero, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, C } from "../components/site.jsx";

const VALUES = [
  { icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z", title: "Dignity First", desc: "We meet every person with respect, never charity that diminishes." , color: C.coral },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Sustainability", desc: "We build skills and systems that outlast our presence.", color: C.green },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", title: "Community-Led", desc: "Programs are designed with communities, not merely for them.", color: C.lime },
  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3", title: "Accountability", desc: "Every naira is tracked, reported, and tied to real outcomes.", color: C.coral },
];

const TIMELINE = [
  { year: "2014", title: "A kitchen-table beginning", desc: "Founded by a handful of volunteers feeding orphans in Ikorodu, Lagos." },
  { year: "2017", title: "First skills academy", desc: "Launched vocational training in tailoring, carpentry and digital skills." },
  { year: "2020", title: "Disability inclusion", desc: "Distributed 100+ wheelchairs and built accessible learning spaces." },
  { year: "2023", title: "Scaling clean energy", desc: "Solar lighting reached 120 off-grid villages across the region." },
  { year: "2026", title: "A movement of thousands", desc: "Now serving 3,000+ families with a network of partners and donors." },
];

const TEAM = [
  { name: "Adaeze Obi", role: "Founder & Director", img: "/assets/about-lafodap.jpg" },
  { name: "Emeka Okafor", role: "Head of Programs", img: "/assets/empowerment-causes.jpg" },
  { name: "Ngozi Adeyemi", role: "Community Lead", img: "/assets/empowerment-causes2.jpg" },
  { name: "Tunde Bello", role: "Partnerships", img: "/assets/clean-energy.jpeg" },
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
            <img src="/assets/orphan-causes.jpg" alt="Child smiling" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.12})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ bottom: 0, right: 0, width: "58%", height: "60%", zIndex: 3, border: "6px solid #fff", transform: `translateY(${(p - 0.5) * 60}px)` }}>
            <img src="/assets/education-causes-img.jpg" alt="Learning" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.1})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute -z-0 rounded-full" style={{ top: "10%", right: "6%", width: 140, height: 140, background: "radial-gradient(circle, rgba(168,217,108,0.5), transparent 70%)", filter: "blur(10px)", transform: `translateY(${(p - 0.5) * -80}px)` }} />
          <div className="absolute flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl" style={{ bottom: "6%", left: "-2%", zIndex: 5, transform: `translateY(${(p - 0.5) * 40}px)` }}>
            <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: C.coral }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </span>
            <div><p className="font-black text-[#1A1A18] text-lg leading-none" style={{ fontFamily: "Georgia, serif" }}>12 Years</p><p className="text-gray-400 text-xs font-semibold">of service</p></div>
          </div>
        </div>

        <div>
          <Eyebrow>Our Mission</Eyebrow>
          <SplitHeading text="We exist to turn hardship into hope." className="font-black text-[#111] mt-4 mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.18, letterSpacing: "-0.02em" }} color="#111" />
          <Reveal y={20} delay={0.1}><p className="text-gray-500 leading-[1.85] mb-4">At LAFODAP, we believe every person — regardless of circumstance — deserves the chance to thrive. We empower orphans, vulnerable families, persons with disabilities, and those facing hardship with the support, education and resources to rebuild their futures.</p></Reveal>
          <Reveal y={20} delay={0.2}><p className="text-gray-500 leading-[1.85] mb-7">Through every program we create a ripple effect of transformation, offering the tools for self-sufficiency, advocacy and lasting dignity.</p></Reveal>
          <Reveal y={20} delay={0.3}><div className="flex flex-wrap gap-3"><Btn to="/project" variant="solid">Our Work</Btn><Btn to="/volunteer" variant="outline">Join Us</Btn></div></Reveal>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const cards = [
    { tag: "Vision", title: "A world without abandoned potential", body: "Where every orphan is educated, every disability is met with access, and every displaced family finds a path back to stability.", bg: C.green, fg: "#fff", accent: C.lime },
    { tag: "Approach", title: "Empower, don't enable", body: "We pair immediate relief with long-term skills, mentorship and advocacy — so support becomes self-sufficiency.", bg: "#fff", fg: C.ink, accent: C.coral },
  ];
  return (
    <section className="w-full py-20 md:py-24 px-5 md:px-10" style={{ background: C.mint }}>
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <Reveal key={c.tag} y={36} delay={i * 0.12} className="h-full">
            <div className="rounded-3xl p-9 md:p-11 h-full flex flex-col transition-all duration-500 hover:-translate-y-2" style={{ background: c.bg, color: c.fg, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: c.accent }}>
                <span className="w-6 h-[2px] rounded-full" style={{ background: c.accent }} />{c.tag}
              </span>
              <h3 className="font-black leading-snug mb-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem,2.6vw,1.9rem)" }}>{c.title}</h3>
              <p className="leading-relaxed opacity-80 text-[0.95rem]">{c.body}</p>
            </div>
          </Reveal>
        ))}
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
  return (
    <section className="relative w-full py-20 md:py-28 px-5 md:px-10 overflow-hidden" style={{ background: C.green }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(/assets/african-map.png)", backgroundSize: "min(60vw,640px)", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.06, filter: "brightness(0) invert(1)" }} />
      <div className="relative max-w-[840px] mx-auto">
        <div className="text-center mb-16">
          <Reveal><Eyebrow center color={C.lime}>Our Journey</Eyebrow></Reveal>
          <SplitHeading text="From a kitchen table to a movement" className="font-black text-white mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[18px] md:left-1/2 md:-translate-x-1/2 w-[2px]" style={{ background: "rgba(255,255,255,0.15)" }} />
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} y={30} delay={0.05} x={0} className="relative pl-12 md:pl-0 mb-10 last:mb-0">
              <div className={`md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"}`}>
                <div className="absolute top-1.5 left-[10px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10" style={{ background: C.lime, borderColor: C.green }} />
                <span className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2" style={{ background: "rgba(168,217,108,0.15)", color: C.lime }}>{t.year}</span>
                <h3 className="text-white font-extrabold text-lg mb-1" style={{ fontFamily: "Georgia, serif" }}>{t.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const S = [{ n: 3000, s: "+", l: "Families Reached", d: "3k+" }, { n: 900, s: "+", l: "Students Mentored" }, { n: 120, s: "+", l: "Villages Lit" }, { n: 48, s: "", l: "Active Programs" }];
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
                <div className="overflow-hidden" style={{ height: 260 }}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-[#1A1A18] text-base" style={{ fontFamily: "Georgia, serif" }}>{m.name}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: C.coral }}>{m.role}</p>
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
    <section className="relative w-full overflow-hidden" style={{ background: C.night }}>
      <div className="absolute inset-0 opacity-25"><img src="/assets/hero-lafodap6.jpg" alt="" className="w-full h-full object-cover" /></div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(8,15,28,0.95), rgba(8,15,28,0.6))" }} />
      <div className="relative max-w-[1080px] mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
        <SplitHeading text="Be part of the next chapter" className="font-black text-white" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,5vw,3.4rem)", letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
        <Reveal delay={0.2}><p className="text-white/70 max-w-xl mx-auto mt-5 mb-8 leading-relaxed">Your support writes the future of a child, a family, a whole community. Stand with us today.</p></Reveal>
        <Reveal delay={0.35} className="flex flex-wrap gap-4 justify-center"><Btn to="/donate" variant="solid">Donate Now</Btn><Btn to="/contact" variant="ghost">Talk To Us</Btn></Reveal>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Page>
      <PageHero image="/assets/about-lafodap.jpg" crumb="About" eyebrow="Who We Are" title="Restoring dignity, one life at a time." sub="For over a decade, LAFODAP has walked alongside the vulnerable — turning relief into resilience and hope into lasting change." >
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

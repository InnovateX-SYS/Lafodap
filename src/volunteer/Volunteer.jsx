import React, { useState } from "react";
import { Page, PageHero, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, C } from "../components/site.jsx";

const ROLES = [
  { img: "/assets/school-children.jpg", tag: "Education", title: "Teaching & Mentorship", time: "4 to 8 hrs a week", desc: "Tutor children, lead reading circles and mentor teens toward their goals." },
  { img: "/assets/disability-assist.jpg", tag: "Care", title: "Disability Support", time: "Flexible", desc: "Assist with mobility, accessibility workshops and assistive-device fittings." },
  { img: "/assets/women-group.jpg", tag: "Field", title: "Community Outreach", time: "Weekends", desc: "Join rallies, distributions and on-the-ground program delivery." },
  { img: "/assets/tailor-portrait.jpg", tag: "Skills", title: "Vocational Trainer", time: "2 to 6 hrs a week", desc: "Share a trade: tailoring, carpentry, digital or business skills." },
  { img: "/assets/about-lafodap.jpg", tag: "Remote", title: "Design & Media", time: "Remote", desc: "Tell our story through design, photography, writing and social media." },
  { img: "/assets/eye-screening.jpg", tag: "Health", title: "Medical Volunteer", time: "Per campaign", desc: "Support free eye screenings, first aid and health-education days." },
];

const STEPS = [
  { n: "01", title: "Apply", desc: "Tell us about you, your skills and the causes you care about." },
  { n: "02", title: "Connect", desc: "We'll match you to a role and walk you through orientation." },
  { n: "03", title: "Train", desc: "Get equipped with the tools, context and support you need." },
  { n: "04", title: "Serve", desc: "Join the team on outreach days and in weekly sessions." },
];

const PERKS = [
  { icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z", t: "Real Impact", d: "See the direct difference your hours make." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", t: "Community", d: "Join a family of changemakers and friends." },
  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3", t: "New Skills", d: "Grow through training and hands-on work." },
  { icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", t: "Recognition", d: "Certificates and references for your service." },
];

const VOICES = [
  { quote: "I teach reading on Saturday mornings. Some of my pupils could not read a sentence last year, and now they read to me.", name: "Emeka Okafor", role: "Volunteer Teacher" },
  { quote: "I help set up on outreach days. It is hard work, but you see exactly where the help goes.", name: "Sarah Bello", role: "Outreach Volunteer" },
];

function Why() {
  const [ref, p] = useScrollProgress();
  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white">
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative order-2 md:order-1" style={{ height: "clamp(360px,46vw,520px)" }}>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ top: 0, left: 0, width: "66%", height: "70%", zIndex: 2, transform: `translateY(${(p - 0.5) * -44}px)` }}>
            <img src="/assets/medical-outreach.jpg" alt="" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.1})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-3xl overflow-hidden shadow-2xl" style={{ bottom: 0, right: 0, width: "56%", height: "58%", zIndex: 3, border: "6px solid #fff", transform: `translateY(${(p - 0.5) * 54}px)` }}>
            <img src="/assets/classroom-writing.jpg" alt="" className="w-full h-full object-cover" style={{ transform: `scale(${1 + p * 0.12})`, transition: "transform 0.1s linear" }} />
          </div>
          <div className="absolute rounded-2xl bg-white px-5 py-4 shadow-xl flex items-center gap-3" style={{ top: "8%", right: "0%", zIndex: 5, transform: `translateY(${(p - 0.5) * 30}px)` }}>
            <p className="font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", color: C.primary }}><CountUp target={15} /></p>
            <p className="text-gray-400 text-xs font-semibold leading-tight">Active<br />volunteers</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Eyebrow>Why Volunteer</Eyebrow>
          <SplitHeading text="Give your time. Gain a purpose." className="font-black text-[#111] mt-4 mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.18, letterSpacing: "-0.02em" }} color="#111" />
          <Reveal y={18} delay={0.1}><p className="text-gray-500 leading-[1.85] mb-7">You don't need money or experience to help. You just need to show up. Our volunteers are the heartbeat of every program, turning intentions into action across classrooms, clinics and communities.</p></Reveal>
          <div className="grid grid-cols-2 gap-4">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.t} y={20} delay={0.15 + i * 0.08}>
                <div className="flex gap-3">
                  <span className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${C.green}14` }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={perk.icon} /></svg>
                  </span>
                  <div><h4 className="font-extrabold text-[#1A1A18] text-sm" style={{ fontFamily: "Georgia, serif" }}>{perk.t}</h4><p className="text-gray-400 text-xs leading-relaxed mt-0.5">{perk.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <Reveal><Eyebrow center>Find Your Fit</Eyebrow></Reveal>
          <SplitHeading text="Ways you can serve" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} y={34} delay={(i % 3) * 0.12} className="h-full">
              <div className="group rounded-3xl overflow-hidden bg-white h-full flex flex-col transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 24px 54px rgba(0,0,0,0.12)")} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)")}>
                <div className="relative overflow-hidden" style={{ height: 190 }}>
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white" style={{ background: C.primary }}>{r.tag}</span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.92)", color: C.green }}>{r.time}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-[#1A1A18] text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{r.desc}</p>
                  <a href="#apply" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold no-underline transition-all group-hover:gap-2.5" style={{ color: C.primary }}>Apply for this role
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-16">
          <Reveal><Eyebrow center>How It Works</Eyebrow></Reveal>
          <SplitHeading text="From sign-up to service in four steps" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} y={30} delay={i * 0.12} className="h-full">
              <div className="relative rounded-3xl p-7 h-full" style={{ background: C.cream }}>
                <span className="font-black leading-none block mb-4" style={{ fontFamily: "Georgia, serif", fontSize: "2.6rem", color: i % 2 ? C.primary : C.green, opacity: 0.9 }}>{s.n}</span>
                <h3 className="font-extrabold text-[#1A1A18] text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < STEPS.length - 1 && <span className="hidden lg:block absolute top-1/2 -right-3 z-10 text-gray-300"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const [ref, p] = useScrollProgress();
  return (
    <section ref={ref} className="relative w-full overflow-hidden py-20 md:py-28 px-5 md:px-10" style={{ background: C.green }}>
      <img src="/assets/voices-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ transform: `scale(${1.1 + p * 0.08}) translateY(${(p - 0.5) * 36}px)`, transition: "transform 0.1s linear" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,15,28,0.55) 0%, rgba(30,61,42,0.45) 55%, rgba(8,15,28,0.6) 100%)" }} />
      <div className="relative max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <Reveal><Eyebrow center color={C.lime}>Volunteer Voices</Eyebrow></Reveal>
          <SplitHeading text="Why they keep coming back" className="font-black text-white mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} y={30} delay={i * 0.15} className="h-full">
              <div className="rounded-3xl p-8 h-full flex flex-col gap-5" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(8,20,16,0.4))", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(18px) saturate(140%)", WebkitBackdropFilter: "blur(18px) saturate(140%)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                <svg width="40" height="32" viewBox="0 0 36 28" fill="none"><path d="M0 28V17.2C0 12.5 1.07 8.6 3.2 5.4 5.33 2.2 8.67 0.27 13.2 0L14.4 3C11.6 3.53 9.47 4.87 8 7c-1.47 2.13-2.13 4.53-2 7.2H13.2V28H0Zm21.6 0V17.2c0-4.67 1.07-8.6 3.2-11.8C26.93 2.2 30.27 0.27 34.8 0L36 3c-2.8 0.53-4.93 1.87-6.4 4-1.47 2.13-2.13 4.53-2 7.2H34.8V28H21.6Z" fill={C.lime} fillOpacity="0.5" /></svg>
                <p className="text-white leading-relaxed italic flex-1 text-[1.02rem]">"{v.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <span className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ background: C.lime, color: C.green, fontFamily: "Georgia, serif" }} aria-hidden>{v.name.split(" ").map((w) => w[0]).join("")}</span>
                  <div><p className="text-white font-extrabold text-sm" style={{ fontFamily: "Georgia, serif" }}>{v.name}</p><p className="text-white/75 text-xs mt-0.5">{v.role}</p></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState("");
  const field = (name, label, type = "text", area = false) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</label>
      {area ? (
        <textarea rows={4} onFocus={() => setFocus(name)} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm text-[#1A1A18] resize-none transition-all" style={{ background: "#f8f6f2", border: `2px solid ${focus === name ? C.primary : "transparent"}` }} />
      ) : (
        <input type={type} onFocus={() => setFocus(name)} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm text-[#1A1A18] transition-all" style={{ background: "#f8f6f2", border: `2px solid ${focus === name ? C.primary : "transparent"}` }} />
      )}
    </div>
  );
  return (
    <section id="apply" className="w-full py-20 md:py-28 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <Reveal><Eyebrow center>Join Us</Eyebrow></Reveal>
          <SplitHeading text="Ready to make a difference?" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
          <Reveal delay={0.15}><p className="text-gray-500 mt-3">Fill in the form and our team will reach out within 48 hours.</p></Reveal>
        </div>
        <Reveal y={30} delay={0.1}>
          <div className="rounded-[2rem] bg-white p-7 md:p-10" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            {sent ? (
              <div className="text-center py-10" style={{ animation: "lf-pop 0.5s ease both" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: `${C.lime}26`, border: `2px solid ${C.lime}` }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="font-black text-[#1A1A18] text-2xl mb-2" style={{ fontFamily: "Georgia, serif" }}>Thank you!</h3>
                <p className="text-gray-500">Your application is in. Welcome to LAFODAP Nigeria. We will be in touch within 48 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">{field("fn", "First Name")}{field("ln", "Last Name")}</div>
                <div className="grid sm:grid-cols-2 gap-5">{field("em", "Email", "email")}{field("ph", "Phone", "tel")}</div>
                {field("role", "Role of Interest")}
                {field("msg", "Why do you want to volunteer?", "text", true)}
                <button onClick={() => setSent(true)} className="w-full text-white font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, boxShadow: "0 12px 30px rgba(15,118,110,0.4)" }}>
                  Submit Application
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Volunteer() {
  return (
    <Page>
      <PageHero image="/assets/hero-volunteer.jpg" title="Give your time where it counts." sub="Your time, skills and heart can rewrite a story. Join our growing team of volunteers bringing hope to communities across Nigeria.">
        <div className="flex flex-wrap gap-4 justify-center"><Btn href="#apply" variant="solid">Become A Volunteer</Btn><Btn href="#roles" variant="ghost">See Roles</Btn></div>
      </PageHero>
      <Why />
      <div id="roles"><Roles /></div>
      <Steps />
      <Voices />
      <ApplyForm />
    </Page>
  );
}

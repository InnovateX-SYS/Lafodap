import React, { useState } from "react";
import { Page, PageHero, GlassCTA, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, C } from "../components/site.jsx";

const PRESETS = [5000, 10000, 20000, 50000, 100000, 250000];

const IMPACT = {
  5000: "Buys exercise books and pencils for a child for a term.",
  10000: "Pays for reading glasses for two people at an eye screening day.",
  20000: "Provides a solar lantern for a family without power.",
  50000: "Covers a month of school fees and meals for a sponsored child.",
  100000: "Gives a young mother a soap-making starter kit and training.",
  250000: "Helps buy a wheelchair for a person with a disability.",
};

const ALLOCATION = [
  { label: "Programs & Field Work", pct: 78, color: C.green },
  { label: "Community Outreach", pct: 14, color: C.primary },
  { label: "Operations", pct: 8, color: C.lime },
];

const WAYS = [
  { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10", title: "Monthly Giving", desc: "Become a sustaining partner with a recurring gift that powers long-term programs." },
  { icon: "M20 7h-9 M14 17H5 M17 4l3 3-3 3 M7 14l-3 3 3 3", title: "In-Kind Donations", desc: "Donate wheelchairs, books, sewing machines, medical supplies and more." },
  { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", title: "Corporate Match", desc: "Partner your company with our cause and double your team's impact." },
];

function DonateWidget() {
  const [amount, setAmount] = useState(10000);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState("monthly");
  const val = custom ? parseInt(custom, 10) || 0 : amount;
  const impact = IMPACT[amount] && !custom ? IMPACT[amount] : "Every gift helps, whatever the size.";

  return (
    <section id="give" className="relative w-full px-5 md:px-10 -mt-20 z-30 scroll-mt-28">
      <div className="max-w-[920px] mx-auto rounded-[2rem] bg-white p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-10" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.18)" }}>
        <div>
          <Eyebrow>Make A Gift</Eyebrow>
          <h2 className="font-black text-[#1A1A18] mt-3 mb-5 leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem,3vw,2.1rem)" }}>Choose your impact</h2>

          <div className="flex p-1 rounded-full mb-6" style={{ background: "#f1efe9" }}>
            {["once", "monthly"].map((f) => (
              <button key={f} onClick={() => setFreq(f)} className="flex-1 text-sm font-bold uppercase tracking-wider py-3 rounded-full transition-all duration-300"
                style={{ background: freq === f ? C.green : "transparent", color: freq === f ? "#fff" : "#888", boxShadow: freq === f ? "0 6px 16px rgba(30,61,42,0.25)" : "none" }}>
                {f === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {PRESETS.map((a) => {
              const on = !custom && amount === a;
              return (
                <button key={a} onClick={() => { setAmount(a); setCustom(""); }} className="py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-300"
                  style={{ background: on ? C.primary : "#f8f6f2", color: on ? "#fff" : C.ink, border: `2px solid ${on ? C.primary : "transparent"}`, transform: on ? "translateY(-2px)" : "none", boxShadow: on ? "0 10px 24px rgba(15,118,110,0.35)" : "none" }}>
                  ₦{a.toLocaleString()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center rounded-2xl overflow-hidden mb-6" style={{ background: "#f8f6f2", border: `2px solid ${custom ? C.primary : "transparent"}`, transition: "border-color 0.2s" }}>
            <span className="pl-5 pr-2 text-xl font-extrabold text-gray-400">₦</span>
            <input type="number" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Other amount" className="flex-1 bg-transparent outline-none py-4 text-lg font-bold text-[#1A1A18] placeholder-gray-400" style={{ minWidth: 0 }} />
          </div>

          <button className="w-full text-white font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, boxShadow: "0 12px 30px rgba(15,118,110,0.4)" }}>
            Give ₦{val.toLocaleString()}{freq === "monthly" ? " / mo" : ""}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
          <p className="text-center text-gray-400 text-xs font-semibold mt-3 flex items-center justify-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            Secure payment, receipt by email
          </p>
        </div>

        {/* Impact preview panel */}
        <div className="rounded-[1.5rem] p-7 flex flex-col justify-between relative overflow-hidden" style={{ background: C.green }}>
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(168,217,108,0.3), transparent 70%)" }} />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.lime }}>Your Impact</span>
            <p className="text-white font-black mt-3 leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem,2.6vw,1.9rem)" }}>₦{val.toLocaleString()} {freq === "monthly" ? "monthly" : "today"}</p>
            <p className="text-white/75 leading-relaxed mt-4 text-[0.95rem]">{impact}</p>
          </div>
          <div className="relative mt-8 rounded-2xl overflow-hidden" style={{ height: 150 }}>
            <img src="/assets/school-meal.jpg" alt="Impact" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,61,42,0.6), transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Allocation() {
  const [ref, p] = useScrollProgress();
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div ref={ref} className="relative flex items-center justify-center" style={{ minHeight: 320 }}>
          {/* Donut */}
          <svg width="260" height="260" viewBox="0 0 260 260" style={{ transform: `rotate(${-90 + p * 12}deg)` }}>
            {(() => { let acc = 0; const R = 100, CIRC = 2 * Math.PI * R; return ALLOCATION.map((a) => { const dash = (a.pct / 100) * CIRC; const off = -(acc / 100) * CIRC; acc += a.pct; return <circle key={a.label} cx="130" cy="130" r={R} fill="none" stroke={a.color} strokeWidth="40" strokeDasharray={`${dash} ${CIRC}`} strokeDashoffset={off} style={{ transition: "stroke-dasharray 1.4s cubic-bezier(0.22,1,0.36,1)" }} />; }); })()}
          </svg>
          <div className="absolute text-center">
            <p className="font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "2.6rem", color: C.green }}><CountUp target={78} suffix="%" /></p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">To the field</p>
          </div>
        </div>
        <div>
          <Reveal><Eyebrow>Transparency</Eyebrow></Reveal>
          <SplitHeading text="Where your money goes" className="font-black text-[#1A1A18] mt-4 mb-5" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,3.6vw,2.6rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
          <Reveal y={18} delay={0.1}><p className="text-gray-500 leading-relaxed mb-7">We keep running costs low and publish how every naira is spent. Most of each gift goes straight to programmes.</p></Reveal>
          <div className="flex flex-col gap-4">
            {ALLOCATION.map((a, i) => (
              <Reveal key={a.label} y={16} delay={0.15 + i * 0.1}>
                <div className="flex items-center justify-between mb-1.5"><span className="font-bold text-[#1A1A18] text-sm flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: a.color }} />{a.label}</span><span className="font-extrabold" style={{ color: a.color }}>{a.pct}%</span></div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: "#eee" }}><div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.color }} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherWays() {
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-14">
          <Reveal><Eyebrow center>More Ways To Help</Eyebrow></Reveal>
          <SplitHeading text="Other ways to help" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} y={34} delay={i * 0.12} className="h-full">
              <div className="group rounded-3xl p-8 h-full bg-white transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 4px 22px rgba(0,0,0,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 22px 50px rgba(0,0,0,0.1)")} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 22px rgba(0,0,0,0.05)")}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" style={{ background: `${C.primary}1a` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={w.icon} /></svg>
                </div>
                <h3 className="font-extrabold text-[#1A1A18] text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Goal() {
  return (
    <GlassCTA image="/assets/kids-playing.jpg" eyebrow="2026 Campaign" title="Help us reach more families this year"
      text="Every gift, big or small, keeps a classroom open, a family earning and a child cared for."
      actions={<Btn href="#give" variant="lime" onClick={(e) => { e.preventDefault(); document.getElementById("give")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Make A Gift</Btn>} />
  );
}

export default function Donate() {
  return (
    <Page>
      <PageHero image="/assets/hero-donate.jpg" title="Your gift rebuilds a life." sub="Your gift pays for school fees, eye checks, wheelchairs and skills training for families across Nigeria." />
      <DonateWidget />
      <Allocation />
      <OtherWays />
      <Goal />
    </Page>
  );
}

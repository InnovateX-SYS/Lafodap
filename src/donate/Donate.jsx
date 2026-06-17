import React, { useState } from "react";
import { Page, PageHero, Reveal, SplitHeading, Eyebrow, Btn, CountUp, useScrollProgress, C } from "../components/site.jsx";

const PRESETS = [25, 50, 100, 250, 500, 1000];

const IMPACT = {
  25: "Provides school supplies for a child for a full term.",
  50: "Feeds an orphan with nutritious meals for two weeks.",
  100: "Funds a week of vocational training for a young mother.",
  250: "Equips a household with a solar home lighting system.",
  500: "Sponsors a wheelchair and fitting for a person with a disability.",
  1000: "Launches a micro-business with tools, grant and mentorship.",
};

const ALLOCATION = [
  { label: "Programs & Field Work", pct: 78, color: C.green },
  { label: "Community Outreach", pct: 14, color: C.coral },
  { label: "Operations", pct: 8, color: C.lime },
];

const WAYS = [
  { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10", title: "Monthly Giving", desc: "Become a sustaining partner with a recurring gift that powers long-term programs." },
  { icon: "M20 7h-9 M14 17H5 M17 4l3 3-3 3 M7 14l-3 3 3 3", title: "In-Kind Donations", desc: "Donate wheelchairs, books, sewing machines, medical supplies and more." },
  { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", title: "Corporate Match", desc: "Partner your company with our cause and double your team's impact." },
];

function DonateWidget() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState("monthly");
  const val = custom ? parseInt(custom, 10) || 0 : amount;
  const impact = IMPACT[amount] && !custom ? IMPACT[amount] : "Every gift, at any size, creates real and measurable change in a life.";

  return (
    <section className="relative w-full px-5 md:px-10 -mt-20 z-30">
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
                <button key={a} onClick={() => { setAmount(a); setCustom(""); }} className="py-4 rounded-2xl font-extrabold text-lg transition-all duration-300"
                  style={{ background: on ? C.coral : "#f8f6f2", color: on ? "#fff" : C.ink, border: `2px solid ${on ? C.coral : "transparent"}`, transform: on ? "translateY(-2px)" : "none", boxShadow: on ? "0 10px 24px rgba(232,116,90,0.35)" : "none" }}>
                  ${a}
                </button>
              );
            })}
          </div>

          <div className="flex items-center rounded-2xl overflow-hidden mb-6" style={{ background: "#f8f6f2", border: `2px solid ${custom ? C.coral : "transparent"}`, transition: "border-color 0.2s" }}>
            <span className="pl-5 pr-2 text-xl font-extrabold text-gray-400">$</span>
            <input type="number" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Other amount" className="flex-1 bg-transparent outline-none py-4 text-lg font-bold text-[#1A1A18] placeholder-gray-400" style={{ minWidth: 0 }} />
          </div>

          <button className="w-full text-white font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${C.coral}, ${C.coralDark})`, boxShadow: "0 12px 30px rgba(232,116,90,0.4)" }}>
            Donate ${val.toLocaleString()}{freq === "monthly" ? " / mo" : ""}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
          <p className="text-center text-gray-400 text-xs font-semibold mt-3 flex items-center justify-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            Secure, encrypted &amp; tax-deductible
          </p>
        </div>

        {/* Impact preview panel */}
        <div className="rounded-[1.5rem] p-7 flex flex-col justify-between relative overflow-hidden" style={{ background: C.green }}>
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(168,217,108,0.3), transparent 70%)" }} />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.lime }}>Your Impact</span>
            <p className="text-white font-black mt-3 leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem,2.6vw,1.9rem)" }}>${val.toLocaleString()} {freq === "monthly" ? "monthly" : "today"}</p>
            <p className="text-white/75 leading-relaxed mt-4 text-[0.95rem]">{impact}</p>
          </div>
          <div className="relative mt-8 rounded-2xl overflow-hidden" style={{ height: 150 }}>
            <img src="/assets/orphan-causes.jpg" alt="Impact" className="w-full h-full object-cover" />
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
          <Reveal y={18} delay={0.1}><p className="text-gray-500 leading-relaxed mb-7">We hold ourselves to radical accountability. The overwhelming majority of every gift reaches programs and the people they serve — and we publish the breakdown openly.</p></Reveal>
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
          <SplitHeading text="Generosity comes in many forms" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} y={34} delay={i * 0.12} className="h-full">
              <div className="group rounded-3xl p-8 h-full bg-white transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 4px 22px rgba(0,0,0,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 22px 50px rgba(0,0,0,0.1)")} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 22px rgba(0,0,0,0.05)")}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" style={{ background: `${C.coral}1a` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={w.icon} /></svg>
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
    <section className="relative w-full overflow-hidden" style={{ background: C.green }}>
      <div className="absolute inset-0 opacity-10"><img src="/assets/african-map.png" alt="" className="w-full h-full object-contain" style={{ filter: "brightness(0) invert(1)" }} /></div>
      <div className="relative max-w-[840px] mx-auto px-5 md:px-10 py-20 md:py-24 text-center">
        <Reveal><Eyebrow center color={C.lime}>2026 Campaign</Eyebrow></Reveal>
        <SplitHeading text="Help us reach $55,000 this year" className="font-black text-white mt-4 mb-8" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4.5vw,3rem)", letterSpacing: "-0.02em" }} color="#fff" hoverColor={C.lime} />
        <Reveal y={20} delay={0.1}>
          <div className="rounded-full overflow-hidden mb-3" style={{ height: 16, background: "rgba(255,255,255,0.15)" }}>
            <div className="h-full rounded-full flex items-center justify-end pr-2" style={{ width: "73%", background: `linear-gradient(90deg, ${C.lime}, #cdee9c)` }} />
          </div>
          <div className="flex justify-between text-white/80 font-bold text-sm"><span>$40,000 raised</span><span>73% of goal</span></div>
        </Reveal>
        <Reveal delay={0.25} className="mt-9"><Btn href="#top" to="/donate" variant="lime">Donate Now</Btn></Reveal>
      </div>
    </section>
  );
}

export default function Donate() {
  return (
    <Page>
      <PageHero image="/assets/hero-lafodap9.jpg" height="70vh" crumb="Donate" eyebrow="Give Hope" title="Your gift rebuilds a life." sub="A small act of generosity ripples into education, healthcare, dignity and independence for those who need it most." />
      <DonateWidget />
      <Allocation />
      <OtherWays />
      <Goal />
    </Page>
  );
}

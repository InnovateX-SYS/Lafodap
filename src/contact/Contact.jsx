import React, { useState } from "react";
import { Page, PageHero, Reveal, SplitHeading, Eyebrow, Btn, OFFICES, PHONES, EMAILS, C } from "../components/site.jsx";

const INFO = [
  { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z|circle:12,10,3", title: "Visit Us", lines: OFFICES.map(([k, v]) => `${k}: ${v}`), color: C.primary },
  { icon: "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z", title: "Call Us", lines: PHONES, href: (n) => `tel:${n.replace(/\s/g, "")}`, color: C.green },
  { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|poly:22,6 12,13 2,6", title: "Email Us", lines: EMAILS, href: (m) => `mailto:${m}`, color: C.lime },
];

const FAQ = [
  { q: "How is my donation used?", a: "78% of every gift goes straight to our programmes. We share a breakdown of spending in our yearly report." },
  { q: "Will I get a receipt?", a: "Yes. We email a receipt for every gift, and you can ask us for a summary of your giving at any time." },
  { q: "Can I volunteer remotely?", a: "Absolutely. We have remote roles in design, media, writing and mentorship. Visit our Volunteer page to find a role that fits your schedule." },
  { q: "How do I partner as an organisation?", a: "We welcome partnerships with companies and other charities. Email info@lafodapnigeria.net or use the form here and our team will design a collaboration with you." },
];

function renderIcon(spec, color) {
  const [path, extra] = spec.split("|");
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
      {extra?.startsWith("circle") && (() => { const [, c] = extra.split(":"); const [cx, cy, r] = c.split(","); return <circle cx={cx} cy={cy} r={r} />; })()}
      {extra?.startsWith("poly") && (() => { const [, pts] = extra.split(":"); return <polyline points={pts} />; })()}
    </svg>
  );
}

function InfoCards() {
  return (
    <section className="relative w-full px-5 md:px-10 -mt-20 z-30">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-5">
        {INFO.map((c, i) => (
          <Reveal key={c.title} y={30} delay={i * 0.12} className="h-full">
            <div className="group rounded-3xl bg-white p-8 h-full transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `${c.color}1a` }}>{renderIcon(c.icon, c.color)}</div>
              <h3 className="font-extrabold text-[#1A1A18] text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{c.title}</h3>
              {c.lines.map((l) => {
                const [k, v] = l.includes(": ") ? l.split(": ") : [null, l];
                return c.href
                  ? <a key={l} href={c.href(l)} className="block text-gray-500 text-sm leading-relaxed no-underline hover:text-[#0F766E] transition-colors break-all">{l}</a>
                  : <p key={l} className="text-gray-500 text-sm leading-relaxed mb-3 last:mb-0">{k && <span className="block text-[#1A1A18] font-bold">{k}</span>}{v}</p>;
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FormAndMap() {
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState("");
  const inputStyle = (name) => ({ background: "#f8f6f2", border: `2px solid ${focus === name ? C.primary : "transparent"}` });
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Form */}
        <Reveal x={-30} y={0}>
          <div className="rounded-[2rem] bg-white p-7 md:p-10 h-full" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <Eyebrow>Send A Message</Eyebrow>
            <h2 className="font-black text-[#1A1A18] mt-3 mb-7 leading-tight" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>We'd love to hear from you</h2>
            {sent ? (
              <div className="text-center py-12" style={{ animation: "lf-pop 0.5s ease both" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: `${C.lime}26`, border: `2px solid ${C.lime}` }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="font-black text-[#1A1A18] text-2xl mb-2" style={{ fontFamily: "Georgia, serif" }}>Message sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. Our team will reply within 48 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label><input onFocus={() => setFocus("n")} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm transition-all" style={inputStyle("n")} /></div>
                  <div className="flex flex-col gap-1.5"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label><input type="email" onFocus={() => setFocus("e")} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm transition-all" style={inputStyle("e")} /></div>
                </div>
                <div className="flex flex-col gap-1.5"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label><input onFocus={() => setFocus("s")} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm transition-all" style={inputStyle("s")} /></div>
                <div className="flex flex-col gap-1.5"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label><textarea rows={5} onFocus={() => setFocus("m")} onBlur={() => setFocus("")} className="rounded-2xl px-4 py-3 outline-none text-sm resize-none transition-all" style={inputStyle("m")} /></div>
                <button onClick={() => setSent(true)} className="w-full text-white font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, boxShadow: "0 12px 30px rgba(15,118,110,0.4)" }}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* Map / location panel */}
        <Reveal x={30} y={0} delay={0.1}>
          <div className="rounded-[2rem] overflow-hidden h-full min-h-[460px] relative flex flex-col" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            <div className="relative flex-1" style={{ minHeight: 280 }}>
              <iframe title="LAFODAP Nigeria Lagos office location" src="https://www.openstreetmap.org/export/embed.html?bbox=3.49%2C6.59%2C3.55%2C6.63&layer=mapnik&marker=6.61%2C3.52" className="absolute inset-0 w-full h-full" style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)", pointerEvents: "none" }} loading="lazy" tabIndex={-1} />
              <a href="https://www.google.com/maps/search/?api=1&query=22+Shagamu+Road+Ikorodu+Garage+Lagos" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-xl text-xs font-bold uppercase tracking-widest no-underline transition-transform hover:-translate-y-0.5" style={{ color: C.green }}>Open in Maps</a>
              <div className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 pointer-events-none">
                <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.primary }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <div><p className="font-extrabold text-[#1A1A18] text-sm leading-tight" style={{ fontFamily: "Georgia, serif" }}>Lagos Office</p><p className="text-gray-400 text-xs">22 Shagamu Road, Ikorodu</p></div>
              </div>
            </div>
            <div className="p-7" style={{ background: C.green }}>
              <h3 className="text-white font-extrabold text-lg mb-4" style={{ fontFamily: "Georgia, serif" }}>Office Hours</h3>
              <div className="flex flex-col gap-2.5">
                {[["Monday to Friday", "9:00am to 5:00pm"], ["Saturday", "10:00am to 2:00pm"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} className="flex justify-between text-sm"><span className="text-white/70 font-semibold">{d}</span><span className="font-bold" style={{ color: C.lime }}>{h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300" style={{ background: open ? "#fff" : C.cream, boxShadow: open ? "0 12px 36px rgba(0,0,0,0.08)" : "none" }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
        <span className="font-extrabold text-[#1A1A18] text-base" style={{ fontFamily: "Georgia, serif" }}>{item.q}</span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{ background: open ? C.primary : "#fff", transform: open ? "rotate(45deg)" : "none" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : C.ink} strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? 220 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
        <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-10" style={{ background: C.cream }}>
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <Reveal><Eyebrow center>Questions</Eyebrow></Reveal>
          <SplitHeading text="Frequently asked questions" className="font-black text-[#1A1A18] mt-4" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em" }} color="#1A1A18" />
        </div>
        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} y={20} delay={i * 0.08}><FaqItem item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} /></Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="text-center mt-12">
          <p className="text-gray-500 mb-5">Still have a question? We're happy to help.</p>
          <Btn href="mailto:info@lafodapnigeria.net" variant="dark">Email Our Team</Btn>
        </Reveal>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Page>
      <PageHero image="/assets/hero-contact.jpg" title="Let's start a conversation." sub="Want to give, volunteer, partner with us or just ask a question? Send us a message and we will reply within two working days." />
      <InfoCards />
      <FormAndMap />
      <Faq />
    </Page>
  );
}

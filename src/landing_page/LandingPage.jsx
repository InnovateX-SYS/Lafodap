import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      {/* HERO */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src="/assets/hero-lafodap.jpg"
          alt="Children"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* NAV */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-black/30 backdrop-blur-sm">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded-[9px] bg-[#E8745A] flex items-center justify-center">
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
              className="font-bold text-white text-[1.05rem]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              LAFODAP
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 list-none text-lg">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Project", "/project"],
              ["Donations", "/donate"],
              ["Contact", "#"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-white/75 text-xl font-semibold no-underline hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-7">
            <span className="hidden md:flex items-center gap-1 text-white/60 text-xs font-semibold">
              <svg
                width="12"
                height="12"
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
              className="bg-[#E8745A] text-white text-sm font-bold px-5 py-2 rounded-full no-underline hover:bg-[#d4614a] transition-colors"
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* HERO TEXT */}
        <div className="relative z-10 h-full flex flex-col justify-center px-[5vw] max-w-[540px]">
          <h1
            className="text-white font-bold leading-[1.1] mb-9 text-[clamp(2.6rem,5.5vw,4rem)]"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Restoring Dignity. <br /> Rebuilding Lives.
          </h1>
          <p className="text-white/70 text-[0.94rem] leading-[1.78] mb-7 max-w-[380px]">
            Supporting persons with disabilities, educating children, caring for
            orphans, and empowering displaced families.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/donate"
              className="bg-[#E8745A] text-white font-bold text-sm px-6 py-3 rounded-full no-underline hover:bg-[#d4614a] transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="text-white font-semibold text-sm px-6 py-3 rounded-full no-underline border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}

      <div className="bg-[red] w-full h-[700px] flex items-center justify-center">
        <div className="bg-blue-800 w-[1200px] flex items-center gap-10 px-10 py-12">
          {/* left: picture Content */}
          {/* left: picture collage */}
          <div className="w-1/2 relative flex-shrink-0" style={{ height: 480 }}>
            {/* decorative border outline — offset behind photos */}
            <div
              className="absolute border-2 border-[#c8d8c0] rounded-sm"
              style={{ top: 28, left: 28, width: "62%", height: "58%" }}
            />

            {/* TOP LEFT — tall portrait photo */}
            <div
              className="absolute overflow-hidden rounded-sm shadow-lg"
              style={{ top: 0, left: 0, width: "48%", height: "72%" }}
            >
              <img
                src="/assets/orphan-causes.jpg"
                alt="Child"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* TOP RIGHT — wide landscape photo */}
            <div
              className="absolute overflow-hidden rounded-sm shadow-lg"
              style={{ top: 0, right: 0, width: "48%", height: "44%" }}
            >
              <img
                src="/assets/education-causes-img.jpg"
                alt="Hands"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* BOTTOM RIGHT — square photo (the smiling child) */}
            <div
              className="absolute overflow-hidden rounded-sm shadow-xl"
              style={{ bottom: 0, right: 0, width: "52%", height: "52%" }}
            >
              <img
                src="/assets/about-lafodap.jpg"
                alt="Community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex flex-col gap-5">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#E8745A]" />
              <span className="text-[#E8745A] text-xs font-semibold uppercase tracking-widest">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[2.4rem] font-black leading-tight text-[#111]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              If we advance in the work of humanity, the helpless people will
              taste life.
            </h2>

            {/* Body */}
            <p className="text-[#777] text-sm leading-relaxed">
              LAFODAP is dedicated to restoring dignity and rebuilding lives for
              persons with disabilities, orphans, and displaced families across
              Nigeria. We believe every life deserves care, opportunity, and
              hope — and we work every day to make that a reality.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 mt-2">
              <div className="bg-[#1a4a2e] px-7 py-6">
                <p className="text-[#a8c5b0] text-[10px] uppercase tracking-widest mb-1">
                  Donation Goal
                </p>
                <p className="text-white text-3xl font-bold">$55,000</p>
              </div>
              <div className="bg-[#2d6e47] px-7 py-6">
                <p className="text-[#a8d5b5] text-[10px] uppercase tracking-widest mb-1">
                  Donation Raised
                </p>
                <p className="text-white text-3xl font-bold">$40,000</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2">
              <Link
                to="/donate"
                className="inline-block bg-[#E8745A] hover:bg-[#d4614a] text-white text-sm font-bold uppercase tracking-widest px-8 py-3 rounded-full no-underline transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

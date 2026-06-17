/* ═══════════════════════════════════════════════════════════════
   Single source of truth for all LAFODAP projects.
   Used by the listing grid and every project detail page.
═══════════════════════════════════════════════════════════════ */

export const PROJECTS = [
  {
    slug: "uptown-skills-academy",
    cat: "Education",
    img: "/assets/education-causes-img.jpg",
    title: "Uptown Skills Academy",
    loc: "Ikorodu, Lagos",
    desc: "Free schooling and digital literacy for underprivileged children.",
    raised: 12400, goal: 20000, pct: 62,
    donors: 184, daysLeft: 41,
    summary: "A tuition-free learning hub giving out-of-school children a structured path back into education — from foundational literacy to computer skills.",
    story: [
      "In the heart of Ikorodu, hundreds of children have never sat in a classroom. The Uptown Skills Academy exists to change that — offering free schooling, meals and digital literacy to children whose families simply cannot afford an education.",
      "Our curriculum blends core academics with practical, future-ready skills: reading, mathematics, and hands-on computer training. Each child is paired with a mentor who tracks their growth and champions their goals.",
      "With your support we can expand to a second classroom block, hire two more teachers, and welcome another 120 children into a future they can shape for themselves.",
    ],
    gallery: ["/assets/education-causes-img.jpg", "/assets/orphan-causes.jpg", "/assets/about-lafodap.jpg"],
    outcomes: [["120", "Children enrolled"], ["8", "Trained teachers"], ["3", "Meals daily"]],
    updates: [
      { date: "May 2026", text: "Opened our second classroom and welcomed 40 new pupils." },
      { date: "Feb 2026", text: "Donated 15 refurbished laptops for the digital lab." },
    ],
  },
  {
    slug: "vision-rescue-clinic",
    cat: "Health",
    img: "/assets/disability-causes-img.jpg",
    title: "Vision Rescue Clinic",
    loc: "Epe, Lagos",
    desc: "Eye care, screenings and assistive devices for the visually impaired.",
    raised: 4200, goal: 25000, pct: 17,
    donors: 63, daysLeft: 78,
    summary: "Mobile eye clinics bringing free screenings, glasses and assistive technology to communities that have never seen an optometrist.",
    story: [
      "For many in rural Epe, failing eyesight means a lost livelihood and a shrinking world. Vision Rescue brings free eye care directly to them — screenings, prescription glasses, and assistive devices for those living with visual impairment.",
      "Each mobile clinic can serve over 200 people in a single weekend, identifying treatable conditions early and referring complex cases for surgery.",
      "Your gift funds the equipment, the lenses, and the volunteer optometrists who make sight — and independence — possible again.",
    ],
    gallery: ["/assets/disability-causes-img.jpg", "/assets/empowerment-causes2.jpg", "/assets/clean-energy.jpeg"],
    outcomes: [["500+", "Screenings / year"], ["220", "Glasses fitted"], ["18", "Surgeries funded"]],
    updates: [
      { date: "Apr 2026", text: "Ran a weekend clinic serving 213 residents." },
    ],
  },
  {
    slug: "women-in-trade",
    cat: "Empowerment",
    img: "/assets/empowerment-causes2.jpg",
    title: "Women in Trade",
    loc: "Ogun State",
    desc: "Sewing machines, grants and mentorship for single mothers.",
    raised: 8750, goal: 15000, pct: 58,
    donors: 121, daysLeft: 33,
    summary: "Turning skills into income for single mothers through equipment, seed grants and ongoing business mentorship.",
    story: [
      "A sewing machine can be the difference between dependency and dignity. Women in Trade equips single mothers with the tools, training and starting capital to launch their own micro-enterprises.",
      "Beyond the machine, every participant receives six months of mentorship — bookkeeping, pricing, customer care — so their business doesn't just start, it lasts.",
      "Help us graduate the next cohort of 30 women into financial independence.",
    ],
    gallery: ["/assets/empowerment-causes2.jpg", "/assets/empowerment-causes.jpg", "/assets/about-lafodap.jpg"],
    outcomes: [["30", "Women per cohort"], ["6 mo", "Mentorship"], ["84%", "Still trading"]],
    updates: [
      { date: "Mar 2026", text: "Distributed 22 sewing machines to a new cohort." },
    ],
  },
  {
    slug: "light-every-village",
    cat: "Energy",
    img: "/assets/clean-energy.jpeg",
    title: "Light Every Village",
    loc: "Off-grid communities",
    desc: "Solar lanterns and home systems for families without power.",
    raised: 16800, goal: 22000, pct: 76,
    donors: 248, daysLeft: 19,
    summary: "Clean, safe solar lighting replacing kerosene lamps in off-grid homes — so children can study and families can breathe.",
    story: [
      "After dark, life stops in off-grid villages — or carries on by the toxic glow of a kerosene lamp. Light Every Village replaces those lamps with safe, reliable solar lighting and home systems.",
      "Each system lets children study at night, keeps small businesses open longer, and removes the health hazard of indoor smoke.",
      "We're 76% of the way to lighting another 120 homes. Your gift switches on the rest.",
    ],
    gallery: ["/assets/clean-energy.jpeg", "/assets/disability-causes-img.jpg", "/assets/orphan-causes.jpg"],
    outcomes: [["120", "Villages lit"], ["3,400", "People reached"], ["0", "Kerosene fumes"]],
    updates: [
      { date: "Jun 2026", text: "Installed solar systems in 28 new homes." },
      { date: "Jan 2026", text: "Crossed 120 villages lit since launch." },
    ],
  },
  {
    slug: "orphan-sponsorship",
    cat: "Education",
    img: "/assets/orphan-causes.jpg",
    title: "Orphan Sponsorship",
    loc: "Regional",
    desc: "Full sponsorship covering school fees, meals and care.",
    raised: 9300, goal: 18000, pct: 51,
    donors: 142, daysLeft: 52,
    summary: "End-to-end sponsorship that covers an orphaned child's school fees, meals, healthcare and pastoral care.",
    story: [
      "When a child loses their parents, they lose far more than family — they lose security, schooling and the small certainties of childhood. Our sponsorship programme restores all three.",
      "A single sponsorship covers school fees, uniforms, daily meals, healthcare and a dedicated caseworker who walks with the child year after year.",
      "Sponsor a child today and become the steady hand behind their whole future.",
    ],
    gallery: ["/assets/orphan-causes.jpg", "/assets/education-causes-img.jpg", "/assets/about-lafodap.jpg"],
    outcomes: [["1:1", "Caseworker support"], ["100%", "Fees covered"], ["365", "Days of care"]],
    updates: [
      { date: "May 2026", text: "Added 12 children to the sponsorship roll." },
    ],
  },
  {
    slug: "youth-mobility-grants",
    cat: "Empowerment",
    img: "/assets/empowerment-causes.jpg",
    title: "Youth Mobility Grants",
    loc: "Ikorodu, Lagos",
    desc: "Motorcycles and tools that turn skills into livelihoods.",
    raised: 6100, goal: 12000, pct: 50,
    donors: 88, daysLeft: 60,
    summary: "Practical grants — motorcycles, toolkits and equipment — that convert a young person's skill into a working livelihood.",
    story: [
      "A trained mechanic with no tools is still unemployed. Youth Mobility Grants bridge that final gap, giving skilled young people the motorcycle, toolkit or equipment they need to start earning.",
      "Recipients commit to a simple pledge: once established, they mentor and support the next young person in line — turning every grant into a chain of opportunity.",
      "Fund a grant and start that chain.",
    ],
    gallery: ["/assets/empowerment-causes.jpg", "/assets/empowerment-causes2.jpg", "/assets/clean-energy.jpeg"],
    outcomes: [["45", "Grants given"], ["2x", "Avg. income"], ["1", "Pay-it-forward pledge"]],
    updates: [
      { date: "Apr 2026", text: "Handed over 6 motorcycles to certified riders." },
    ],
  },
];

export const CATS = ["All", "Education", "Health", "Energy", "Empowerment"];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const CONFIG = {
  company: "WallnutFlow",
  founder: "Sachin G",
  siteUrl: "https://wallnut.info",
  calendly: "https://calendly.com/your-link",
  heroSub: "Automated outreach that books 10–20 qualified client calls/month for agencies",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-20 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="text-xl md:text-2xl font-extrabold text-[#E94B3C] tracking-tight">{CONFIG.company}.</div>
          <div className="hidden md:block text-sm text-gray-500">Done-for-you outreach & appointment systems</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#services" className="hover:text-[#E94B3C] transition">Services</a>
          <a href="#how" className="hover:text-[#E94B3C] transition">How it works</a>
          <a href="#process" className="hover:text-[#E94B3C] transition">Process</a>
          <a href="#offer" className="hover:text-[#E94B3C] transition">Offer</a>
          <a href="#contact" className="hover:text-[#E94B3C] transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href={CONFIG.siteUrl} className="hidden md:inline-block text-sm text-gray-600">{CONFIG.siteUrl}</a>
          <a
            href={CONFIG.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-[#E94B3C] to-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all"
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* HERO (layout follows screenshot proportions) */}
      <header className="max-w-5xl mx-auto px-6 md:px-16 mt-8 md:mt-12 flex flex-col items-center">
        <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              <span className="text-gray-800">Get </span>
              <span className="text-[#E94B3C]">Qualified 15+ </span>
              <span className="text-gray-800">sales calls per month</span>
              <br />
              <span className="text-gray-600 text-base font-medium">without lifting your finger</span>
            </h1>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-3 bg-[#E94B3C] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
                Book a free call
              </a>
              <a href="#offer" className="text-sm font-medium text-gray-700 hover:text-[#E94B3C] transition">See limited offer →</a>
            </div>

            {/* Big diagram area (blank boxes positioned as screenshot) */}
            <div className="mt-10 w-full flex justify-center">
              <div className="relative w-full md:w-[920px] h-[340px] rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-xl p-6">
                {/* central white rectangle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-white rounded-xl shadow-inner border border-gray-100"></div>

                {/* four corner floating boxes */}
                <div className="absolute -top-6 left-8 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
                <div className="absolute -top-6 right-8 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
                <div className="absolute -bottom-6 left-24 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
                <div className="absolute -bottom-6 right-24 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>

                {/* tiny icons around (placeholders) */}
                <div className="absolute left-4 top-8 text-xs text-gray-400">Gmail</div>
                <div className="absolute right-6 top-10 text-xs text-gray-400">Sheets</div>
                <div className="absolute left-10 bottom-16 text-xs text-gray-400">Calendly</div>
                <div className="absolute right-16 bottom-10 text-xs text-gray-400">Apollo</div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* WHAT WE SERVES (two-column 2x2 boxes as screenshot) */}
      <section id="services" className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-lg">What we <span className="text-[#E94B3C]">serves</span> you</h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-semibold">Done-for-you Outreach</div>
                <p className="text-sm text-gray-500 mt-1">We run cold email + follow-ups on warmed domains and book qualified calls.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-semibold">ICP Research</div>
                <p className="text-sm text-gray-500 mt-1">Targeted lists from Apollo and Clay — verified with NeverBounce.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-semibold">Qualification & Booking</div>
                <p className="text-sm text-gray-500 mt-1">We route calls through our scheduling flow and pre-qualify with forms.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-semibold">Weekly Reporting</div>
                <p className="text-sm text-gray-500 mt-1">Transparent weekly stats: sends, replies, bookings, and optimizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK (3-step vertical on right with large image on left) */}
      <section id="how" className="max-w-5xl mx-auto px-6 md:px-16 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">How we <span className="text-[#E94B3C]">works</span></h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow">
            <div className="flex gap-6 items-start">
              <div className="w-1/2">
                <div className="w-full h-56 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                  <Image src="/automation-diagram.png" alt="diagram" width={420} height={220} className="object-contain" />
                </div>
              </div>

              <div className="w-1/2 space-y-6">
                <Step number={1} title="ICP Research" desc="We map the right roles, company size, geography and intent signals for perfect buyers." />
                <Step number={2} title="Automation Setup" desc="Domain, 3 inboxes, warmup, multi-step email sequences and scheduling flow." />
                <Step number={3} title="Optimize & Scale" desc="We analyze replies, A/B test subject lines, and scale volume while preserving deliverability." />
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow text-sm">
            <div className="text-gray-500">Fast facts</div>
            <div className="mt-3 space-y-3">
              <Stat label="Leads per month" value="600–800" />
              <Stat label="Email volume" value="3k–4k / month" />
              <Stat label="Target result" value="15+ qualified calls / month" />
            </div>

            <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="mt-6 inline-block w-full text-center bg-[#E94B3C] text-white py-2 rounded-lg font-semibold">Apply for early slot</a>
          </aside>
        </div>
      </section>

      {/* PROCESS (4 steps horizontally matching screenshot) */}
      <section id="process" className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Our <span className="text-[#E94B3C]">Process</span></h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "/process-1.png", title: "Discovery" },
            { icon: "/process-2.png", title: "Setup" },
            { icon: "/process-3.png", title: "Automation" },
            { icon: "/process-4.png", title: "Reporting" },
          ].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-gray-50">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-3">
                {p.icon ? <Image src={p.icon} alt={p.title} width={44} height={44} /> : null}
              </div>
              <div className="font-semibold">{p.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-[220px] h-[260px] relative rounded-lg overflow-hidden">
            <Image src="/founder.jpg" alt="founder" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#E94B3C] font-semibold">Founder</div>
            <h3 className="mt-2 text-2xl font-bold">Sachin G — Founder @ WallnutFlow</h3>
            <p className="mt-3 text-gray-600">We build automation systems that help agencies fill their calendar with high-quality prospects while they focus on delivery. Started as a one-person operation — now a performance-first outreach studio.</p>

            <div className="mt-4 flex items-center gap-3">
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="inline-block bg-[#E94B3C] text-white px-4 py-2 rounded-full font-semibold">Book a strategy call</a>
              <a href="#contact" className="inline-block text-sm text-gray-700">Send a message</a>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 mt-14 text-center">
        <p className="text-gray-700 text-sm md:text-base">We build our systems using industry-standard tools trusted by thousands of agencies worldwide.</p>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
          {[
            "Apollo.io",
            "Instantly.ai",
            "Google Workspace",
            "ChatGPT",
            "NeverBounce",
            "Calendly",
          ].map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium shadow-sm">{t}</div>
          ))}
        </div>
      </section>

      {/* DELIVERABILITY / VIDEO */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
        <h3 className="font-semibold text-lg">Our Deliverability Process</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
              {/* Placeholder for video */}
              <div className="text-gray-400">[Deliverability video / diagram]</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="space-y-4">
              <div className="font-semibold">What we check</div>
              <div className="text-sm text-gray-600">DKIM / SPF / DMARC, warmup sequence, engagement monitoring and spam-trap avoidance.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER (hero pricing block like screenshot) */}
      <section id="offer" className="max-w-5xl mx-auto px-6 md:px-16 mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Early Partner Program</h2>
            <p className="mt-3 text-gray-600">First 5 agencies get a full Proof-of-Concept month for <span className="font-semibold">$199</span>. Includes full setup, running, and weekly reports. Continue at <span className="font-semibold">$1000/mo</span> after month one.</p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ 3 inboxes & warmed domains</li>
              <li>✅ 600–800 verified ICP leads setup</li>
              <li>✅ 4–5 email sequence & booking flow</li>
              <li>✅ Weekly call + transparent reporting</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href={CONFIG.calendly} className="bg-gradient-to-r from-[#E94B3C] to-[#FF7A00] text-white px-5 py-3 rounded-full font-semibold">Apply for partner slot</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-gray-200">Contact us</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="text-sm text-gray-500">Proof-of-Concept</div>
            <div className="mt-3 text-3xl font-bold">$199</div>
            <div className="mt-2 text-sm text-gray-600">One-time (first 5 agencies)</div>

            <ul className="mt-6 text-gray-700 space-y-2">
              <li>✅ Setup & Launch</li>
              <li>✅ First month delivery</li>
              <li>✅ Weekly reporting</li>
            </ul>

            <a href={CONFIG.calendly} className="mt-6 block text-center bg-[#E94B3C] text-white rounded-full py-3 font-semibold">Get early access</a>
          </div>
        </div>
      </section>

      {/* CONTACT / ONBOARDING */}
      <section id="contact" className="max-w-4xl mx-auto px-6 md:px-16 mt-6 mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-50">
          <h3 className="text-xl font-bold">Start your Proof-of-Concept</h3>
          <p className="mt-2 text-gray-600">Fill the quick form and we’ll setup a kickoff call within 48 hours.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border border-gray-100 rounded-lg" placeholder="Full name" />
            <input className="p-3 border border-gray-100 rounded-lg" placeholder="Business / Agency name" />
            <input className="p-3 border border-gray-100 rounded-lg col-span-2" placeholder="Work email" />
            <input className="p-3 border border-gray-100 rounded-lg" placeholder="Website / LinkedIn" />
            <input className="p-3 border border-gray-100 rounded-lg" placeholder="Calendly link (optional)" />

            <textarea className="p-3 border border-gray-100 rounded-lg col-span-2" placeholder="Describe your ideal client (ICP) & offer"></textarea>

            <div className="col-span-2 flex items-center gap-3">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm text-gray-600">I confirm payment of $199 (one-time) for Proof-of-Concept month</label>
            </div>

            <button type="button" className="col-span-2 bg-[#E94B3C] text-white py-3 rounded-full font-semibold">Start Proof-of-Concept</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 mt-6 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">{CONFIG.company}.</div>
            <div className="text-sm text-gray-500 mt-1">Founder — {CONFIG.founder}</div>
          </div>

          <div className="text-sm text-gray-500">© {new Date().getFullYear()} {CONFIG.company}. All rights reserved.</div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-600">Privacy</a>
            <a href="#" className="text-sm text-gray-600">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Helper subcomponents: Step & Stat (kept minimal for exact look) */
function Step({ number, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-50">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-[#E94B3C] text-white rounded-lg font-bold">{number}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}






     
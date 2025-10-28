import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// WallnutFlow — Single-file React component (TailwindCSS)
// Usage: drop into a Next.js page (pages/index.jsx) or preview in Canvas

const CONFIG = {
  company: "WallnutFlow",
  founder: "Sachin G",
  siteUrl: "https://wallnut.info", // <-- replace with your actual URL
  calendly: "https://calendly.com/your-link", // <-- replace with your Calendly
  heroSub: "Automated outreach that books 10–20 qualified client calls/month for agencies",
};

export default function WallnutLanding() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 leading-relaxed">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="text-xl md:text-2xl font-extrabold text-[#7C3AED] tracking-tight">{CONFIG.company}.</div>
          <div className="hidden md:block text-sm text-gray-500">Done-for-you outreach & appointment systems</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#services" className="hover:text-[#7C3AED] transition">Services</a>
          <a href="#how" className="hover:text-[#7C3AED] transition">How it works</a>
          <a href="#process" className="hover:text-[#7C3AED] transition">Process</a>
          <a href="#offer" className="hover:text-[#7C3AED] transition">Offer</a>
          <a href="#contact" className="hover:text-[#7C3AED] transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href={CONFIG.siteUrl} className="hidden md:inline-block text-sm text-gray-600">{CONFIG.siteUrl}</a>
          <a
            href={CONFIG.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#FF4B2B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all"
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 md:px-16 mt-10 md:mt-16 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#7C3AED] px-3 py-1 rounded-full text-sm font-medium">Fully Automated</div>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
              Get <span className="text-[#7C3AED]">10–20 qualified</span> sales calls per month —
              <br className="hidden md:block" />without extra hires or ad spend
            </h1>

            <p className="mt-4 text-gray-600">{CONFIG.heroSub}. We build, run and optimize the full email outreach funnel so your calendar fills with revenue-ready prospects.</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONFIG.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#FF4B2B] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Book a free call
              </a>

              <a
                href="#offer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#7C3AED] transition"
              >
                See limited offer →
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold">Typical result</div>
                <div className="mt-1 text-lg font-bold">10–20 calls / month</div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <div className="text-sm font-semibold">Delivery time</div>
                <div className="mt-1 text-lg font-bold">First calls in 7–21 days</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2 flex justify-center">
          <div className="w-[360px] md:w-[520px] rounded-2xl shadow-xl overflow-hidden bg-gradient-to-b from-white to-gray-50 p-6">
            <div className="w-full h-[320px] relative rounded-lg bg-white/50 flex items-center justify-center"> 
              <Image src="/preview image.png" alt="automation-diagram" fill className="object-contain" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="text-xs text-gray-500">Open rate</div>
              <div className="text-right font-semibold">60–75%</div>
              <div className="text-xs text-gray-500">Positive replies</div>
              <div className="text-right font-semibold">8–15%</div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 md:px-16 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">What we <span className="text-[#7C3AED]">deliver</span></h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Done-for-you Outreach",
              desc: "We build, verify and run your cold email + follow-up sequences on warmed domains.",
              emoji: "✉️",
            },
            {
              title: "ICP Research & Lead Enrichment",
              desc: "Target lists built from Apollo/Clay + validation with NeverBounce for high deliverability.",
              emoji: "🔎",
            },
            {
              title: "Qualification & Booking",
              desc: "Calls routed through our scheduling flow and qualified using pre-call forms.",
              emoji: "📅",
            },
            {
              title: "Weekly Reporting",
              desc: "Transparent weekly reports: emails sent, replies, bookings & next steps.",
              emoji: "📊",
            },
            {
              title: "Copy & Funnel Strategy",
              desc: "High-converting email sequences + landing/sales page guidance.",
              emoji: "✍️",
            },
            {
              title: "Account Migration & Handover",
              desc: "When you’re ready we migrate the domain and automations under your brand.",
              emoji: "🔁",
            },
          ].map((s, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md p-6 border border-gray-50">
              <div className="text-2xl">{s.emoji}</div>
              <h3 className="mt-3 font-semibold text-gray-800">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" className="max-w-6xl mx-auto px-6 md:px-16 mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">How we <span className="text-[#7C3AED]">work</span></h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="col-span-2">
            <div className="space-y-6">
              <Step number={1} title="ICP Research" desc="We map the right titles, company size, geography and intent signals for your perfect buyers." />
              <Step number={2} title="Automation Setup" desc="Domain, 3 inboxes, warmup, multi-step email sequence and scheduling flow." />
              <Step number={3} title="Optimize & Scale" desc="We analyze replies, A/B subject lines, and scale volume while preserving deliverability." />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-50">
            <div className="text-sm text-gray-500">Fast facts</div>
            <div className="mt-3 flex flex-col gap-2">
              <Stat label="Leads per month" value="600–800" />
              <Stat label="Email volume" value="3k–5k / month" />
              <Stat label="Target result" value="20+ qualified calls / month" />
            </div>

            <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="mt-6 inline-block w-full text-center bg-[#7C3AED] text-white py-2 rounded-lg font-semibold">Apply for early slot</a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Our <span className="text-[#7C3AED]">Process</span></h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "/process-1.png", title: "Discovery" },
            { icon: "/process-2.png", title: "Setup" },
            { icon: "/process-3.png", title: "Automation" },
            { icon: "/process-4.png", title: "Reporting" },
          ].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-50">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-3">
                <Image src={p.icon} alt={p.title} width={44} height={44} />
              </div>
              <div className="font-semibold">{p.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-[220px] h-[260px] relative rounded-lg overflow-hidden">
            <Image src="/founder.jpg" alt="founder" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#7C3AED] font-semibold">Founder</div>
            <h3 className="mt-2 text-2xl font-bold">Sachin G — Founder @ WallnutFlow</h3>
            <p className="mt-3 text-gray-600">I build automation systems that help agencies fill their calendar with high-quality prospects while they focus on delivery. Started as a one-person operation — now a performance-first outreach studio.</p>

            <div className="mt-4 flex items-center gap-3">
              <a href={CONFIG.calendly} target="_blank" rel="noreferrer" className="inline-block bg-[#7C3AED] text-white px-4 py-2 rounded-full font-semibold">Book a strategy call</a>
              <a href="#contact" className="inline-block text-sm text-gray-700">Send a message</a>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 mt-24 text-center">
        <p className="text-gray-700 text-sm md:text-base">We run our systems with industry tools trusted by thousands of agencies.</p>
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

      {/* OFFER */}
      <section id="offer" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
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
              <a href={CONFIG.calendly} className="bg-gradient-to-r from-[#7C3AED] to-[#FF4B2B] text-white px-5 py-3 rounded-full font-semibold">Apply for partner slot</a>
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

            <a href={CONFIG.calendly} className="mt-6 block text-center bg-[#7C3AED] text-white rounded-full py-3 font-semibold">Get early access</a>
          </div>
        </div>
      </section>

      {/* CONTACT / ONBOARDING */}
      <section id="contact" className="max-w-4xl mx-auto px-6 md:px-16 mt-28 mb-20">
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

            <button type="button" className="col-span-2 bg-[#7C3AED] text-white py-3 rounded-full font-semibold">Start Proof-of-Concept</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg">{CONFIG.company}.</div>
            <div className="text-sm text-gray-500 mt-1">Founder — {CONFIG.founder}</div>
          </div>

          <div className="text-sm text-gray-500">© {new Date().getFullYear()} WallnutFlow. All rights reserved.</div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-600">Privacy</a>
            <a href="#" className="text-sm text-gray-600">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}


// Small helper components
function Step({ number, title, desc }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl shadow-sm p-4 border border-gray-50">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-[#7C3AED] text-white rounded-lg font-bold">{number}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
    </motion.div>
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





     
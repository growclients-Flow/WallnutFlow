'use client';

import { motion } from 'framer-motion';

export default function Docs() {
  const sections = [
    'About us',
    'Pricing',
    'Offers',
    'Refunds & policies',
    'Process of work',
    'Benefits you get',
    'Strategies we use',
    'Proofs',
    'Tools we use',
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-orange-200 px-8 md:px-12 py-12">
        <h1 className="text-2xl font-extrabold text-orange-600 mb-10">
          WallnutFlow<span className="text-gray-900">.</span>
        </h1>

        <nav className="space-y-6">
          {sections.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="block text-gray-700 font-medium text-base hover:text-orange-600 transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <section className="flex-1 p-10 md:p-16 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* About Section */}
          <div id="about-us">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              WallnutFlow is a performance-driven outreach automation agency that helps digital marketing firms get 10–20 qualified sales calls every month without spending on ads or hiring extra SDRs. 
              We build the full Cold Email + Funnel system that runs on autopilot, bringing you predictable growth.
            </p>
          </div>

          {/* Pricing Section */}
          <div id="pricing">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
            <ul className="space-y-3 text-gray-600">
              <li>💰 <strong>$700</strong> — One-time upfront setup fee</li>
              <li>💼 <strong>$1000/month</strong> — Retainer after setup</li>
              <li>🎯 <strong>Special Offer:</strong> First 5 agencies get the full 30-day Proof-of-Concept for <strong>$199</strong> only.</li>
            </ul>
          </div>

          {/* Offers */}
          <div id="offers">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Offers</h2>
            <p className="text-gray-600 leading-relaxed">
              Our early partner program gives you a 30-day test drive of our system for just $199. 
              If you’re satisfied, continue at $1000/mo. If not, you still keep all your outreach assets + get $149 worth of premium resources free.
            </p>
          </div>

          {/* Refunds & Policies */}
          <div id="refunds-&-policies">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refunds & Policies</h2>
            <p className="text-gray-600 leading-relaxed">
              The $199 early-access payment is non-refundable as it covers your complete setup, lead list, and campaign activation.  
              However, you get full ownership of your assets + free premium resources if you’re not satisfied after 30 days.
            </p>
          </div>

          {/* Process of Work */}
          <div id="process-of-work">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Process of Work</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Client Onboarding → We collect info via form & kickoff call</li>
              <li>Setup → Domain, warmup, inboxes, sequences & funnel</li>
              <li>Launch → 3k–5k cold emails sent to ICP-targeted leads</li>
              <li>Optimize → A/B testing, deliverability checks</li>
              <li>Report → Weekly analytics & qualified call tracking</li>
            </ol>
          </div>

          {/* Benefits */}
          <div id="benefits-you-get">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits You Get</h2>
            <ul className="space-y-2 text-gray-600">
              <li>🚀 15–20 Qualified Sales Calls / Month</li>
              <li>⚙️ 100% Done-for-You Automation</li>
              <li>📈 Weekly reports, meetings, and growth reviews</li>
              <li>💡 Ownership of all systems once setup is complete</li>
            </ul>
          </div>

          {/* Strategies */}
          <div id="strategies-we-use">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies We Use</h2>
            <p className="text-gray-600 leading-relaxed">
              Our system uses a combination of hyper-personalized email sequences, smart deliverability tactics, and funnel optimization to ensure consistent reply rates and booked calls.
            </p>
          </div>

          {/* Proofs */}
          <div id="proofs">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proofs</h2>
            <p className="text-gray-600 leading-relaxed">
              We’ll soon share screenshots of real client campaigns and results from our early adopters. Every case study will show exact open, reply, and call booking metrics.
            </p>
          </div>

          {/* Tools */}
          <div id="tools-we-use">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools We Use</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600">
              <li>🧠 Apollo.io</li>
              <li>📩 Instantly.ai</li>
              <li>📊 Google Workspace</li>
              <li>🤖 ChatGPT</li>
              <li>🧾 Payoneer</li>
              <li>📞 Google Meet</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

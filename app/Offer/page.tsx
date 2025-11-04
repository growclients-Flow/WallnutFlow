'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Offer() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-orange-600">Offers & Pricing</span>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Transparent pricing. No surprises. Every plan is built to generate
          predictable, qualified sales calls for your agency — hands-free.
        </p>
      </section>

      {/* MAIN PRICING SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Regular Offer */}
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-md bg-white"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Regular Plan
          </h3>
          <p className="text-gray-500 mb-6">
            Best for agencies ready to scale their client acquisition
            predictably.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>💰 <strong>$700</strong> — One-time upfront setup fee</li>
            <li>📈 <strong>$1000/month</strong> — Retainer after setup</li>
            <li>⚙️ Includes: full cold email + funnel + automation system</li>
            <li>🧠 15–20 qualified calls/month guaranteed*</li>
          </ul>

          <Link
            href="https://calendly.com/wallnutflow"
            target="_blank"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Book a Call
          </Link>
        </motion.div>

        {/* Early Offer */}
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="border border-orange-200 rounded-3xl p-10 shadow-md bg-gradient-to-b from-orange-50 to-white"
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-2">
            Limited Offer (First 5 Agencies)
          </h3>
          <p className="text-gray-600 mb-6">
            Get early access to our system at a one-time test-drive price. Build
            trust, proof, and momentum before scaling.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>🔥 <strong>$199</strong> — One-time for first 30 days</li>
            <li>🧩 Full system setup + campaign launch included</li>
            <li>💼 Continue at <strong>$1000/mo</strong> if satisfied</li>
            <li>🎁<strong>$149</strong> worth of free resources + keep all assets</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://calendly.com/wallnutflow"
              target="_blank"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
            >
              Grab $199 Slot
            </Link>
            <Link
              href="/offer-details"
              className="border border-orange-300 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What’s Included in Every Plan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you choose the $199 trial or full system, you get everything
          needed to attract, nurture, and close qualified clients — automatically.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            '3–5 verified inboxes with warming & deliverability setup',
            'Custom cold email sequences (5–6 stages)',
            'High-quality 600–800 ICP leads sourced from Apollo',
            'Landing page + calendar funnel setup',
            'Weekly performance reports & analytics',
            '1-on-1 strategy + optimization meetings',
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-100 shadow-sm rounded-xl p-6"
            >
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 mt-24 mb-30 text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-orange-600 text-white rounded-3xl py-14 px-10 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to See Qualified Calls Flow In?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join the first 5 agencies or start your full setup today. The faster
            you start, the sooner your calendar fills.
          </p>
          <Link
            href="https://calendly.com/wallnutflow"
            target="_blank"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
          >
            Book a Free Discovery Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}


'use clients';
import React from "react";
import { motion } from "framer-motion";

// NOTE: This file is a single-file React component styled with Tailwind CSS.
// Placeholders: put images in /public folder: placeholder-illustration.png, placeholder-card.png, founder.jpg

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 text-sm font-medium">
        <div className="text-xl font-extrabold text-[#FF4B2B]">WallnutFlow.</div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#home" className="hover:text-[#FF4B2B] transition">Home</a>
          <a href="#services" className="hover:text-[#FF4B2B] transition">What we serve</a>
          <a href="#how" className="hover:text-[#FF4B2B] transition">How we work</a>
          <a href="#process" className="hover:text-[#FF4B2B] transition">Process</a>
        </div>

        <div className="ml-4">
          <a href="#book" className="inline-block bg-[#FF4B2B] hover:bg-[#ff694f] text-white px-5 py-2 rounded-full transition-all duration-300">Book a Free Call</a>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="text-center mt-12 md:mt-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-5xl font-bold leading-tight md:leading-snug max-w-4xl mx-auto"
        >
          Get <span className="text-[#FF4B2B]">Qualified</span> 15+ sales calls per month<br className="hidden md:block" />
          without lifting your finger
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6"
        >
          <a href="#book" className="inline-block bg-[#FF4B2B] text-white px-8 py-3 rounded-full hover:scale-105 transform transition-transform">
            Book a Free Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
          className="mt-12 flex justify-center"
        >
          <div className="relative w-[320px] h-[220px] md:w-[900px] md:h-[380px]">
            <img src="/placeholder-illustration.png" alt="hero" className="object-contain w-full h-full rounded-lg shadow-2xl" />
          </div>
        </motion.div>
      </header>

      {/* What we serve */}
      <section id="services" className="text-center mt-20 px-6 md:px-16">
        <h2 className="text-2xl font-bold">
          What we <span className="text-[#FF4B2B]">serves</span> you
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <motion.div whileHover={{ y: -6 }} className="bg-white shadow-xl rounded-xl p-6">
            <img src="/placeholder-card.png" alt="service-1" className="mx-auto w-full h-44 object-cover rounded-md" />
            <h3 className="mt-4 font-semibold">Done-for-you Outreach</h3>
            <p className="text-sm text-gray-600 mt-2">We build and run cold email + funnel systems to fill your calendar.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white shadow-xl rounded-xl p-6">
            <img src="/placeholder-card.png" alt="service-2" className="mx-auto w-full h-44 object-cover rounded-md" />
            <h3 className="mt-4 font-semibold">Qualified Lead Handoff</h3>
            <p className="text-sm text-gray-600 mt-2">Only qualified, revenue-ready calls — pre-screened so you close faster.</p>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section id="how" className="mt-20 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-bold">How we <span className="text-[#FF4B2B]">works</span></h2>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.img src="/placeholder-illustration.png" alt="how" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" whileHover={{ scale: 1.02 }} />

          <div className="space-y-6 text-left md:w-1/2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-medium">ICP Research</p>
                <p className="text-sm text-gray-600">We map the perfect buyer profile and scrape verified contacts.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-medium">Automation Setup</p>
                <p className="text-sm text-gray-600">Domains, inboxes, sequences, and calendar flows — all done-for-you.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-medium">Scale & Optimize</p>
                <p className="text-sm text-gray-600">We tune copy, timing and targeting until calls and conversions hit your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="mt-20 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-bold">Our <span className="text-[#FF4B2B]">Process</span></h2>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 shadow-md rounded-lg">
            <img src="/placeholder-card.png" alt="step1" className="mx-auto w-20 h-20 object-cover" />
            <p className="font-medium mt-4">Discovery</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 shadow-md rounded-lg">
            <img src="/placeholder-card.png" alt="step2" className="mx-auto w-20 h-20 object-cover" />
            <p className="font-medium mt-4">Setup</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 shadow-md rounded-lg">
            <img src="/placeholder-card.png" alt="step3" className="mx-auto w-20 h-20 object-cover" />
            <p className="font-medium mt-4">Launch</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 shadow-md rounded-lg">
            <img src="/placeholder-card.png" alt="step4" className="mx-auto w-20 h-20 object-cover" />
            <p className="font-medium mt-4">Report</p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="mt-20 px-6 md:px-16 text-center">
        <h3 className="text-sm text-gray-400 tracking-wide mb-6">OUR FOUNDER</h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src="/founder.jpg" alt="founder" className="rounded-lg shadow-lg w-48 h-48 object-cover" />

          <div className="text-left md:w-1/2">
            <p className="font-bold text-lg mb-2">Sachin — Founder, WallnutFlow</p>
            <p className="text-gray-600">I’m the founder of WallnutFlow. I help agencies get predictable, qualified calls by building done-for-you cold email automation systems.</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mt-20 px-6 md:px-16 text-center pb-32">
        <p className="text-gray-700">We build our systems using industry-standard tools trusted by <span className="font-bold text-[#FF4B2B]">10,000+ agencies</span> worldwide.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            'apollo.io',
            'instantly.ai',
            'google-workspace',
            'chatGPT',
            'google-meet',
            'payoneer'
          ].map((tool, idx) => (
            <div key={idx} className="px-4 py-2 border rounded-full shadow-sm text-gray-600 hover:text-[#FF4B2B] transition-colors">{tool}</div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-xl font-bold">Try the WallnutFlow System — Prove it Works for Your Agency Before You Commit</h3>
          <p className="text-gray-600 mt-2">We offer a 30-day proof-of-concept. Pay setup and see the results.</p>
          <div className="mt-6">
            <a href="#book" className="inline-block bg-[#FF4B2B] text-white px-8 py-3 rounded-full">Book a Free Call</a>
          </div>
        </div>
      </footer>
    </main>
  );
}


     
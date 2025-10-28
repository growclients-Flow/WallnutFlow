"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image src="/placeholder-illustration.png" alt="hero" fill className="object-contain rounded-lg shadow-2xl" />
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
            <Image src="/placeholder-card.png" alt="service-1" width={300} height={200} className="mx-auto rounded-md" />
            <h3 className="mt-4 font-semibold">Done-for-you Outreach</h3>
            <p className="text-sm text-gray-600 mt-2">We build and run cold email + funnel systems to fill your calendar.</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="bg-white shadow-xl rounded-xl p-6">
            <Image src="/placeholder-card.png" alt="service-2" width={300} height={200} className="mx-auto rounded-md" />
            <h3 className="mt-4 font-semibold">Qualified Lead Handoff</h3>
            <p className="text-sm text-gray-600 mt-2">Only qualified, revenue-ready calls — pre-screened so you close faster.</p>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section id="how" className="mt-20 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-bold">How we <span className="text-[#FF4B2B]">works</span></h2>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Image src="/placeholder-illustration.png" alt="how" width={400} height={300} className="rounded-lg shadow-lg" />
          </motion.div>

          <div className="space-y-6 text-left md:w-1/2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-bold">{step}</div>
                <div>
                  <p className="font-medium">
                    {step === 1
                      ? "ICP Research"
                      : step === 2
                      ? "Automation Setup"
                      : "Scale & Optimize"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {step === 1
                      ? "We map the perfect buyer profile and scrape verified contacts."
                      : step === 2
                      ? "Domains, inboxes, sequences, and calendar flows — all done-for-you."
                      : "We tune copy, timing and targeting until calls and conversions hit your goals."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-20 text-center px-6">
        <h3 className="text-xl font-bold">Try the WallnutFlow System — Prove it Works for Your Agency Before You Commit</h3>
        <p className="text-gray-600 mt-2">We offer a 30-day proof-of-concept. Pay setup and see the results.</p>
        <div className="mt-6">
          <a href="#book" className="inline-block bg-[#FF4B2B] text-white px-8 py-3 rounded-full">Book a Free Call</a>
        </div>
      </footer>
    </main>
  );
}



     
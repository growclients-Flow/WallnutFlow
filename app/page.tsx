"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-5 text-sm font-medium">
        <div className="text-xl md:text-2xl font-extrabold text-[#FF4B2B]">WallnutFlow.</div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#" className="hover:text-[#FF4B2B] transition">Services</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">Blog</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">How it works</a>
          <a href="#" className="hover:text-[#FF4B2B] transition">Contact</a>
        </div>

        <a
          href="#book"
          className="ml-4 inline-block bg-[#FF4B2B] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all"
        >
          Book a free call
        </a>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center px-6 mt-12 md:mt-20">
        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#FF4B2B] text-[#FF4B2B] text-[12px] font-medium px-3 py-1 rounded-full"
        >
          Fully Automated
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[26px] md:text-[38px] font-extrabold text-black leading-snug"
        >
          Get <span className="text-[#FF4B2B]">Qualified</span> 15+ sales calls per month<br />
          <span className="font-semibold text-gray-800">without lifting your finger</span>
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href="#book"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-[#FF4B2B] to-[#ff764a] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
        >
          Book a free call
        </motion.a>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-12 relative w-[320px] h-[240px] md:w-[800px] md:h-[520px]"
        >
          <Image
            src="/preview image.png"
            alt="automation-diagram"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </header>

      {/* What We Serve Section */}
<section
  id="services"
  className="relative flex flex-col items-center justify-center mt-32 mb-24 px-6 md:px-16"
>
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-extrabold text-center">
    What we <span className="text-[#FF4B2B]">serve</span> you
  </h2>

  {/* Grid Container */}
  <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16 max-w-5xl w-full">
    {/* Card 1 */}
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white shadow-xl rounded-2xl h-[160px] md:h-[180px] flex items-center justify-center transition-all"
    >
      <p className="text-gray-500 text-sm md:text-base">Service Box 1</p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white shadow-xl rounded-2xl h-[160px] md:h-[180px] flex items-center justify-center transition-all"
    >
      <p className="text-gray-500 text-sm md:text-base">Service Box 2</p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white shadow-xl rounded-2xl h-[160px] md:h-[180px] flex items-center justify-center transition-all"
    >
      <p className="text-gray-500 text-sm md:text-base">Service Box 3</p>
    </motion.div>

    {/* Card 4 */}
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white shadow-xl rounded-2xl h-[160px] md:h-[180px] flex items-center justify-center transition-all"
    >
      <p className="text-gray-500 text-sm md:text-base">Service Box 4</p>
    </motion.div>

    {/* Dotted Line */}
    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 border-l-2 border-dotted border-gray-300 z-0" />

    {/* Center W logo */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-white text-[#7C3AED] font-extrabold text-3xl md:text-4xl shadow-md px-4 py-2 rounded-full"
      >
        W.
      </motion.div>
    </div>
  </div>
</section>

    </main>
  );
}




     
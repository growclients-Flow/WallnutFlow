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

{/* How We Work Section */}
<section
  id="how"
  className="flex flex-col md:flex-row items-center justify-center mt-32 mb-24 px-6 md:px-16"
>
  {/* Left Illustration */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="md:w-1/2 flex justify-center"
  >
    <Image
      src="/previem.jpg"
      alt="How we work illustration"
      width={420}
      height={320}
      className="rounded-lg shadow-lg object-contain"
    />
  </motion.div>

  {/* Right Steps */}
  <div className="relative md:w-1/2 flex flex-col justify-center mt-12 md:mt-0 pl-0 md:pl-16">
    {/* Heading */}
    <h2 className="text-center md:text-left text-2xl md:text-3xl font-extrabold mb-10">
      How we <span className="text-[#FF4B2B]">work</span>
    </h2>

    {/* Step 1 */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-6 mb-10"
    >
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-[#7C3AED] text-white font-bold rounded-lg text-lg shadow-md">
          1
        </div>
        <div className="h-[80px] w-[2px] bg-dotted border-l-2 border-dotted border-gray-300 absolute top-10"></div>
      </div>
      <div className="bg-white shadow-lg rounded-xl px-5 py-4 flex-1">
        <p className="font-semibold text-gray-800">ICP Research</p>
        <p className="text-gray-500 text-sm mt-1">
          We identify and map your ideal customer profile with verified data.
        </p>
      </div>
    </motion.div>

    {/* Step 2 */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-6 mb-10"
    >
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-[#7C3AED] text-white font-bold rounded-lg text-lg shadow-md">
          2
        </div>
        <div className="h-[80px] w-[2px] bg-dotted border-l-2 border-dotted border-gray-300 absolute top-10"></div>
      </div>
      <div className="bg-white shadow-lg rounded-xl px-5 py-4 flex-1">
        <p className="font-semibold text-gray-800">Automation Setup</p>
        <p className="text-gray-500 text-sm mt-1">
          We build cold email systems, domains, and inboxes for predictable outreach.
        </p>
      </div>
    </motion.div>

    {/* Step 3 */}
    <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-[#7C3AED] text-white font-bold rounded-lg text-lg shadow-md">
          3
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl px-5 py-4 flex-1">
        <p className="font-semibold text-gray-800">Optimize & Scale</p>
        <p className="text-gray-500 text-sm mt-1">
          We optimize sequences, analyze metrics, and scale calls month after month.
        </p>
      </div>
    </motion.div>
  </div>
</section>

{/* Our Process Section */}
<section
  id="process"
  className="mt-32 mb-24 px-6 md:px-16 text-center flex flex-col items-center"
>
  <h2 className="text-2xl md:text-3xl font-extrabold mb-14">
    Our <span className="text-[#FF4B2B]">Process</span>
  </h2>

  <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-6 w-full max-w-6xl">

    {/* Process Steps */}
    {[
      {
        icon: "/process-1.png",
        title: "Discovery",
      },
      {
        icon: "/process-2.png",
        title: "Setup",
      },
      {
        icon: "/process-3.png",
        title: "Automation",
      },
      {
        icon: "/process-4.png",
        title: "Reporting",
      },
    ].map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        className="relative bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center w-[220px] h-[240px]"
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={64}
          height={64}
          className="mb-4 object-contain"
        />
        <p className="font-semibold text-gray-800">{step.title}</p>

        {/* Dotted line between cards */}
        {index < 3 && (
          <div className="hidden md:block absolute top-1/2 right-[-34px] w-[60px] border-t-2 border-dotted border-gray-300"></div>
        )}
      </motion.div>
    ))}
  </div>
</section>

{/* OUR FOUNDER SECTION */}
<section className="mt-28 px-6 md:px-20 text-center">
  <h3 className="text-xs md:text-sm font-semibold tracking-wider text-[#FF4B2B] mb-10">
    OUR FOUNDER
  </h3>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
    {/* Founder Image */}
    <div className="relative w-[260px] h-[300px] md:w-[300px] md:h-[360px] flex-shrink-0">
      {/* Red circle behind image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[220px] h-[220px] bg-[#FF4B2B] rounded-full -z-10"></div>
      </div>

      <Image
        src="/founder.jpg"
        alt="Founder"
        fill
        className="object-cover rounded-md grayscale"
      />
    </div>

    {/* Founder Card */}
    <div className="relative bg-white shadow-xl rounded-xl p-6 md:p-8 w-full md:max-w-lg text-left">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/founder.jpg"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Sachin G</p>
          <p className="text-sm text-gray-500">Founder @ WallnutFlow</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          “I’m the Founder of WallnutFlow. We help Digital Marketing Agencies
          to get 10–20 Qualified sales calls per month by building a done-for-you
          Automation system, so it works 24/7 and fills your calendar with
          qualified calls.”
        </p>
      </div>
    </div>
  </div>
</section>

{/* TOOLS SECTION */}
<section className="mt-24 px-6 md:px-20 text-center pb-28">
  <p className="text-gray-700 text-sm md:text-base">
    We build our systems using industry-standard tools trusted by{" "}
    <span className="font-bold text-[#FF4B2B]">10,000+ agencies</span> worldwide.
  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
    {[
      { name: "Apollo.io", color: "bg-[#FFF9E6]" },
      { name: "Instantly.ai", color: "bg-[#EEF2FF]" },
      { name: "Google Workspace", color: "bg-[#FFF7F0]" },
      { name: "ChatGPT", color: "bg-[#F4F4F4]" },
      { name: "Google Meet", color: "bg-[#E8F5E9]" },
      { name: "Payoneer", color: "bg-[#FFF1EC]" },
    ].map((tool, idx) => (
      <div
        key={idx}
        className={`${tool.color} flex items-center gap-2 border border-gray-200 shadow-sm px-4 py-2 rounded-full text-gray-700 font-medium text-sm hover:shadow-md transition-all`}
      >
        {tool.name}
      </div>
    ))}
  </div>
</section>

{/* OUR DELIVERY PROCESS SECTION */}
<section className="mt-28 px-6 md:px-20 text-center">
  {/* Title */}
  <h2 className="text-2xl font-bold">
    Our <span className="text-[#7C3AED]">Delivery</span> Process
  </h2>

  {/* Layout */}
  <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
    
    {/* Video Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full md:w-[500px] aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center"
    >
      {/* If you want an embedded video, uncomment below */}
      {/* <video
        src="/delivery-video.mp4"
        controls
        className="w-full h-full object-cover rounded-2xl"
      /> */}

      {/* Placeholder Play Icon (if no video yet) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </motion.div>

    {/* Text Cards */}
    <div className="flex flex-col gap-6 w-full md:w-[400px]">
      {[
        {
          title: "Step 1 – Setup Call",
          desc: "We begin with a 1-on-1 call to understand your systems, goals, and ICP before deployment.",
        },
        {
          title: "Step 2 – Launch & Monitor",
          desc: "Your automated cold email system starts running — we monitor delivery, reply rate, and bookings.",
        },
      ].map((step, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -3 }}
          className="bg-white rounded-xl shadow-lg text-left p-5 md:p-6 transition-all duration-300"
        >
          <h3 className="font-semibold text-gray-800 text-base mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* WE OFFER SECTION */}
<section className="mt-28 px-6 md:px-20 text-center">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800">We Offer</h3>
  <h2 className="text-2xl md:text-3xl font-extrabold mt-3 leading-snug">
    Try the <span className="text-black">WallnutFlow System</span> — Prove it Works for<br className="hidden md:block" />
    Your Agency Before You Commit
  </h2>
  <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
    We’re so confident in our system that we’ll build and run your entire outreach engine for 30 days —
    and let the results speak for themselves.
  </p>

  {/* Offer Container */}
  <div className="relative mt-14 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
    
    {/* Left – Proof of Concept Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-left max-w-lg relative"
    >
      {/* Paperclip icon */}
      <div className="absolute -top-4 right-8 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
        📎
      </div>

      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <span>📜</span> What You Get in the 30-Day Proof-of-Concept
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          ✅ <span>Done-for-you Cold Email Automation setup<br /><span className="text-gray-500 text-sm">(3 inboxes, verified leads, and outreach sequences)</span></span>
        </li>
        <li className="flex items-start gap-2">
          ✅ <span>Strategic sales funnel customized to your ICP</span>
        </li>
        <li className="flex items-start gap-2">
          ✅ <span>Weekly reporting: opens, replies, and booked calls</span>
        </li>
        <li className="flex items-start gap-2">
          ✅ <span>Full transparency — you see exactly how many qualified calls you get</span>
        </li>
      </ul>

      {/* Seal Icon (Bottom Left) */}
      <div className="absolute -bottom-5 left-6 text-3xl">🏅</div>
    </motion.div>

    {/* Right – Pricing Box */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-white border border-gray-100 rounded-2xl p-6 w-[260px] shadow-[0_0_25px_-5px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_-4px_rgba(124,58,237,0.6)] transition-all duration-300"
    >
      <h4 className="font-bold text-lg mb-4">For $199 only</h4>

      <ul className="space-y-2 text-gray-700 text-sm mb-6">
        <li>✅ Setup</li>
        <li>✅ Maintenance</li>
        <li>✅ Reporting</li>
        <li>✅ Delivery</li>
      </ul>

      <div className="bg-black text-white text-lg font-semibold py-2 rounded-xl">
        $199 / once
      </div>

      <p className="text-gray-500 text-xs mt-2">
        * valid only for first 30 days<br />* non-refundable
      </p>

      {/* Glow Border (optional neon effect) */}
      <div className="absolute inset-0 rounded-2xl border border-purple-500/50 pointer-events-none"></div>
    </motion.div>
  </div>
</section>


</main>
  );
}




     
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero(){
  return (
    <header className="max-w-5xl mx-auto px-6 md:px-16 mt-8 md:mt-12">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.45}} className="bg-white rounded-xl p-8 shadow-sm text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          <span className="text-gray-800">Get </span>
          <span className="text-wallnut">Qualified 15+ </span>
          <span className="text-gray-800">sales calls per month</span>
          <br />
          <span className="text-gray-600 text-base font-medium">without lifting your finger</span>
        </h1>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://calendly.com/wallnutflow" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-wallnut text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
            Book a free call
          </a>
          <a href="#offer" className="text-sm font-medium text-gray-700 hover:text-wallnut transition">See limited offer →</a>
        </div>

        {/* big diagram */}
        <div className="mt-10 w-full flex justify-center">
          <div className="relative w-full md:w-[920px] h-[340px] rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-xl p-6">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-white rounded-xl shadow-inner border border-gray-100"></div>

            <div className="absolute -top-6 left-8 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
            <div className="absolute -top-6 right-8 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
            <div className="absolute -bottom-6 left-24 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>
            <div className="absolute -bottom-6 right-24 w-[120px] h-[64px] bg-white rounded-xl shadow p-3 border border-gray-100"></div>

            <div className="absolute left-4 top-8 text-xs text-gray-400">Gmail</div>
            <div className="absolute right-6 top-10 text-xs text-gray-400">Sheets</div>
            <div className="absolute left-10 bottom-16 text-xs text-gray-400">Calendly</div>
            <div className="absolute right-16 bottom-10 text-xs text-gray-400">Apollo</div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

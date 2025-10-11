"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-6 flex items-center justify-center mt-25">
      {/* Card container with gradient background */}
      <div className="max-w-5xl w-full bg-gradient-to-r from-[#7b2ff7] via-[#f107a3] to-[#ff6a00] rounded-3xl p-1 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl p-8 md:p-12 gap-12">

          {/* Left content with motion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left"
          >
            <p className="uppercase text-sm font-semibold text-orange-500 mb-2">
              Stay in the loop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get notified when<span className="text-blue-700 px-2 py-1 rounded-2xl">Wallnut</span> launches
            </h2>
            <p className="text-gray-700 mb-6">
              Be the first to try out our beautifully simple, ultra-fast maintenance and landing page templates.
            </p>
            <Link
              href="/account"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Book my tour
            </Link>
          </motion.div>

          {/* Right illustration with motion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[300px] lg:w-[350px]"
          >
            <Image
              src="/icons/mark.svg"
              alt="Illustration"
              width={350}
              height={350}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}






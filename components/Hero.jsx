'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="max-w-6xl mx-auto px-6 md:px-16 mt-16 text-center">
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block bg-gray-100 border-3 border-indigo-800 text-indigo-800 text-xs font-medium px-4 py-1 rounded-full mb-4"
      >
        Fully Automated
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug"
      >
        Get <span className="text-red-600">Qualified</span>{' '}
        <span className="text-gray-900">15+ sales calls per month</span>
        <br />
        <span className="font-semibold text-gray-700">
          without lifting your finger
        </span>
      </motion.h1>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex justify-center"
      >
        <a
          href="https://calendly.com/growclients-wallnut/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:scale-105 hover:bg-orange-700 transition-all"
        >
          Book a free call
        </a>
      </motion.div>

      {/* Placeholder Preview Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
            <Image
              src="/Group 17.png"
              alt="Preview diagram placeholder"
              width={1000}
              height={500}
              className="rounded-lg object-contain opacity-100"
            />
      </motion.div>
    </header>
  );
}


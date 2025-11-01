'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Process() {
  const steps = [
    { icon: '/process-1.png', title: 'Discovery' },
    { icon: '/process-2.png', title: 'Setup' },
    { icon: '/process-3.png', title: 'Automation' },
    { icon: '/process-4.png', title: 'Reporting' }
  ];

  return (
    <section id="process" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        Our <span className="text-orange-600">Process</span>
      </h2>

      {/* Process Steps */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-full mb-5 border border-gray-100">
              <Image
                src={s.icon}
                alt={s.title}
                width={52}
                height={52}
                className="object-contain opacity-90"
              />
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-semibold text-gray-900">
              {s.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


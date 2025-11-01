'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Done-for-you Outreach',
    desc: 'We run cold email + follow-ups on warmed domains and book qualified calls.'
  },
  {
    title: 'ICP Research',
    desc: 'Targeted lists from Apollo and Clay — verified with NeverBounce.'
  },
  {
    title: 'Qualification & Booking',
    desc: 'We route calls through our scheduling flow and pre-qualify with forms.'
  },
  {
    title: 'Weekly Reporting',
    desc: 'Transparent weekly stats: sends, replies, bookings, and optimizations.'
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        What we <span className="text-orange-600">serve</span> you
      </motion.h2>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-md mt-14 p-8 md:p-12"
      >
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-base text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



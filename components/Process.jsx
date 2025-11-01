'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Process() {
  const steps = [
    {
      icon: '/process-1.png',
      title: 'Discovery',
      desc: 'We start with a deep understanding of your agency — your services, ICP, and offers. This helps us tailor your outreach system perfectly to your goals.',
    },
    {
      icon: '/process-2.png',
      title: 'Setup',
      desc: 'We handle the entire backend setup — domain, 3 inboxes, lead scraping (600–800 leads), email warm-up, and your personalized outreach funnel.',
    },
    {
      icon: '/process-3.png',
      title: 'Automation',
      desc: 'Once setup is ready, our automation system starts sending 3000–4000 personalized emails per month with smart sequences to attract qualified leads.',
    },
    {
      icon: '/process-4.png',
      title: 'Reporting',
      desc: 'You get weekly reports showing emails sent, replies, qualified calls, and booked meetings — complete transparency with real results.',
    },
  ];

  return (
    <section id="process" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        Our <span className="text-orange-600">Process</span>
      </h2>
      <p className="text-center text-gray-600 mt-3 text-base">
        Efficient Process. Endless Value. We build everything so you don’t lift a finger.
      </p>

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
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {s.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA after process */}
      <div className="mt-16 text-center">
        <a
          href="#offer"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition-all"
        >
          Apply for $199 Early Partner Slot →
        </a>
      </div>
    </section>
  );
}



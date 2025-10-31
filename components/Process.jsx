'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Process(){
  const steps = [
    { icon: '/process-1.png', title: 'Discovery' },
    { icon: '/process-2.png', title: 'Setup' },
    { icon: '/process-3.png', title: 'Automation' },
    { icon: '/process-4.png', title: 'Reporting' }
  ];

  return (
    <section id="process" className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center">Our <span className="text-wallnut">Process</span></h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s,i)=>(
          <motion.div key={i} whileHover={{ y:-6 }} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-gray-50">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full mb-3">
              <Image src={s.icon} alt={s.title} width={44} height={44} />
            </div>
            <div className="font-semibold">{s.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

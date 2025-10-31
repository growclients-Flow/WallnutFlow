'use client';
import Image from 'next/image';

export default function Founder(){
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="w-[220px] h-[260px] relative rounded-lg overflow-hidden">
          <Image src="/founder.jpg" alt="founder" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="text-sm text-wallnut font-semibold">Founder</div>
          <h3 className="mt-2 text-2xl font-bold">Sachin G — Founder @ WallnutFlow</h3>
          <p className="mt-3 text-gray-600">We build automation systems that help agencies fill their calendar with high-quality prospects while they focus on delivery. Started as a one-person operation — now a performance-first outreach studio.</p>

          <div className="mt-4 flex items-center gap-3">
            <a href="https://calendly.com/wallnutflow" target="_blank" rel="noreferrer" className="inline-block bg-wallnut text-white px-4 py-2 rounded-full font-semibold">Book a strategy call</a>
            <a href="#contact" className="inline-block text-sm text-gray-700">Send a message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

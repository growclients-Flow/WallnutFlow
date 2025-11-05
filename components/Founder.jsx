'use client';
import Image from 'next/image';

export default function Founder() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Founder Image */}
        <div className="relative w-[240px] h-[280px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/founder.png"
            alt="Founder"
            fill
            className="object-cover"
          />
        </div>

        {/* Founder Info */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
            Founder
          </p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            Sachin G
          </h3>
          <p className="mt-1 text-lg text-gray-700 font-medium">
            Founder @ WallnutFlow
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We build automation systems that help agencies fill their calendars with high-quality prospects while they focus on delivery. 
            Started as a one-person operation — now a performance-first outreach studio.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="https://www.linkedin.com/in/sachin-g-989790304"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-700 transition-all"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


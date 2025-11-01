'use client';
import Image from 'next/image';
import Step from './sub/Step';

export default function HowWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        How we <span className="text-orange-600">work</span>
      </h2>

      {/* Main Content */}
      <div className="mt-16 bg-white rounded-2xl shadow-md p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Image Area */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-56 md:h-72 rounded-xl flex items-center justify-center border overflow-hidden">
              <Image
                src="/automation.jpg"
                alt="Automation workflow diagram"
                width={450}
                height={260}
                className="object-contain opacity-90"
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="w-full md:w-1/2 space-y-10">
            <Step
              number={1}
              title="ICP Research"
              desc="We map the right roles, company size, geography, and intent signals for perfect buyers."
            />
            <Step
              number={2}
              title="Automation Setup"
              desc="We configure domains, warm inboxes, create multi-step sequences, and set up the scheduling flow."
            />
            <Step
              number={3}
              title="Optimize & Scale"
              desc="We analyze replies, A/B test subject lines, and scale outreach volume while preserving deliverability."
            />
          </div>

        </div>
      </div>
    </section>
  );
}



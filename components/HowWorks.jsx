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
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Diagram */}
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-56 md:h-64 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden">
                <Image
                  src="/automation-diagram.png"
                  alt="Automation workflow diagram"
                  width={420}
                  height={240}
                  className="object-contain opacity-90"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="w-full md:w-1/2 space-y-8">
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

        {/* Optional Side Card or Empty Column (for balance on large screens) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}


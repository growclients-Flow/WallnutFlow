'use client';
import Image from 'next/image';
import Step from './sub/Step';
import Stat from './sub/Stat';

export default function HowWorks(){
  return (
    <section id="how" className="max-w-5xl mx-auto px-6 md:px-16 mt-20">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center">How we <span className="text-wallnut">works</span></h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow">
          <div className="flex gap-6 items-start">
            <div className="w-1/2">
              <div className="w-full h-56 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                <Image src="/automation-diagram.png" alt="diagram" width={420} height={220} className="object-contain" />
              </div>
            </div>

            <div className="w-1/2 space-y-6">
              <Step number={1} title="ICP Research" desc="We map the right roles, company size, geography and intent signals for perfect buyers." />
              <Step number={2} title="Automation Setup" desc="Domain, 3 inboxes, warmup, multi-step email sequences and scheduling flow." />
              <Step number={3} title="Optimize & Scale" desc="We analyze replies, A/B test subject lines, and scale volume while preserving deliverability." />
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-2xl p-6 shadow text-sm">
          <div className="text-gray-500">Fast facts</div>
          <div className="mt-3 space-y-3">
            <Stat label="Leads per month" value="600–800" />
            <Stat label="Email volume" value="3k–4k / month" />
            <Stat label="Target result" value="15+ qualified calls / month" />
          </div>

          <a href="https://calendly.com/wallnutflow" target="_blank" rel="noreferrer" className="mt-6 inline-block w-full text-center bg-wallnut text-white py-2 rounded-lg font-semibold">Apply for early slot</a>
        </aside>
      </div>
    </section>
  );
}

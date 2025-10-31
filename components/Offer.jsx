'use client';
export default function Offer(){
  return (
    <section id="offer" className="max-w-5xl mx-auto px-6 md:px-16 mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold">Early Partner Program</h2>
          <p className="mt-3 text-gray-600">First 5 agencies get a full Proof-of-Concept month for <span className="font-semibold">$199</span>. Includes full setup, running, and weekly reports. Continue at <span className="font-semibold">$1000/mo</span> after month one.</p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✅ 3 inboxes & warmed domains</li>
            <li>✅ 600–800 verified ICP leads setup</li>
            <li>✅ 4–5 email sequence & booking flow</li>
            <li>✅ Weekly call + transparent reporting</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="https://calendly.com/wallnutflow" className="bg-gradient-to-r from-wallnut to-orange-500 text-white px-5 py-3 rounded-full font-semibold">Apply for partner slot</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-gray-200">Contact us</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="text-sm text-gray-500">Proof-of-Concept</div>
          <div className="mt-3 text-3xl font-bold">$199</div>
          <div className="mt-2 text-sm text-gray-600">One-time (first 5 agencies)</div>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>✅ Setup & Launch</li>
            <li>✅ First month delivery</li>
            <li>✅ Weekly reporting</li>
          </ul>

          <a href="https://calendly.com/wallnutflow" className="mt-6 block text-center bg-wallnut text-white rounded-full py-3 font-semibold">Get early access</a>
        </div>
      </div>
    </section>
  );
}

'use client';
export default function Contact(){
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 md:px-16 mt-6 mb-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-50">
        <h3 className="text-xl font-bold">Start your Proof-of-Concept</h3>
        <p className="mt-2 text-gray-600">Fill the quick form and we’ll setup a kickoff call within 48 hours.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border border-gray-100 rounded-lg" placeholder="Full name" />
          <input className="p-3 border border-gray-100 rounded-lg" placeholder="Business / Agency name" />
          <input className="p-3 border border-gray-100 rounded-lg col-span-2" placeholder="Work email" />
          <input className="p-3 border border-gray-100 rounded-lg" placeholder="Website / LinkedIn" />
          <input className="p-3 border border-gray-100 rounded-lg" placeholder="Calendly link (optional)" />

          <textarea className="p-3 border border-gray-100 rounded-lg col-span-2" placeholder="Describe your ideal client (ICP) & offer"></textarea>

          <div className="col-span-2 flex items-center gap-3">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="text-sm text-gray-600">I confirm payment of $199 (one-time) for Proof-of-Concept month</label>
          </div>

          <button type="button" className="col-span-2 bg-wallnut text-white py-3 rounded-full font-semibold">Start Proof-of-Concept</button>
        </form>
      </div>
    </section>
  );
}

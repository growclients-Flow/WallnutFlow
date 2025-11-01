'use client';

export default function Deliverability() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        Our <span className="text-orange-600">Deliverability</span> Process
      </h2>

      {/* Content Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Diagram / Video Placeholder */}
        <div className="col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex items-center justify-center">
          <div className="w-full h-60 md:h-72 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 text-sm md:text-base">
              [Deliverability video / diagram placeholder]
            </span>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col justify-center">
          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            What we check
          </h4>
          <p className="text-base text-gray-600 leading-relaxed">
            DKIM, SPF, and DMARC alignment. Warm-up sequences, inbox
            engagement monitoring, and spam-trap avoidance — all to maintain
            top-tier deliverability across campaigns.
          </p>
        </div>
      </div>
    </section>
  );
}


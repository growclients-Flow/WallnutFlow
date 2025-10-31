'use client';
export default function Deliverability(){
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
      <h3 className="font-semibold text-lg">Our Deliverability Process</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-white rounded-xl shadow p-6">
          <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
            <div className="text-gray-400">[Deliverability video / diagram]</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="space-y-4">
            <div className="font-semibold">What we check</div>
            <div className="text-sm text-gray-600">DKIM / SPF / DMARC, warmup sequence, engagement monitoring and spam-trap avoidance.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

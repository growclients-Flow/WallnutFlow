'use client';

export default function Deliverables() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
      {/* Section Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        Our <span className="text-orange-600">Deliverables</span>
      </h2>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
        Everything your agency gets when you partner with WallnutFlow — built for results, transparency, 
        and long-term ROI. Whether you’re on the <span className="font-semibold text-gray-800">$199 Early Partner Offer</span> 
        or our <span className="font-semibold text-gray-800">Regular Plan ($700 + $1000/mo)</span>, you get a complete 
        done-for-you cold email automation system that delivers consistent, qualified sales calls every month.
      </p>

      {/* Deliverables Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            emoji: "🚀",
            title: "Automation Setup",
            desc: "3 fully warmed inboxes, custom domain, and a complete outreach system that runs on autopilot for your agency.",
          },
          {
            emoji: "🎯",
            title: "ICP Research & Lead Enrichment",
            desc: "600–800 verified, ideal client leads scraped and enriched monthly using Apollo.io + NeverBounce for accuracy.",
          },
          {
            emoji: "✉️",
            title: "Cold Email Sequences",
            desc: "High-converting, personalized 4–6 email copy sequences crafted to attract and convert high-intent prospects.",
          },
          {
            emoji: "📅",
            title: "Qualified Booked Calls",
            desc: "Expect 10–20 qualified booked calls every month — each verified and tracked transparently before delivery.",
          },
          {
            emoji: "📊",
            title: "Weekly Reporting",
            desc: "Detailed breakdown of deliverability, open/reply rates, and booked calls so you can monitor growth weekly.",
          },
          {
            emoji: "💼",
            title: "Ownership & Migration",
            desc: "After the campaign proves ROI, we hand over full access — your inboxes, leads, automations, and sequences.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all"
          >
            <div className="text-3xl">{item.emoji}</div>
            <h4 className="mt-3 font-semibold text-gray-900 text-lg">{item.title}</h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Offer Comparison Box */}
      <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
          Choose your partnership plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Early Partner Offer */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col">
            <div className="text-sm font-semibold text-orange-600 mb-2">Limited — First 5 Agencies</div>
            <h4 className="text-2xl font-bold text-gray-900">$199 <span className="text-base text-gray-600 font-normal">one-time</span></h4>
            <p className="mt-3 text-sm text-gray-600 flex-1">
              Includes full system setup, email sequences, domain warm-up, and first month of results. 
              If satisfied, continue at <span className="font-semibold">$1000/month</span>.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>✅ Full setup included</li>
              <li>✅ 600–800 leads & 3 inboxes</li>
              <li>✅ 4–6 email sequence + funnel</li>
              <li>✅ $149 worth free gifts if not satisfied</li>
            </ul>

            <a
              href="https://calendly.com/your-early-partner-link"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-3 rounded-4xl font-semibold shadow-md hover:scale-105 transition-all"
            >
              Choose plan →
            </a>
          </div>

          {/* Regular Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col">
            <div className="text-sm font-semibold text-gray-500 mb-2">Standard Plan</div>
            <h4 className="text-2xl font-bold text-gray-900">$700 <span className="text-base text-gray-600 font-normal">upfront</span> + $1000/mo</h4>
            <p className="mt-3 text-sm text-gray-600 flex-1">
              Ideal for agencies ready to scale outreach instantly with proven automation and weekly performance tracking.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>✅ Full setup + launch</li>
              <li>✅ 20+ qualified calls / month</li>
              <li>✅ Dedicated performance tracking</li>
              <li>✅ Priority support + scaling guidance</li>
            </ul>

            <a
              href="https://calendly.com/your-regular-plan-link"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-3 rounded-4xl font-semibold shadow-md hover:scale-105 transition-all"
            >
              Book a call →
            </a>
          </div>
        </div>
      </div>

      {/* Satisfaction Guarantee Section */}
<div className="mt-10 flex flex-col md:flex-row items-center justify-between bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
  <div>
    <h4 className="text-lg font-semibold text-gray-900">
      Is you didn’t satisfied with the result in this 30 days?? Don’t worry.
    </h4>
    <p className="text-gray-600 text-sm mt-1">
      You can get <span className="font-semibold">$149 worth free resources</span> here
      <span className="text-gray-400"> -------➤ </span>
      <a
        href="https://wallnutflow.com/free-resources"
        target="_blank"
        rel="noreferrer"
        className="text-purple-600 font-medium hover:underline"
      >
        click here
      </a>
    </p>
  </div>

  <a
    href="https://wallnutflow.com/about-offer"
    target="_blank"
    rel="noreferrer"
    className="mt-4 md:mt-0 inline-block bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all"
  >
    About this offer
  </a>
</div>

    </section>
  );
}




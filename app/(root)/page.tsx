import Link from "next/link";
import Image from "next/image"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans text-black">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 md:px-20 py-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Wallnut<span className="text-orange-500">.</span>
        </h1>

        <nav className="flex items-center space-x-8 text-sm md:text-base font-medium">
          <Link href="#services" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="#process" className="hover:text-orange-500 transition-colors">How We Works</Link>
          <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
          <Link
            href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-sm"
          >
            Book a Call
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="px-10 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Book <span className="text-orange-500">10–20 Qualified</span> Sales Calls Every Month.
          </h2>
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            We help <strong>Digital Marketing Agencies</strong> fill their calendars with ready-to-buy clients using a proven
            & fully automated <span className="text-orange-500 font-semibold">Email + LinkedIn Outreach System</span>.
          </p>
          <Link
            href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
          >
            Book a Call
          </Link>
        </div>

        {/* Right Preview Video Section */}
        <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-white to-gray-100 rounded-3xl blur-3xl opacity-70"></div>
          <div className="relative z-10 w-full h-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-2xl"
              controls>
              <source src="/preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>


      {/* About / What We Do */}
      <section id="services" className="px-10 md:px-20 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">What We Do</h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We build <strong>automated client acquisition systems</strong> for digital marketing agencies — combining
          <span className="text-orange-500 font-semibold"> LinkedIn outreach + Email campaigns </span>
          to generate predictable booked calls every month.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold mb-3 text-orange-500">1️⃣ Research & Targeting</h4>
            <p className="text-gray-600">We identify decision-makers in your exact niche with purchasing power and intent.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold mb-3 text-orange-500">2️⃣ Personalized Outreach</h4>
            <p className="text-gray-600">AI-powered messages crafted for natural responses, not spam — so you stand out.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold mb-3 text-orange-500">3️⃣ Automation & Reporting</h4>
            <p className="text-gray-600">We handle the tech setup, sequences, and performance tracking — all done-for-you.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="px-10 md:px-20 py-20 bg-gray-50 text-center">
        <h3 className="text-4xl font-bold mb-6">How It Works</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our system is simple but powerful — designed for agencies that want clients on autopilot.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-bold text-orange-500 mb-2">Step 1</h4>
            <p className="text-gray-600">We onboard you, understand your offer, and define your perfect client persona.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-bold text-orange-500 mb-2">Step 2</h4>
            <p className="text-gray-600">We build your LinkedIn + email system — everything runs hands-free for you.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-bold text-orange-500 mb-2">Step 3</h4>
            <p className="text-gray-600">Leads start flowing in 7–14 days. You’ll see booked calls directly on your calendar.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-bold text-orange-500 mb-2">Step 4</h4>
            <p className="text-gray-600">We continuously optimize the campaigns for better reply rates and conversions.</p>
          </div>
        </div>
      </section>

      {/* Early Access / Social Proof Alternative */}
      <section className="px-10 md:px-20 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Be One of the First Agencies to Use It</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          This system is based on frameworks used by top 6-figure agencies — now being opened for a few early clients at a
          special <strong>Founder’s Rate</strong>. Limited spots to ensure results.
        </p>

        <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold mb-4 text-orange-500">🔥 Founder’s Offer</h4>
          <p className="text-gray-700 mb-6">
            We’re currently onboarding our first 10 agencies at a discounted rate — to build success stories and long-term partnerships.
          </p>
          <Link
            href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
            className="bg-orange-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-md"
          >
            Claim Your Spot →
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-10 md:px-20 py-20 text-center bg-gray-50">
        <h3 className="text-4xl font-bold mb-6">Simple Pricing</h3>
        <p className="text-gray-600 mb-10">No contracts. No BS. Just predictable growth.</p>

        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
          <h4 className="text-2xl font-bold mb-2 text-orange-500">$500 / Month</h4>
          <p className="text-gray-600 mb-6">We build & manage your entire outreach system, bringing 10–20 qualified calls every month.</p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✅ Done-for-you setup</li>
            <li>✅ LinkedIn + Email Automation</li>
            <li>✅ Lead Qualification System</li>
            <li>✅ Weekly Reports</li>
          </ul>
          <Link
            href="https://calendar.app.google/utoRhRPhPQFRAqKd8"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-md"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* CTA Section */}
<section
  id="call"
  className="relative px-6 md:px-20 py-16 bg-white border-4 border-orange-500 rounded-3xl max-w-6xl mx-auto my-20 shadow-lg"
>
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Left Text Content */}
    <div className="space-y-5">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
        Ready to Fill Your Calendar with{" "}
        <span className="text-orange-500">Qualified</span> Sales Calls?
      </h2>
      <p className="text-gray-600 text-base md:text-lg max-w-md">
        Stop wasting time guessing how to get leads. In just 7 days, we’ll set up
        your automated outreach system that keeps delivering month after month.
      </p>

      <a
        href="https://calendar.app.google/utoRhRPhPQFRAqKd8" // Replace with your Calendly or booking URL
        target="_blank"
        className="inline-block bg-orange-500 text-white font-semibold text-base md:text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition-all shadow-md"
      >
        Book a Strategy Call
      </a>
    </div>

    {/* Right Visual Placeholder */}
      <div className="bg-gray-200 rounded-xl h-52 md:h-60 flex items-center justify-center overflow-hidden">
      {/* You can replace this placeholder with an image, animation, or testimonial */}
      <Image
        src="/preview.jpg"
        alt="Service preview"
        width={600}
        height={400}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  </div>
</section>

{/* Onboarding Form CTA Section */}
<section className="px-10 md:px-20 py-20 bg-orange-50 text-center rounded-3xl my-16">
  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
    Get Started With Your Onboarding
  </h3>
  <p className="text-gray-700 max-w-2xl mx-auto mb-8">
    Fill out the form below and our team will set up your automated outreach system in no time.
  </p>

  <a
    href="https://forms.gle/hu4KysNp5pj7eKD36"
    target="_blank"
    className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-all shadow-md"
  >
    Go to Onboarding Form →
  </a>
</section>


      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Wallnut Outreach — All rights reserved.
      </footer>
    </div>
  );
}





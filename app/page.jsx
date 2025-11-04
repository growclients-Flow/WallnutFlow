'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowWorks from '../components/HowWorks';
import Process from '../components/Process';
import Founder from '../components/Founder';
import Deliverability from '../components/Deliverability';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowWorks />
        <Process />
        <Founder />

        {/* Tools Image Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 mt-28">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex justify-center">
            <Image
              src="/tools.png"
              alt="Tools preview diagram"
              width={1000}
              height={500}
              className="rounded-xl object-contain opacity-100"
              priority
            />
          </div>
        </section>

        <Deliverability />
        {/* FINAL CTA SECTION */}
<section className="max-w-6xl mx-auto px-6 md:px-16 mt-30 mb-24 text-center">
  <div className="bg-gradient-to-br from-orange-500 to-purple-600 text-white rounded-3xl p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
    {/* Glow effect */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Ready to Get <span className="text-yellow-300">15+ Qualified Sales Calls</span> Every Month?
    </h2>
    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
      Let’s build your outreach system once — and let it bring you clients every month.
      No stress. No hiring. No wasted ad spend. Just results.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://calendly.com/growclients-wallnut/30min"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-all"
      >
        🚀 Book Your Free Strategy Call
      </a>

      <Link
        href="/Offer"
        className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all"
      >
        View $199 Early Offer
      </Link>
    </div>
  </div>
</section>
      </main>

      {/* FOOTER SECTION */}
<footer className="bg-gray-50 border-t border-gray-200 mt-20">
  <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* BRAND SECTION */}
    <div>
      <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
        Wallnut<span className="text-orange-600">Flow.</span>
      </h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        We help Digital Marketing Agencies get 15+ qualified sales calls every month — 
        without lifting a finger. Fully automated, fully done-for-you.
      </p>

      <div className="flex items-center gap-3 mt-5">
        <a
          href="https://www.instagram.com/wallnutflow/" // replace with your real link
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:scale-110 hover:border-orange-500 transition-all shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-700 hover:text-orange-600"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.25 2.242 1.311 3.608.058 1.266.07 1.646.07 4.848s-.012 3.584-.07 4.85c-.061 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.25-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.336-3.608-1.311-.975-.975-1.25-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.061-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.25 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.731.348 3.853 1.226 2.975 2.104 2.758 3.144 2.699 4.425.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.281.276 2.321 1.154 3.199.878.878 1.918 1.095 3.199 1.154 1.281.059 1.69.072 4.948.072s3.668-.013 4.948-.072c1.281-.059 2.321-.276 3.199-1.154.878-.878 1.095-1.918 1.154-3.199.059-1.281.072-1.69.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.276-2.321-1.154-3.199-.878-.878-1.918-1.095-3.199-1.154C15.668.013 15.259 0 12 0z" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/sachin-g-989790304/" // replace with your real link
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:scale-110 hover:border-blue-500 transition-all shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-700 hover:text-blue-600"
          >
            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.06 20.452H3.908V9.05h3.152v11.402zM5.484 7.641a1.822 1.822 0 110-3.644 1.822 1.822 0 010 3.644zM20.452 20.452h-3.149v-5.563c0-1.327-.024-3.033-1.848-3.033-1.85 0-2.134 1.445-2.134 2.94v5.656h-3.15V9.05h3.023v1.556h.043c.421-.798 1.45-1.642 2.987-1.642 3.193 0 3.783 2.103 3.783 4.834v6.654z" />
          </svg>
        </a>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#services" className="hover:text-orange-600 transition">Our Services</a></li>
        <li><a href="#process" className="hover:text-orange-600 transition">Our Process</a></li>
        <li><a href="#offer" className="hover:text-orange-600 transition">Special Offer</a></li>
        <li><a href="#contact" className="hover:text-orange-600 transition">Contact Us</a></li>
      </ul>
    </div>

    {/* CONTACT INFO */}
    <div>
      <h4 className="font-semibold text-gray-800 mb-3">Get in Touch</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>📧 support@wallnut.info</li>
        <li>🌍 <a href="https://www.wallnut.info/" className="hover:text-orange-600 transition">www.wallnut.info</a></li>
        <li>📍 India</li>
      </ul>
    </div>
  </div>

  {/* BOTTOM LINE */}
  <div className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
    © {new Date().getFullYear()} WallnutFlow — All rights reserved.
  </div>
</footer>

    </div>
  );
}








     
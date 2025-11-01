'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowWorks from '../components/HowWorks';
import Process from '../components/Process';
import Founder from '../components/Founder';
import Deliverability from '../components/Deliverability';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * ✅ Note:
 * - If you're using Next.js 13+ (App Router), don't use `next/head` in client files.
 *   Instead, define page metadata in `export const metadata = { title, description }`
 *   inside your `page.jsx`.
 */

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
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}








     
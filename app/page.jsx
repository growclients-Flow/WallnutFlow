'use client';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowWorks from '../components/HowWorks';
import Process from '../components/Process';
import Founder from '../components/Founder';
import Tools from '../components/Tools';
import Deliverability from '../components/Deliverability';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>WallnutFlow — Qualified Calls for Agencies</title>
        <meta name="description" content="We build automated cold email funnels that book 15+ qualified calls/month for agencies." />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <HowWorks />
          <Process />
          <Founder />
          <Tools />
          <Deliverability />
          <Offer />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}







     
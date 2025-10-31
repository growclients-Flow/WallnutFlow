'use client';
import { motion } from 'framer-motion';

const cards = [
  { title: "Done-for-you Outreach", desc: "We run cold email + follow-ups on warmed domains and book qualified calls." },
  { title: "ICP Research", desc: "Targeted lists from Apollo and Clay — verified with NeverBounce." },
  { title: "Qualification & Booking", desc: "We route calls through our scheduling flow and pre-qualify with forms." },
  { title: "Weekly Reporting", desc: "Transparent weekly stats: sends, replies, bookings, and optimizations." }
];

export default function Services(){
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 md:px-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-bold text-lg">What we <span className="text-wallnut">serve</span> you</h3>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="font-semibold">Done-for-you Outreach</div>
              <p className="text-sm text-gray-500 mt-1">We run cold email + follow-ups on warmed domains and book qualified calls.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="font-semibold">ICP Research</div>
              <p className="text-sm text-gray-500 mt-1">Targeted lists from Apollo and Clay — verified with NeverBounce.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="font-semibold">Qualification & Booking</div>
              <p className="text-sm text-gray-500 mt-1">We route calls through our scheduling flow and pre-qualify with forms.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="font-semibold">Weekly Reporting</div>
              <p className="text-sm text-gray-500 mt-1">Transparent weekly stats: sends, replies, bookings, and optimizations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

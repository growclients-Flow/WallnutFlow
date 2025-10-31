'use client';
import React from 'react';

export default function Header(){
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-5 max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="text-xl md:text-2xl font-extrabold text-wallnut">WallnutFlow.</div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-gray-700">
        <a href="#services" className="hover:text-wallnut transition">Services</a>
        <a href="#how" className="hover:text-wallnut transition">How it works</a>
        <a href="#process" className="hover:text-wallnut transition">Process</a>
        <a href="#offer" className="hover:text-wallnut transition">Offer</a>
        <a href="#contact" className="hover:text-wallnut transition">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="hidden md:inline-block text-sm text-gray-600">wallnutflow.com</a>
        <a href="https://calendly.com/wallnutflow" target="_blank" rel="noreferrer"
           className="inline-block bg-gradient-to-r from-wallnut to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all">
          Book a call
        </a>
      </div>
    </nav>
  );
}

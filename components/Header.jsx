'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-5 shadow-sm">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-orange-600">
        WallnutFlow <span className="text-2xl text-black">.</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
        <a href="#services" className="hover:text-orange-600 transition">Services</a>
         <Link href="../Docs" className="hover:text-orange-600 transition">
          Docs
        </Link>
        <a href="#how-it-works" className="hover:text-orange-600 transition">How it works</a>
        <a href="#contact" className="hover:text-orange-600 transition">Contact us</a>
      </div>

      {/* Button */}
      <a
        href="https://calendly.com/wallnutflow"
        target="_blank"
        rel="noreferrer"
        className="bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-orange-700 transition"
      >
        Book a free call
      </a>
    </nav>
  );
}


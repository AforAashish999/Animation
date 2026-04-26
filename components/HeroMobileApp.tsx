'use client'

import { ArrowRight } from 'lucide-react'

export default function HeroMobileApp() {
  return (
    <section className="w-full bg-[#0B0B0B] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-orange-500">Mobile app</span>
            <br />
            development simplified
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            From idea to app store, we build high-performance mobile apps that
            users love. Native or cross-platform, we deliver scalable,
            secure, and feature-rich solutions.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold flex items-center gap-2">
            Start Your App Journey
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-orange-500/20"></div>

            {/* Infinity SVG */}
            <svg
              viewBox="0 0 500 250"
              className="relative w-full h-full"
            >
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>

              {/* Infinity Path */}
              <path
                d="M100,125 
                   C100,50 200,50 250,125 
                   C300,200 400,200 400,125 
                   C400,50 300,50 250,125 
                   C200,200 100,200 100,125"
                fill="none"
                stroke="url(#orangeGradient)"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Labels */}
              <text x="140" y="60" fill="#fff" fontSize="14">PLAN</text>
              <text x="80" y="140" fill="#fff" fontSize="14">DESIGN</text>
              <text x="170" y="200" fill="#fff" fontSize="14">DEVELOP</text>
              <text x="290" y="200" fill="#fff" fontSize="14">TEST</text>
              <text x="360" y="140" fill="#fff" fontSize="14">DEPLOY</text>
              <text x="300" y="60" fill="#fff" fontSize="14">LAUNCH</text>
            </svg>

          </div>
        </div>
      </div>
    </section>
  )
}
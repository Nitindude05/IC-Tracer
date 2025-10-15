import React from "react";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('/src/assets/img/learn-bg.jpg')", // 🔧 replace with your background image
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-5xl font-bold text-teal-400 mb-6">
          Learn More About Us
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Inteco Electronics is a forward-thinking technology company
          specializing in high-performance PCB design, embedded systems,
          and hardware innovation. Our mission is to engineer precision
          and deliver excellence in every product we create.
        </p>

        <p className="text-gray-300 mb-12">
          We’re driven by passion, guided by quality, and committed to 
          building sustainable electronic solutions that empower industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#our-vision"
            className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all"
          >
            Our Vision
          </a>

          <a
            href="#our-mission"
            className="bg-transparent border border-teal-400 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all"
          >
            Our Mission
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-16">
          <Link
            to="/"
            className="text-teal-400 hover:text-teal-300 text-lg font-medium underline underline-offset-4 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

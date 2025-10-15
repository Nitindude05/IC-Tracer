import React from "react";
import { ShieldCheck, Globe2, Headphones } from "lucide-react";
import img1 from '../assets/img-IC.png'
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-left">
        Detect Counterfeits Before They Cost You <br></br>
       
        </h1>
        <p className="text-lg md:text-xl font-medium text-left">
         
        </p>
        <p className="text-base md:text-lg mt-2 font-medium text-left">
          A smart detection framework leveraging computer vision and <br></br>neural networks to differentiate between genuine and fake integrated circuits with precision and efficiency.
        </p>
        <p className="mt-4 text-sm uppercase tracking-wider font-bold text-gray-200 text-right">
         <br></br>
         <br></br>
        </p>

        <Link
  to="/learn-more"
  className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all"
>
  Learn More
</Link>
      </div>

      {/* Bottom Feature Links */}
      <div className="absolute bottom-10 right-10 z-10 flex flex-wrap justify-end bg-white/90 backdrop-blur-md rounded-2xl px-8 py-4 space-x-8 text-gray-900 shadow-lg">
        <a
          href="#quality-control"
          className="flex items-center space-x-2 hover:text-teal-600 transition"
        >
          <ShieldCheck className="w-6 h-6" />
          <span className="font-medium">Quality Control</span>
        </a>
        <a
          href="#timely-delivery"
          className="flex items-center space-x-2 hover:text-teal-600 transition"
        >
          <Globe2 className="w-6 h-6" />
          <span className="font-medium">Timely Delivery</span>
        </a>
        <a
          href="#support"
          className="flex items-center space-x-2 hover:text-teal-600 transition"
        >
          <Headphones className="w-6 h-6" />
          <span className="font-medium">Support 24/7</span>
        </a>
      </div>
    </section>
  );
}

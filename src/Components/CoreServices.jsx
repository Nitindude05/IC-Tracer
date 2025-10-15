import { Scan, Search, Handshake, Share2 } from "lucide-react";
import React from "react";

const services = [
  { 
    title: "Know About Your IC", 
    description: "Scan and identify your integrated circuit instantly. Our system analyzes IC markings, datasheets, and packaging to verify authenticity and ensure it matches manufacturer specifications.", 
    icon: <Scan size={50} />, 
    link: "/service/basic-parts" 
  },
  { 
    title: "Search your IC", 
    description: "We specialize in sourcing hard-to-find, obsolete, and End-of-Life components from trusted global suppliers — ensuring traceable, quality-assured parts for your production needs.", 
    icon: <Search size={50} />, 
    link: "/service/eol-parts" 
  },
  { 
    title: "Alternative Solutions", 
    description: "Can’t find your original component? Our experts provide compatible and reliable alternative IC solutions without compromising on performance or reliability.", 
    icon: <Handshake size={50} />, 
    link: "/service/alternative-solution" 
  },
  { 
    title: "PCBA Projects", 
    description: "From prototype to production — we offer complete PCB assembly and testing support using verified, genuine electronic components to ensure top-notch quality and efficiency.", 
    icon: <Share2 size={50} />, 
    link: "/service/pcba-projects" 
  }
];

export default function CoreServices() {
  return (
    <section className="bg-[#0b1b23] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Our Core Services include:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group bg-[#10242e] border border-cyan-500/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-105"
            >
              <div className="bg-teal-600 text-white rounded-full p-4 mb-6 group-hover:bg-cyan-500 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

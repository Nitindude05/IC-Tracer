import React from "react";

export default function EOLParts() {
  return (
    <div className="min-h-screen bg-[#0b1b23] flex flex-col justify-center items-center text-center text-white px-6">
      <h1 className="text-5xl font-bold text-teal-400 mb-6">
        Sourcing Obsolete / EOL Parts
      </h1>
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        We specialize in sourcing hard-to-find, obsolete, or end-of-life (EOL)
        components through a trusted global network to keep your production
        moving.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Global Supplier Network
          </h3>
          <p>Access to hundreds of verified suppliers worldwide.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Verified Authenticity
          </h3>
          <p>Rigorous inspection ensures parts are genuine and reliable.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Continuity Support
          </h3>
          <p>We help you avoid downtime caused by obsolete components.</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function PCBAProjects() {
  return (
    <div className="min-h-screen bg-[#0b1b23] flex flex-col justify-center items-center text-center text-white px-6">
      <h1 className="text-5xl font-bold text-teal-400 mb-6">
        PCBA Projects
      </h1>
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        We deliver full PCBA (Printed Circuit Board Assembly) services — from
        design, sourcing, and prototyping to mass production and testing.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Complete Manufacturing
          </h3>
          <p>We handle every step from PCB fabrication to assembly.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Prototype to Production
          </h3>
          <p>Flexible quantities and fast turnaround for prototypes or volume runs.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Testing & Quality
          </h3>
          <p>End-to-end inspection ensures flawless output and reliability.</p>
        </div>
      </div>
    </div>
  );
}

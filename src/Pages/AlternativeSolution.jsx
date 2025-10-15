import React from "react";

export default function AlternativeSolution() {
  return (
    <div className="min-h-screen bg-[#0b1b23] flex flex-col justify-center items-center text-center text-white px-6">
      <h1 className="text-5xl font-bold text-teal-400 mb-6">
        Alternative Solutions
      </h1>
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        Our experts help you find cost-effective, compatible alternatives
        without compromising quality or performance. Perfect for cost-sensitive
        projects.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Technical Support
          </h3>
          <p>Our engineers assist in cross-referencing and component matching.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Cost Reduction
          </h3>
          <p>Save up to 30% by sourcing compatible, verified alternatives.</p>
        </div>
        <div className="bg-[#10242e] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-teal-400 mb-3">
            Reliability Tested
          </h3>
          <p>All replacements undergo strict quality and compatibility checks.</p>
        </div>
      </div>
    </div>
  );
}

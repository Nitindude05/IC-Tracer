import React, { useEffect, useState } from "react";
import bgImage from "../assets/Hightechheader24.jpg";

const stats = [
  { id: 1, value: 0, label: "Project Finished"},
  { id: 2, value: 0, label: "Items Supplied" },
  { id: 3, value: 0, label: "Client Happy" },
  { id: 4, value: 0, label: "Countries of the Clients"},
];

const MagicNumbers = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // total duration (ms)
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const increment = stats[i].value / steps;
          const newCount = count + increment;
          return newCount < stats[i].value ? newCount : stats[i].value;
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-fixed bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: `url(https://imgs.search.brave.com/3ne-OVCwcgLPgFDesbh2wt2-iVKEnWlBD4EQyN_75kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzk0LzQ5Lzk2/LzM2MF9GXzQ5NDQ5/OTY4M19NOVdmRmNK/RTN1anZKcVVqeUJG/SzFDNnlXakNsSjE1/OS5qcGc)`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <p className="text-[#2CB1A6] uppercase font-semibold tracking-widest mb-3">
          Fun Fact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Magic Number</h2>
        <p className="text-gray-300 mb-16">
          You’re not just a number to us – you’re one of our most honored and happy customers!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 justify-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="text-5xl mb-4 opacity-80">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-[#2CB1A6]">
                {Math.floor(counts[index])}
                <span className="text-[#2CB1A6] text-2xl align-super">+</span>
              </h3>
              <p className="mt-2 text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicNumbers;

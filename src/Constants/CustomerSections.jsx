import React, { useState } from "react";

const CustomerSections = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0D1B24] text-white font-sans space-y-24 py-16 px-8 md:px-24">
      {/* Section 1: Intec Customers */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#2CB1A6] mb-4">Inteco Customers</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            <strong>Inteco Electronics’</strong> customers span across diverse sectors of the electronics market.
            While we primarily serve clients in the <strong>Industrial, Automotive, and Telecommunications</strong>{" "}
            industries, we also support OEMs and EMS providers.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Our expertise extends across sectors such as{" "}
            <strong>
              Medical Devices, Industry Products, Consumer Electronics, and Renewable Energy
            </strong>
            , ensuring reliable and efficient supply chain solutions.
          </p>
        </div>

        {/* Customer Image Section */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          style={{
            backgroundImage:
              "url('https://imgs.search.brave.com/jNUOh2qjMOJ56RePK6OyPQmx7lvmxLPvUpDKRzXjID4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/NzA0Nzg0OS9waG90/by9hYnN0cmFjdC1j/aXJjdWl0LWJvYXJk/LXdpdGgtYS1sb3Qt/b2YtbWljcm8tY2hp/cHMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWFRcVhkNjc5/ZjlVVTE3VHhHOWRr/ZVI0NWpfcm5Ed3Na/REJZWnlxRWpjc1k9')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-wrap items-center justify-center text-lg font-semibold">
            {/* {[
              "Industry",
              "Consumer Electronics",
              "Gaming",
              "Automotive",
              "Automation",
              "Computing",
              "Medical",
              "IoT",
              "Oil and Gas",
            ].map((item) => (
              // <span
              //   key={item}
              //   className="m-3 bg-white/10 px-4 py-2 rounded-full hover:bg-[#2CB1A6]/30 cursor-pointer transition-all"
              // >
              //   {item}
              // </span>
            ))} */}
          </div>
        </div>
      </div>

      {/* Section 2: Partner You Can Rely On */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
          alt="Partner"
          className="rounded-xl shadow-md w-full h-[450px] object-cover"
        />
        <div>
          <p className="text-[#2CB1A6] font-semibold mb-2">Why Choose INTECO</p>
          <h2 className="text-4xl font-bold mb-4">Partner You Can Rely On</h2>
          <p className="text-gray-300 mb-6">
            Choosing INTECO means selecting a reliable and committed partner who stands by your side,
            helping you achieve your business goals with confidence and excellence.
          </p>

          <div className="space-y-3">
            {[
              {
                title: "High Quality Standard – 100% New & Original",
                content:
                  "We guarantee only authentic and new parts from verified manufacturers and distributors.",
              },
              {
                title: "Timely Delivery Ensured – Ship within 1–2 Days",
                content: "Our logistics ensure express shipment for time-critical components.",
              },
              {
                title: "Quality Assurance – Support 1-Year Warranty",
                content: "Every product is inspected and backed by a full 1-year warranty.",
              },
              {
                title: "Customer-Centered Mindset – Be Your Trusted Partner",
                content:
                  "We prioritize your satisfaction through transparent communication and long-term collaboration.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#1E3A46] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-[#2CB1A6]/20 transition focus:outline-none"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Quality Assurance */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-3">Quality Assurance</h2>
          <p className="uppercase text-sm tracking-wide text-gray-400 mb-6">
            What We Support: Via Professional Third-Party Test Lab
          </p>
          <ul className="space-y-2 text-lg text-gray-200">
            {[
              "External Visual Inspection",
              "X-ray Analysis",
              "Electrical Test",
              "Function Test",
              "Decapsulation and Die Analysis",
              "Heated Solvent Test",
              "Failure Analysis",
            ].map((test) => (
              <li key={test} className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-[#2CB1A6] rounded-full"></span>
                <span>{test}</span>
              </li>
            ))}
          </ul>
        </div>

        <img
          src="https://imgs.search.brave.com/bXoTPuSgKporAnLBb1_QtWJPXCHIuvesAxaaJXbLy9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vOTk5OTgx/NC83MDU2OC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzcwNTY4ODg4/Mi1zdG9jay1waG90/by1xdWFsaXR5LWFz/c3VyYW5jZS1xdWFs/aXR5LWNvbnRyb2wt/Y29uY2VwdC5qcGc"
          alt="Quality"
          className="rounded-xl shadow-md w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default CustomerSections;

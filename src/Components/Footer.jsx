import React from "react";
// import logo from "../assets/img/inteco-logo.png"; // 🖼️ update to your logo path

const Footer = () => {
  return (
    <footer className="bg-[#0C151D] text-gray-300 py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-24 md:gap-x-16">

        {/* --- Left Section: Logo + Description --- */}
        <div>
          <img //src={logo}
           alt="Inteco Logo" className="w-36 mb-6" />
          <p className="text-sm leading-relaxed text-gray-400 mb-10">
           Empowering electronics manufacturing with intelligent IC verification and counterfeit prevention solutions.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-[#00A8A8] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#00A8A8] transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#00A8A8] transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* --- About Us --- */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">About Us.</h3>
            <div className="w-10 h-[2px] bg-[#00A8A8] mb-5"></div>
          </div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#00A8A8] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Knowledge</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Quality Assurance</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* --- Services --- */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Services.</h3>
            <div className="w-10 h-[2px] bg-[#00A8A8] mb-5"></div>
          </div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-[#00A8A8] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Knowledge</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Quality Assurance</a></li>
            <li><a href="#" className="hover:text-[#00A8A8] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Headquarter Office.</h3>
            <div className="w-10 h-[2px] bg-[#00A8A8] mb-5"></div>
          </div>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start space-x-3 leading-relaxed">
              <span className="text-[#00A8A8]">📍</span>
              <p>Samrat Ashok Technological instutite vidisha </p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#00A8A8]">📞</span>
              <a href="tel:+8613554486856" className="hover:text-[#00A8A8] transition">
                +78 5679393830
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#00A8A8]">✉️</span>
              <a href="mailto:info@intecoelectronics.com" className="hover:text-[#00A8A8] transition">
              nexvoid@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Inteco Electronics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

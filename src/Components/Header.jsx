import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 pt-6 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <img alt="Logo" className="w-10 h-10 rounded-full" /> */}
            <span className="text-white font-semibold text-lg tracking-wide">
              IC Tracer
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#home" className="hover:text-teal-300 transition-colors">Home</a>
            <a href="#services" className="hover:text-teal-300 transition-colors">Services</a>
            <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={openLogin}
              className="bg-transparent border border-teal-500 hover:bg-teal-500 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition-all"
            >
              Login
            </button>
            <button
              onClick={openSignup}
              className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition-all"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-4 border-t border-white/20">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button
              onClick={() => { setMenuOpen(false); openLogin(); }}
              className="bg-transparent border border-teal-500 hover:bg-teal-500 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition-all"
            >
              Login
            </button>
            <button
              onClick={() => { setMenuOpen(false); openSignup(); }}
              className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition-all"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* Overlay (blur background) */}
      {(showLogin || showSignup) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100]"
          onClick={closeModals}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModals}
            >
              ✕
            </button>

            {/* Login Form */}
            {showLogin && (
              <div>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Login to Your Account
                </h2>
                <form className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition-all"
                  >
                    Login
                  </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Don’t have an account?{" "}
                  <button
                    onClick={openSignup}
                    className="text-teal-600 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            )}

            {/* Signup Form */}
            {showSignup && (
              <div>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Create an Account
                </h2>
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition-all"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <button
                    onClick={openLogin}
                    className="text-teal-600 font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

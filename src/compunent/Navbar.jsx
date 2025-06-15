import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C7 12 12 22 12 22s5-10 0-20z" />
          </svg>
          <span className="font-bold text-lg text-cyan-600">Aqua Services</span>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li>
            <HashLink smooth to="#home" className="hover:text-cyan-500 transition">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="#services" className="hover:text-cyan-500 transition">Services</HashLink>
          </li>
          <li>
            <HashLink smooth to="#Testimonial" className="hover:text-cyan-500 transition">Testimonial</HashLink>
          </li>
          <li>
            <HashLink smooth to="#Contact" className="hover:text-cyan-500 transition">Contact</HashLink>
          </li>
        </ul>


      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
          {/* Close button */}
          <div className="flex justify-end px-4 py-3">
            <button onClick={() => setIsOpen(false)} className="text-cyan-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image + Menu */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
            {/* Decorative Image */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
              alt="Water Theme"
              className="w-40 h-40 object-cover rounded-full shadow-lg"
            />

            {/* Nav Links */}
            <ul className="space-y-6 text-xl font-semibold text-gray-700 text-center">
              <li><HashLink smooth to="#home" className="hover:text-cyan-500 transition" id="" onClick={() => setIsOpen(false)}>Home</HashLink></li>
              <li><HashLink smooth to="#services" className="hover:text-cyan-500 transition" id="" onClick={() => setIsOpen(false)}>Services</HashLink></li>
              <li><HashLink smooth to="#Testimonial" className="hover:text-cyan-500 transition" id="" onClick={() => setIsOpen(false)}>Testimonial</HashLink></li>
              <li><HashLink smooth to="#Contact" className="hover:text-cyan-500 transition" id="" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

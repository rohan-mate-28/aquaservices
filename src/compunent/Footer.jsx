import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
      <div> 
   {/* Wave Transition (SVG) */}
<div className="relative">
  <svg
    className="absolute -top-1 w-full h-8 text-cyan-800"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,224L1440,64L1440,320L0,320Z"
    ></path>
  </svg>
</div>

{/* Footer Section */}
<footer className="bg-cyan-800 text-white px-6 pt-12 pb-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Content */}
    <div>
      <h2 className="text-xl font-bold mb-2">AquaCare Services</h2>
      <p className="text-sm text-cyan-100">
        Clean Water. Trusted Service. Pune's Preferred Aqua Experts.
      </p>
    </div>

    {/* Right Content */}
    <div className="flex flex-col md:items-end gap-4">
      <div className="flex gap-4">
        <a
          href="https://wa.me/919604795870"
          target="_blank"
          className="text-white hover:text-cyan-300 transition"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
        <a
          href="tel:+919604795870"
          className="text-white hover:text-cyan-300 transition"
        >
          <i className="fas fa-phone-alt text-xl"></i>
        </a>
        <a
          href="sms:+919604795870"
          className="text-white hover:text-cyan-300 transition"
        >
          <i className="fas fa-comment-alt text-xl"></i>
        </a>
        
        
      </div>
      <p className="text-xs text-cyan-200">
        © 2025 AquaCare Services. All rights reserved.
      </p>
    </div>
  </div>
</footer>
</div>
  );
};

export default Footer;

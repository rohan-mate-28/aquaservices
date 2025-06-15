import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

const FinalCTA = () => {
  return (
    <section id='Contact' className="bg-cyan-600 py-12 text-white"   data-aos="fade-up">
 
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Experience Pure Water?
        </h2>
        <p className="text-lg md:text-xl">
          Get in touch now – Fast response, trusted service, and unbeatable offers in Pune!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/918237760208"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-700 hover:bg-cyan-100 font-semibold flex items-center gap-2 px-6 py-3 rounded-full transition"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp Us
          </a>
          <a
            href="tel:+918237760208"
            className="bg-white text-cyan-700 hover:bg-cyan-100 font-semibold flex items-center gap-2 px-6 py-3 rounded-full transition"
          >
            <FaPhoneAlt className="text-xl" /> Call Now
          </a>
          <a
            href="sms:+918237760208"
            className="bg-white text-cyan-700 hover:bg-cyan-100 font-semibold flex items-center gap-2 px-6 py-3 rounded-full transition"
          >
            <FaCommentDots className="text-xl" /> Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

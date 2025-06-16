import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './compunent/HeroSection';
import Navbar from './compunent/Navbar';
import ServicesSection from './compunent/ServicesSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsSection from './compunent/TestimonialsSection';
import FAQSection from './compunent/FAQSection';
import FinalCTA from './compunent/FinalCTA';
import Footer from './compunent/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Book from './compunent/Book';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServicesSection />
              <TestimonialsSection />
              <FAQSection />
              <FinalCTA />
              <Footer />
            </>
          }
        />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const aquaImages = [
  '/Aqua.webp',
  '/Aquaa.webp',
  '/aquaguard.webp',
  '/Eureka.jpg',
];
const prices = ['₹8,999', '₹10,499', '₹12,999', '₹7,899'];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const extendedImages = [...aquaImages, aquaImages[0]];
  const totalSlides = aquaImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideTo = (i, smooth = true) => {
      slider.scrollTo({
        left: i * slider.offsetWidth,
        behavior: smooth ? 'smooth' : 'auto',
      });
    };

    if (index < totalSlides) {
      slideTo(index);
    }

    if (index === totalSlides) {
      slideTo(index, true);
      setTimeout(() => {
        slideTo(0, false);
        setIndex(1);
      }, 500);
    }
  }, [index, totalSlides]);

  return (
    <section
      data-aos="fade-up"
      className="bg-gradient-to-b from-cyan-50 to-white py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-700 leading-tight">
            Clean Water, Healthier Life <br />
            <span className="text-cyan-500">Aqua Services in Pune !</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We provide RO purifier sales, installation & maintenance across Pune.
            Fast, affordable & trusted by 1000+ happy customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to="/book">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
                Book Now
              </button>
            </Link>
            <a
              href="tel:+919999999999"
              className="text-cyan-600 font-semibold border border-cyan-600 px-6 py-3 rounded-full text-sm hover:bg-cyan-50 transition"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="md:w-1/2 w-full relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-hidden rounded-xl shadow-lg h-72 md:h-96 w-full scroll-smooth"
          >
            {extendedImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <img
                    src={img}
                    alt={`Aqua ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Price Tag Overlay */}
                  {idx < prices.length && (
                    <div
                      className={`
                        absolute bottom-0 w-full text-white text-center py-2
                        bg-black/40 transition-all duration-700 ease-in-out
                        ${idx === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
                      `}
                    >
                      <p className="text-sm md:text-base transition-opacity duration-700">
                        <span className="line-through mr-2 text-red-300">₹20,000</span>
                        <span className="font-semibold text-green-300">Now {prices[idx]}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

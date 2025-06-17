import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: "aqua-natural",
    name: "AQUA NATURAL",
    image: "/aquaservices/AquaAth.jpeg",
    features: [
      "16 Litter Capacity",
      "Unbreakable body",
      "Alkaline water"
    ],
    oldPrice: "₹6,499",
    newPrice: "₹5,499",
    warranty: "0"
  },
  {
    id: "royal-plues",
    name: " ROYAL Plues ",
    image: "/aquaservices/royal.jpeg",
    features: [
      "RO + UV + TDS Controller+ Mineral Filter",
      "16 Litter Capacity",
      "Wall-mountable design",
      "Energy-efficient",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "9,599",
    newPrice: "₹8,399",
    warranty: "1 Year"
  },
  {
    id: "purosis",
    name: "PUROSIS",
    image: "/aquaservices/purosis.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "16 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹13,999",
    newPrice: "11,999",
    warranty: "2 Year"
  },
  {
    id: "under-sink",
    name: "UNDER SINK WATER PURIFIER",
    image: "/aquaservices/Under-sink.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "12 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹23,999",
    newPrice: "21,999",
    warranty: "1 Year"
  },
   {
    id: "aqua-natural",
    name: "AQUA NATURAL",
    image: "/aquaservices/AquaAth.jpeg",
    features: [
      "16 Litter Capacity",
      "Unbreakable body",
      "Alkaline water"
    ],
    oldPrice: "₹6,499",
    newPrice: "₹5,499",
    warranty: "0"
  },
  {
    id: "royal-plues",
    name: " ROYAL Plues ",
    image: "/aquaservices/royal.jpeg",
    features: [
      "RO + UV + TDS Controller+ Mineral Filter",
      "16 Litter Capacity",
      "Wall-mountable design",
      "Energy-efficient",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "9,599",
    newPrice: "₹8,399",
    warranty: "1 Year"
  },
  {
    id: "purosis",
    name: "PUROSIS",
    image: "/aquaservices/purosis.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "16 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹13,999",
    newPrice: "11,999",
    warranty: "2 Year"
  },
  {
    id: "under-sink",
    name: "UNDER SINK WATER PURIFIER",
    image: "/aquaservices/Under-sink.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "12 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹23,999",
    newPrice: "21,999",
    warranty: "1 Year"
  },{
    id: "aqua-natural",
    name: "AQUA NATURAL",
    image: "/aquaservices/AquaAth.jpeg",
    features: [
      "16 Litter Capacity",
      "Unbreakable body",
      "Alkaline water"
    ],
    oldPrice: "₹6,499",
    newPrice: "₹5,499",
    warranty: "0"
  },
  {
    id: "royal-plues",
    name: " ROYAL Plues ",
    image: "/aquaservices/royal.jpeg",
    features: [
      "RO + UV + TDS Controller+ Mineral Filter",
      "16 Litter Capacity",
      "Wall-mountable design",
      "Energy-efficient",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "9,599",
    newPrice: "₹8,399",
    warranty: "1 Year"
  },
  {
    id: "purosis",
    name: "PUROSIS",
    image: "/aquaservices/purosis.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "16 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹13,999",
    newPrice: "11,999",
    warranty: "2 Year"
  },
  {
    id: "under-sink",
    name: "UNDER SINK WATER PURIFIER",
    image: "/aquaservices/Under-sink.jpeg",
    features: [
      "RO + UV + TDS Controller + Mineral Filter + Alkaline",
      "Wall-mountable design",
      "Energy-efficient",
      "12 Litre Storage",
      "Suitable for borewell & tanker"
    ],
    oldPrice: "₹23,999",
    newPrice: "21,999",
    warranty: "1 Year"
  }
   
];

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Call inside the component
  const handleBookNow = (product) => {
    navigate(`/book/${product.id}`, { state: { product } });
  };
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (newIndex) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const total = products.length;
    const validIndex = (newIndex + total) % total;
    setIndex(validIndex);
    slider.scrollTo({
      left: validIndex * slider.offsetWidth,
      behavior: 'smooth'
    });
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(index + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="home" className="bg-gradient-to-b from-cyan-50 to-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 leading-tight mb-4">
            Clean Water, Healthier Life <br /> <span className="text-cyan-600">Aqua Services in Pune!</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We provide RO purifier sales, installation & maintenance across Pune. <br />
            Fast, affordable & trusted by <strong>1000+ happy customers</strong>.
          </p>
        </div>
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="flex transition-all duration-500 scroll-smooth w-full overflow-hidden">
            {products.map((product, i) => (
              <div key={i} className="min-w-full flex justify-center px-4">
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img src={product.image} alt={product.name} className="w-64 h-64 object-contain" />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-2xl font-bold text-cyan-700">{product.name}</h2>
                    <ul className="text-gray-600 text-sm list-disc list-inside">
                      {product.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                    <div className="text-lg">
                      <span className="line-through text-red-400 mr-2">{product.oldPrice}</span>
                      <span className="text-green-600 font-bold">{product.newPrice}</span>
                    </div>{
                      product.warranty == "0"? (
                        <p className="text-sm text-gray-500"> </p>
                      ) : (
                        <p className="text-sm text-gray-500">Warranty: {product.warranty}</p>

                      )
                    }
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <button
                        onClick={() => handleBookNow(product)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm font-semibold"
                      >
                        Book Now
                      </button>
                      <a href="tel:+918237760208" className="text-cyan-600 font-semibold border border-cyan-600 px-6 py-2 rounded-full text-sm hover:bg-cyan-50">
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => goToSlide(index - 1)}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-cyan-100 z-10"
          >
            ◀
          </button>
          <button
            onClick={() => goToSlide(index + 1)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-cyan-100 z-10"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

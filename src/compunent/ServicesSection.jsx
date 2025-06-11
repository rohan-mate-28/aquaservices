import React from 'react';
import { FaTools, FaWater, FaWrench, FaRecycle } from 'react-icons/fa';

const services = [
  {
    icon: <FaWater size={40} className="text-cyan-600" />,
    title: 'RO Sales',
    description: 'High-quality RO purifiers at affordable prices.',
  },
  {
    icon: <FaTools size={40} className="text-cyan-600" />,
    title: 'Installation',
    description: 'Expert installation for all types of RO systems.',
  },
  {
    icon: <FaWrench size={40} className="text-cyan-600" />,
    title: 'Maintenance',
    description: 'Routine servicing to keep your purifier running smoothly.',
  },
  {
    icon: <FaRecycle size={40} className="text-cyan-600" />,
    title: 'Filter Replacement',
    description: 'Timely filter change and cartridge upgrades.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cyan-50 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4 hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-white p-4 rounded-full shadow-md">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-cyan-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

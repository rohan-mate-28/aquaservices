import React from 'react';

const testimonials = [
  {
    name: 'Ravi Deshmukh',
    feedback: 'Excellent service! They installed our AquaGuard in no time. Very professional and courteous staff.',
    location: 'Pune, Maharashtra',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Neha Kulkarni',
    feedback: 'Affordable pricing and quick response. I’m very happy with their maintenance service.',
    location: 'Kothrud, Pune',
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Vikram Patil',
    feedback: 'The best RO service I’ve found in Pune! Highly recommended.',
    location: 'Baner, Pune',
    avatar: '/avatar3.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id='Testimonial' data-aos="fade-up" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-cyan-700 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-10">
          Trusted by 1000+ families across Pune
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-gray-700 text-sm italic">"{item.feedback}"</p>
                <div>
                  <p className="font-semibold text-cyan-800">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

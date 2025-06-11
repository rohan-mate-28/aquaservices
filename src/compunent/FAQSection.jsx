import React from 'react';

const faqs = [
  {
    q: 'What are your best offers?',
    a: 'We regularly offer bundle deals on RO installation + 1 year AMC, plus seasonal discounts. Contact us for current offers tailored to Pune residents!',
  },
  {
    q: 'How often should I replace RO filters?',
    a: 'For Pune water quality, we recommend changing sediment/carbon filters every 6 months and the RO membrane every 2 years to keep your water pure.',
  },
  {
    q: 'Which RO brands do you service?',
    a: 'We provide expert service for Aquaguard, Kent, Eureka Forbes, Pureit, Livpure, Blue Star and most other major brands.',
  },
  {
    q: 'How long does a service visit take?',
    a: 'A standard service visit typically takes 30–45 minutes. A full installation may take up to 90 minutes depending on site setup.',
  },
  {
    q: 'What’s included in your AMC package?',
    a: 'Our Annual Maintenance Contract includes 4 preventive servicing visits, filters & membrane check, thorough cleaning, and 24/7 emergency support.',
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      data-aos="fade-up"
      className="py-16 bg-white"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-cyan-700 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="border border-gray-200 rounded-lg p-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <summary className="font-medium text-gray-800 cursor-pointer">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

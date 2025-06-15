import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const Book = () => {
      const location = useLocation();
      const product = location.state?.product || null;

      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
            fullName: '',
            phone: '',
            email: '',
            address: ''
      });

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            if (
                  formData.fullName.trim() === '' ||
                  formData.phone.length !== 10 ||
                  !formData.email.includes('@') ||
                  formData.address.trim() === ''
            ) {
                  toast.error('Please fill all fields correctly.');
                  return;
            }
            setLoading(true);

            const message = `Booking for ${product?.name || 'a product'}\nPrice: ${product?.price}\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}`;

            emailjs.send(
                  'service_v1jt0vh',
                  'template_v13w15v',
                  {
                        from_name: formData.fullName,
                        phone: formData.phone,
                        user_email: formData.email,
                        message: message,
                        productName: product?.name,
                        productPrice: product?.newPrice,
                        productFeatures: product?.features?.join(', '),
                  },
                  'O4YCnTTt5kUrIiZqW'
            ).then(() => {
                  toast.success('✅ Your booking request has been submitted!');
                  setFormData({ fullName: '', phone: '', email: '', address: '' });
            }).catch((error) => {
                  console.error('Error:', error);
                  toast.error('Something went wrong. Please try again.');
            }).finally(() => setLoading(false));
      };

      return (
            <div className="max-w-5xl mx-auto mt-16 px-4 sm:px-6 py-10 bg-white rounded-2xl shadow-lg">
                  {product && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start animate-fade-in">

                              {/* Left: Product Info */}
                              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                                    <img
                                          src={product.image}
                                          alt={product.name}
                                          className="mx-auto h-48 w-auto object-contain mb-4"
                                    />
                                    <h2 className="text-2xl font-extrabold text-cyan-700 uppercase tracking-wide">
                                          {product.name}
                                    </h2>
                                    <p className="text-lg text-cyan-600 font-semibold mt-2">{product.price}</p>
                                    <ul className="text-gray-700 text-left text-sm sm:text-base list-disc list-inside space-y-2 mt-4">
                                          {product.features?.map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Right: Booking Form */}
                              <div className="p-6 rounded-xl shadow-md bg-white">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Book This Product</h3>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                          <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                                                <input
                                                      type="text"
                                                      name="fullName"
                                                      placeholder="Enter your full name"
                                                      value={formData.fullName}
                                                      onChange={handleChange}
                                                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">Mobile Number</label>
                                                <input
                                                      type="text"
                                                      name="phone"
                                                      placeholder="10-digit phone number"
                                                      value={formData.phone}
                                                      onChange={handleChange}
                                                      maxLength={10}
                                                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      placeholder="example@gmail.com"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                />
                                          </div>

                                          <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                                                <textarea
                                                      name="address"
                                                      placeholder="Your full delivery address"
                                                      value={formData.address}
                                                      onChange={handleChange}
                                                      className="w-full border border-gray-300 px-4 py-2 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                />
                                          </div>

                                          <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
                                          >
                                                {loading ? (
                                                      <span className="flex justify-center items-center">
                                                            Submitting...
                                                            <span className="ml-3 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                      </span>
                                                ) : (
                                                      'Submit Booking'
                                                )}
                                          </button>
                                    </form>
                              </div>
                        </div>
                  )}
            </div>

      );
};

export default Book;

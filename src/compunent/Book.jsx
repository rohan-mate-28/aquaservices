import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';


const ContactForm = () => {
      const [loading, setLoading] = useState(false);

      const [formData, setFormData] = useState({
            fullName: '',
            phone: '',
            email: '',
            message: ''
      });

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            if (
                  formData.fullName.trim() === '' ||
                  formData.phone.length !== 10 ||
                  !formData.email.includes('@') ||
                  formData.message.trim() === ''
            ) {
                  toast.error('Please fill all fields correctly.');
                  return;
            }

            emailjs.send(
                  'service_v1jt0vh',
                  'template_v13w15v',
                  {
                        from_name: formData.fullName,
                        phone: formData.phone,
                        user_email: formData.email,
                        message: formData.message,
                  },
                  'O4YCnTTt5kUrIiZqW'
            ).then(() => {
                  toast.success('✅ Your request has been submitted!');
                  setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        message: ''
                  });
            }).catch((error) => {
                  console.error('Error:', error);
                  toast.error('Something went wrong. Please try again.');
            }).finally(() => {
                  setLoading(false);
            });
      };

      return (
            <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-center text-cyan-700">Contact Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full border px-4 py-2 rounded"
                        />
                        <input
                              type="text"
                              name="phone"
                              placeholder="Mobile Number"
                              value={formData.phone}
                              onChange={handleChange}
                              maxLength={10}
                              className="w-full border px-4 py-2 rounded"
                        />
                        <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full border px-4 py-2 rounded"
                        />
                        <textarea
                              name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full border px-4 py-2 rounded h-24"
                        />
                        <button disabled={loading}
                              type="submit"
                              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded"
                        >
                              {loading ? (
                                    <>
                                          Submitting...
                                          <span className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    </>
                              ) : (
                                    'Submit'
                              )}
                        </button>
                  </form>
            </div>
      );
};

export default ContactForm;
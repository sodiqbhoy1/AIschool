import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5F5] text-[#0F0F0F] min-h-screen mt-14">
        {/* Hero Section */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FB0000]">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us for inquiries, partnerships, or just to say hello.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E90FF]">Get in Touch</h2>
              <p className="mb-6">
                Feel free to reach out to us via email, phone, or visit our office. We're here to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#FB0000] p-3 rounded-full mr-4">
                    📧
                  </div>
                  <a href="mailto:info@aischool.com.ng" className="hover:text-[#1E90FF] transition">
                  info@aischool.com.ng

                  </a>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FB0000] p-3 rounded-full mr-4">
                    📞
                  </div>
                  <span>+234 903 949 777</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FB0000] p-3 rounded-full mr-4">
                    📍
                  </div>
                  <span>km 45, Kasali Elesan Building, Oyo Town, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E90FF]">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#FB0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E90FF] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

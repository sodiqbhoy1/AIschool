import React from 'react';
import Partners from './Partners';
import Navbar from './Navbar';
import Footer from './Footer';
import Education from '../assets/education.jpeg'; // Example image import
import Faozey from '../assets/faozy.webp'; // Example image import
import Atoro from '../assets/Atoro.jpg'; // Example image import
import Abbey from '../assets/Abbey.jpg'; // Example image import

const About = () => {
  const team = [
    { name: "Faozey Nurudeen", role: "President & Founder", image: Faozey },
    { name: "Atoro Ibukun", role: "Snr. Digital Transformation Expert", image: Atoro },
    { name: "Abbey Adegbola", role: "Chief Information Security Advisor", image: Abbey },
    // Add more team members
  ];

  return (
    <>
      <Navbar />
      <section className="bg-white">
        {/* Hero Section */}
        <div className="bg-[#0F0F0F] text-white py-24 px-4 mt-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FB0000]">About AI School</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              AI School is an open living lab and pre-incubation space designed to be a multi-functional, 
              multi-purpose space where work to catalyze creative social tech ventures takes place.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F0F0F] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To accelerate Africa's economic prosperity through technological innovation 
                and creative entrepreneurship.
              </p>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] mb-4">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-[#FB0000] p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#0F0F0F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Innovation & Creativity</span>
                </li>
                {/* Add other values */}
              </ul>
            </div>
            <div className="bg-gray-100 h-96 rounded-xl">
              <img src={Education} alt="Image" className="h-full w-full object-cover rounded-xl" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#FB0000] mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Optional Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F0F0F] mb-2">{member.name}</h3>
                    <p className="text-[#FB0000] font-medium">{member.role}</p>
                    {member.bio && (
                      <p className="text-gray-600 mt-4 line-clamp-3">{member.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-[#0F0F0F] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">Be part of Africa's digital transformation journey</p>
            <button className="bg-[#FB0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E90FF] transition-colors">
              Get in Touch
            </button>
          </div>
        </div>

        <Partners />
      </section>

      <Footer />
    </>
  );
};

export default About;

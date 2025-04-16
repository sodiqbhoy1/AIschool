// Instructors.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Instructors = () => {
  const instructors = [
    { name: "Jane Doe", title: "Frontend Developer", bio: "Expert in React and UI/UX design." },
    { name: "John Smith", title: "Backend Engineer", bio: "Specializes in Node.js, databases, and APIs." },
    { name: "Sarah Johnson", title: "AI Specialist", bio: "Teaches machine learning and data science." },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#F5F5F5] text-[#0F0F0F] py-12 px-6 mt-24">
        <h1 className="text-4xl font-bold text-center mb-10">Meet Our Instructors</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {instructors.map((inst, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-semibold text-[#FB0000]">{inst.name}</div>
              <div className="text-lg text-[#1E90FF] mb-2">{inst.title}</div>
              <p>{inst.bio}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Instructors;


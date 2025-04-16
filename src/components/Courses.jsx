import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FrontendImage from '../assets/frontend.jpg'; // Example image import
import BackendImage from '../assets/backend.jpg'; // Example image import
import DataScienceImage from '../assets/datascience.jpg'; // Example image import
import AIImage from '../assets/ai.jpg'; // Example image import
import PythonImage from '../assets/python.jpg'; // Example image import

const Courses = () => {
  const courses = [
    { 
      title: "Frontend Web Development", 
      description: "Learn HTML, CSS, JavaScript, and React.",
      image: FrontendImage 
    },
    { 
      title: "Backend Web Development", 
      description: "Master Node.js, Express, and databases.",
      image: BackendImage 
    },
    { 
      title: "Data Science & AI", 
      description: "Understand data analysis, ML, and Python.",
      image: DataScienceImage 
    },
    { 
      title: "Machine Learning", 
      description: "Explore algorithms, deep learning, and neural networks.",
      image: AIImage 
    },
    { 
      title: "Python for Data Science", 
      description: "Master Python for data analysis and machine learning.",
      image: PythonImage 
    },
    // Add more courses as needed
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#F5F5F5] text-[#0F0F0F] py-12 px-6 mt-24">
        <h1 className="text-4xl font-bold text-center mb-10">Our Courses</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              {/* Image for the course */}
              <div className="mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#FB0000] mb-2">{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Courses;

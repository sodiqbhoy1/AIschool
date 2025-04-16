import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { FiArrowRight, FiCode, FiShield, FiCloud, FiBookOpen } from 'react-icons/fi';
import HeroImage from '../assets/hero-ai-lab.jpg';
import CyberSecurity from '../assets/cyber-security.jpg';
import WebDev from '../assets/web-development.jpg';
import DataAnalysis from '../assets/data-analysis.jpg';
import EdTech from '../assets/edtech.jpg';
import {motion} from 'framer-motion';
import Partners from './Partners';

const Home = () => {
  const stats = [
    { number: '98%', label: 'Graduation Rate', icon: <FiBookOpen /> },
    { number: '5K+', label: 'Trained Professionals', icon: <FiCode /> },
    { number: '200+', label: 'Industry Partnerships', icon: <FiCloud /> },
    { number: '10+', label: 'Certified Programs', icon: <FiShield /> },
  ];

  const courses = [
    { 
      title: "Cybersecurity", 
      image: CyberSecurity,
      desc: "Master digital defense strategies and ethical hacking techniques",
      icon: <FiShield className="text-3xl" />
    },
    { 
      title: "Web Development", 
      image: WebDev,
      desc: "Full-stack development with modern frameworks and cloud integration",
      icon: <FiCode className="text-3xl" />
    },
    { 
      title: "Data Analysis", 
      image: DataAnalysis,
      desc: "Big data processing, visualization, and machine learning fundamentals",
      icon: <FiCloud className="text-3xl" />
    },
    { 
      title: "EdTech Solutions", 
      image: EdTech,
      desc: "Developing educational technologies and learning management systems",
      icon: <FiBookOpen className="text-3xl" />
    }
  ];

  return (
    <>
      <Navbar />
      <div className="font-inter bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-[#0F0F0F] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent" />
          <img 
            src={HeroImage} 
            alt="Tech Lab" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          
          <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Career in 
                <span className="text-[#FB0000]"> Tech Innovation</span>
              </h1>
              <p className="text-xl text-[#F5F5F5] mb-12">
                AIschool equips professionals with cutting-edge technical skills through industry-aligned programs in cybersecurity, web development, data science, and educational technology.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#FB0000] hover:bg-[#E00000] px-8 py-4 rounded-lg flex items-center gap-2 transition-all">
                  Explore Courses <FiArrowRight />
                </button>
                <button className="border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF]/10 px-8 py-4 rounded-lg transition-all">
                  Attend Webinar
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-[#1E90FF] mb-4 mx-auto w-fit">{stat.icon}</div>
                <div className="text-[#FB0000] text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-[#0F0F0F]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Course Specializations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#0F0F0F] mb-16 text-center">
              Our Core Programs
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6 bg-white">
                    <div className="text-[#1E90FF] mb-2">{course.icon}</div>
                    <h3 className="text-2xl font-bold text-[#0F0F0F] mb-2">{course.title}</h3>
                    <p className="text-[#0F0F0F]/80">{course.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#0F0F0F] text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#FB0000] rounded-lg flex items-center justify-center">
                <FiCode className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Hands-On Labs</h3>
              <p className="text-[#F5F5F5]">Real-world projects using industry-standard tools and environments</p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#1E90FF] rounded-lg flex items-center justify-center">
                <FiShield className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Certification Prep</h3>
              <p className="text-[#F5F5F5]">Preparation for top industry certifications (AWS, CISSP, CompTIA)</p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#FB0000] rounded-lg flex items-center justify-center">
                <FiBookOpen className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Flexible Learning</h3>
              <p className="text-[#F5F5F5]">Hybrid options with 24/7 access to learning resources and mentorship</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-[#FB0000] text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Launch Your Tech Career</h2>
            <p className="text-xl mb-8">Next cohort starting very soon - Limited seats remaining</p>
            <button className="bg-[#0F0F0F] hover:bg-[#1E1E1E] px-8 py-4 rounded-lg flex items-center gap-2 mx-auto transition-all">
              Enroll Now <FiArrowRight />
            </button>
          </div>
          
          <div className="absolute -top-20 -right-20 w-96 h-96 border-4 border-white/10 rounded-full" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1E90FF]/10 rounded-full" />
        </section>

        {/* partners */}
        <Partners/>

        <Footer />
      </div>
    </>
  );
};

export default Home;
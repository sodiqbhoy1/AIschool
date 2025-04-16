import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold text-[#FB0000] mb-4 md:mb-0">AI <span className="text-white"> School</span> </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} AISchool. All rights reserved.</p>
          <p className="text-[#1E90FF]">Built with ❤️ and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import Navbar from "../components/Navbar"; 

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <header className="header-section bg-black lg:min-h-screen">
          <Navbar /> 
          <div className="p-8 mt-20 w-full flex flex-col items-start justify-start">
            {/* Hero Section */}
            <div className="flex flex-col justify-start items-start mt-[64px]">
              <div className="headerText rounded-xxl text-blur-wrapper py-4 bg-opacity-40 px-6">
                <p className="text-white font-semibold text-[32px] sm:text-[48px] md:text-[64px] text-start">
                  360° Software Solutions for
                  <br />
                  Your &nbsp;
                  <span className="bg-gradient-to-r from-[#0F47C6] to-[#68A4DF] bg-clip-text text-transparent">JEWELLERY &nbsp;</span>
                  Store
                </p>
                <h1 className="headerText text-base text-gray-50 mt-4">
                  Take Your Jewellery Store To The Next Level With AURUMM - The Ultimate Software Suite
                </h1>
              </div>
              <a
                href="#schedule"
                className="mt-8 mx-6 bg-blue-600 font-semibold text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Schedule A Demo
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeroSection;

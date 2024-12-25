import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardData = [
  {
    imgSrc: "/allRound.svg",
    title: "All-Round Assistance",
    description: "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
  },
  {
    imgSrc: "/relationshipmgt.svg",
    title: "Relationship Management",
    description: "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
  },
  {
    imgSrc: "/support.svg",
    title: "Technical Support",
    description: "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
  },
  {
    imgSrc: "/stayahead.svg",
    title: "Stay Ahead",
    description: "We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!",
  },
];

const StatBox = ({ value, unit, description }) => (
  <div className="max-[640px]:px-[20px] max-[640px]:mt-5">
    <div className="flex items-start">
      <motion.span
        className="text-[#2A9E4D] text-[30px] md:text-[44px] font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      {unit && (
        <motion.p
          className="text-[#2A9E4D] text-[30px] md:text-[44px] font-bold ml-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {unit}
        </motion.p>
      )}
      <div className="ml-2 mt-1 md:mt-3">
        <img src="/star.e40bcec9.png" alt="star" width="29" height="29" />
      </div>
    </div>
    <p className="text-[14px] font-extrabold text-gray-100">{description}</p>
  </div>
);

const JewelleryManagement = () => {
  const [stats, setStats] = useState({
    clients: 0,
    downloads: 0,
    revenueIncrease: 0,
  });

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  useEffect(() => {
    if (!inView) return; 

    const incrementStats = () => {
      setStats((prevStats) => ({
        clients: Math.min(prevStats.clients + 1, 50),
        downloads: Math.min(prevStats.downloads + 10, 1000),
        revenueIncrease: Math.min(prevStats.revenueIncrease + 1, 72),
      }));
    };

    const interval = setInterval(incrementStats, 60);

    return () => clearInterval(interval); 
  }, [inView]); 

  return (
    <section
      className="mt-[50px] md:mt-[60px] relative lg:min-h-screen mb-2 mx-2 p-3"
    >
      {/* Hero Section */}
      <div className="container min-[1440px]:max-w-[1440px] mx-auto px-6 text-center">
        <p className="section-para text-[14px] font-extrabold text-gray-100 mb-2">WE'RE HERE TO HELP</p>
        <p className="section-para text-[36px] font-extrabold text-gray-100 leading-[46px]">
          This is The Future of Jewellery Store Management
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid px-6 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-8 gap-4 container mx-auto">
        {CardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] max-[500px]:mx-auto max-[500px]:max-w-[300px] px-5 py-5 rounded-md border shadow-lg hover:scale-110 transition duration-500 ease-in transform"
          >
            <img src={card.imgSrc} alt={card.title} width="75" height="60" />
            <p className="text-[18px] text-[#000000] font-extrabold mt-2">{card.title}</p>
            <p className="text-[16px] text-[#666666] font-[600] mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div  ref={ref}  className=" bg-[#61A3751F] px-[50px] xl:mx-[150px] sm:flex justify-evenly mt-8 rounded-lg py-4">
        <StatBox value={stats.clients} unit="+" description="Clients" />
        <StatBox value={stats.downloads} unit="+" description="Downloads" />
        <StatBox value={stats.revenueIncrease} unit="%" description="Client Revenue Increase" />
      </div>
    </section>
  );
};

export default JewelleryManagement;

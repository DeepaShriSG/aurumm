import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("auPay");

  const tabs = [
    { id: "auPay", label: "Au Pay" },
    { id: "auSales", label: "Au Sales" },
    { id: "auShop", label: "Au Shop" },
  ];

  const content = {
    auPay: {
        title: "AU PAY",
        mainTitle: "The Golden Gold App",
        description: "We're Making Jewellery Scheme Payments Easier",
        image: "/new_aupay.939fae7c.svg",
    },
    auSales: {
        title: "AU SALES",
        mainTitle: "The Hybrid ERP Magic",
        description: "Inventory Management Excellence In Every Tap",
        image: "/new_ausale.20a8529c.png",
    },
    auShop: {
        title: "AU SHOP",
        mainTitle: "Open Your Shop To World",
        description: "A Smooth Jewellery Shopping Experience",
        image: "/new_aushop.a2faba30.svg",
        Imagewidth:true,
    },
  };

  const currentContent = content[activeTab];

  return (
    <section className="lg:min-h-screen m-2 p-3">
      <div className="container mx-auto px-6 relative mt-[50px] md:mt-[80px] min-[1440px]:max-w-[1440px]">
        {/* Tabs */}
        <div className="flex justify-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`transition-all  duration-300 ease-in-out p-[10px] rounded-[25px] w-[200px] text-[18px] font-[400] ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-green-600 text-[#FFFFFF]"
                  : "bg-[#c2d8ec] text-[#254fad]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full mt-[50px] md:mt-[80px]">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto">
            {/* Image Section */}
            <div className="flex justify-center sm:mt-[25px] mt-[25px]">
              <img
                alt="Tab Content"
                loading="lazy"
                decoding="async"
                className= {`${currentContent.Imagewidth ? "w-[50%]" : "w-[70%]"} `}
                src={currentContent.image}
                style={{ color: "transparent" }}
              />
            </div>

            {/* Text Section */}
            <div className="flex items-center">
              <div>
                <p className="text-[13px] text-gray-100 font-[700] mt-5">
                  {currentContent.title}
                </p>
                <p className="text-[36px]  bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent font-[700] mt-5">
                  {currentContent.mainTitle}
                </p>
                <p className="text-[36px] text-gray-100 font-[700] mt-5">
                  {currentContent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;


import React from "react";

const AppCard = ({ title, subTitle, buttonText, bgColor, description, textColor, marginBottom }) => {
  return (
    <div className={`${bgColor} hover:scale-110 transition duration-800 ease-in transform rounded-lg shadow-md p-6 w-full mx-2 mb-4 `}>
      <div className="flex gap-4 bg-[#fff] w-[180px] p-3 shadow-md rounded-md">
        <img alt="no-symbol" src="/icon.png" width={35} height={35} style={{ color: "transparent" }} />
        <p className="text-[22px] text-[#2C2C3C] font-[700]  whitespace-nowrap">{title}</p>
      </div>
      <p className={`text-gray-900 font-semibold  ${marginBottom ? "p-4" : ""}  text-base mb-6 p-3 text-${textColor}`}>{subTitle}</p>
      <img src="/aupayLine.26dfc84c.png" alt="" style={{ color: "transparent" }} />
      <p className={`text-gray-700  text-base p-4 mb-6`}>{description}</p>
      <button className={`${textColor}  hover:${bgColor}  text-white font-semibold py-2 px-4 rounded-[25px]`}>{buttonText}</button>
    </div>
  );
};

const FeaturedApps = () => {
  const cards = [
    {
      title: "AU PAY",
      subTitle: "An Exclusive Gold Savings Scheme Payment App",
      description: "Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.",
      buttonText: "Get Started →",
      bgColor: "bg-[#effff3]",
      textColor: "bg-[#41945a]",
    },
    {
      title: "AU SALES",
      subTitle: "All-Round Inventory Management Assistant",
      description: "If you're looking for a holistic store management solution, then AU Sales is the only app you need!",
      buttonText: "Get Started →",
      bgColor: "bg-[#fff7e5]",
      marginBottom: true,
      textColor: "bg-[#d7b56d]",
    },
    {
      title: "AU SHOP",
      subTitle: "Give Your Fine Jewellery A Sleek Online Platform!",
      buttonText: "Get Started →",
      description: "Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let's begin!",
      bgColor: "bg-[#eaf7ff]",
      textColor: "bg-[#36a4e5]",
    },
  ];

  return (
    <section className="lg:min-h-screen m-2 p-3">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-[#f3f4f6] font-bold mb-8 text-center">AURUMM for Your Jewellery Business</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <AppCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;

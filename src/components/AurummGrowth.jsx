import React from "react";

function AurummGrowth() {
  return (
    <>
      <section className="lg:min-h-screen m-2 p-3">
        <div className="lg:flex flex-row items-center justify-between px-10 md:px-12 lg:px-16 gap-4">
          <div>
            <p className="text-[13px] text-gray-100   font-bold mt-5">FEATURES</p>
            <p className="text-[24px]  sm:text-[36px] text-gray-100 font-bold mt-6">
              Growth with AURUMM:
              <br className=" hidden md:block"/> Your  Partner in Success!
            </p>
          </div>
          <div className="w-48 h-48 hidden lg:block tilt-hover">
            <div className="relative transistion-all">
              <img src="/featureanimated.16110a81.png" className="p-8" alt="" srcSet="" />
            </div>
          </div>
        </div>
        <div>
          <AurumFeaturesList />
        </div>
      </section>
    </>
  );
}

export default AurummGrowth;

const AurumFeaturesList = () => {
  const features = [
    {
      icon:"/cloud.svg",
      text: "Cloud Support",
    },
    {
      icon: "/savings.svg",
      text: "Savings Scheme Management",
    },
    {
      icon: "/datasbase.svg",
      text: "Data Management",
    },
    {
      icon: "/Billing.svg",
      text: "Estimation & Billing",
    },
    {
      icon: "/cost.svg",
      text: "Cost Management",
    },
    {
      icon: "/report.svg",
      text: "Reporting & Dashboard",
    },
  ];

  return (
    <div className="container lg:flex items-center justify-between px-10 md:px-12 lg:px-16 gap-4">
      <div className="lg:flex-1 w-full">
        {features.map((element, index) => {
          return (
            <>
              <div key={index} className="flex items-center py-3 px-4 bg-gray-100 rounded-md mb-2">
                <div className="w-8 h-8 mr-4 bg-green-200 rounded-full flex items-center justify-center">
                    <img src={element.icon} className="bg-transparent" alt="" srcSet="" />
                </div>
                <h3 className="text-gray-800  font-semibold whitespace-nowrap">{element.text}</h3>
              </div>
            </>
          );
        })}
      </div>
      <div className="tilt-hover lg:flex-2 w-full my-2 md:ml-8">
        <img src="/featuresimg.40ecab2c.svg" alt="Screenshot" className=" lg:w-full rounded-md shadow-md" />
        <p className="mt-4 text-gray-100 text-center font-medium ">Go digital and stay ahead with our all-round cloud support services</p>
      </div>
    </div>
  );
};

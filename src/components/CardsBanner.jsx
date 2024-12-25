import React from "react";
import Slider from "react-slick";

const brands = [
  { id: 1, name: "Shanthi Jewellery", logo: "/client1.a6ce8334.png" },
  { id: 2, name: "Thangalakshmi Jewellery", logo: "/client2.375a298f.png" },
  { id: 3, name: "Swamy Jewellery", logo: "/client3.bb1326d9.png" },
  { id: 4, name: "Sri Kandan Thangamalihai", logo: "/client4.ae1b0ded.png" },
  { id: 5, name: "Sayar Jewellers", logo: "/client5.e84cda3c.png" },
];

const CardsBanner = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 800,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto m-2 p-3">
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-gray-100 text-xl font-bold mb-6">Brands That Trust Us!</h2>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id}>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="h-[50px] w-auto" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardsBanner;

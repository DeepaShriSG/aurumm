import React from "react";

const Footer = () => {
  return (
    <section
      className="relative mt-[-50px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/head_banner.1ab9b894.png')",
      }}
    >
      <div className="container mx-auto px-6 lg:px-10 xl:max-w-[1440px]">
        {/* Navbar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1A3866] py-5">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm lg:text-base text-gray-100 font-semibold hover:underline"
            >
              Home
            </a>
            <a
              href="/contact_us/"
              className="text-sm lg:text-base text-gray-100 font-semibold hover:underline"
            >
              Contact
            </a>
          </div>

          <div className="mt-4 lg:mt-0 bg-white px-4 py-2 rounded-lg w-full sm:w-auto flex justify-between items-center gap-4">
            <p className="text-sm lg:text-base text-gray-600 font-medium">
              Ready To Begin?
            </p>
            <a
              href="/contact_us/"
              className="text-xs lg:text-sm font-bold text-white px-4 py-2 rounded-lg bg-[#41945A] hover:bg-[#357a49] transition duration-300"
            >
              Get a Demo
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b-2 border-[#1A3866]">
          
          <div>
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-sm lg:text-base text-gray-100 mt-4 leading-6">
              World-class technical solutions for elevated jewellery store
              operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-gray-100 mb-4">
              QUICKLINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-100 hover:underline"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/contact_us/"
                  className="text-sm text-gray-100 hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base font-bold text-gray-100 mb-4">
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/aupay/"
                  className="text-sm text-gray-100 hover:underline"
                >
                  AU Pay
                </a>
              </li>
              <li>
                <a
                  href="/products/ausales/"
                  className="text-sm text-gray-100 hover:underline"
                >
                  AU Sales
                </a>
              </li>
              <li>
                <a
                  href="/products/aushop/"
                  className="text-sm text-gray-100 hover:underline"
                >
                  AU Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-gray-100 mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-100 mb-4">
              Phone: <a href="tel:04224957575">0422 4957575</a>
            </p>
            <h3 className="text-base font-bold text-gray-100">
              Email
            </h3>
            <p className="text-sm text-gray-100">
              <a href="mailto:support@atts.in" className="hover:underline">
                support@atts.in
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 text-center">
          <p className="text-sm text-gray-100">
            Aurumm made by{" "}
            <a
              href="https://atts.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              ATTS Technologies
            </a>
            . All Rights Reserved© 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const products = [
    {
      name: "AuPay",
      description: "Gold savings scheme payment platform",
      href: "/products/aupay/",
      icon: "/icon.png",
    },
    {
      name: "AuSales",
      description: "Comprehensive jewellery store ERP",
      href: "/products/ausales/",
      icon: "/icon.png",
    },
    {
      name: "AuShop",
      description: "Online jewellery shopping platform",
      href: "/products/aushop/",
      icon: "/icon.png",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2 bg-white" : "pt-4 pb-6 bg-[#010102]"
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={`${ isScrolled ? "/logo.png" : "/icon.png" }`} alt="Logo" className="h-10" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-700 hover:text-green-600 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li>
            <a href="/" className={`${isScrolled ? "text-gray-800" : "text-green-600"} hover:text-green-600 font-semibold`}>
              Home
            </a>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`${isScrolled ? "text-gray-800" : "text-green-600"} flex items-center text-gray-800 hover:text-green-600 font-semibold focus:outline-none`}>
              Products & Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 h-5 w-5 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.92a.75.75 0 011.06 0l3.96 3.96 3.96-3.96a.75.75 0 111.06 1.06L10.56 12.5a.75.75 0 01-1.06 0L5.23 8.98a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-64 bg-white shadow-lg rounded-lg z-10">
                <ul className="p-4 space-y-4">
                  {products.map((product) => (
                    <li key={product.name}>
                      <a
                        href={product.href}
                        className="flex items-center gap-4 text-gray-800 hover:text-green-600">
                        <img
                          src={product.icon}
                          alt={product.name}
                          className="h-10 w-10 bg-gray-200 rounded-md"
                        />
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="/contact" className={`${isScrolled ? "text-gray-800" : "text-green-600"} font-semibold`}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="/contact_us/"
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-full font-semibold hover:opacity-90">
              Get a Free Demo
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-50 p-6">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none absolute top-4 right-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="space-y-6">
              <li>
                <a href="/" className="text-gray-800 hover:text-green-600 font-semibold">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-green-600 font-semibold">
                  Products & Features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.92a.75.75 0 011.06 0l3.96 3.96 3.96-3.96a.75.75 0 111.06 1.06L10.56 12.5a.75.75 0 01-1.06 0L5.23 8.98a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {products.map((product) => (
                      <li key={product.name}>
                        <a
                          href={product.href}
                          className="block text-gray-800 hover:text-green-600">
                          {product.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <a href="/contact" className="text-gray-800 hover:text-green-600 font-semibold">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/contact_us/"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-full font-semibold hover:opacity-90">
                  Get a Free Demo
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

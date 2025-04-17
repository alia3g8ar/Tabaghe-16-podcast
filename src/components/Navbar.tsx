import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[100%] max-w-7xl  font-IRANSans bg-black backdrop-blur-sm sticky top-[0] pt-[20px] z-50">
      <div className="w-[80%] mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* لوگو و منو */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0 ml-[20px]">
            <img
              src={logo}
              alt="طبقه 16"
              className="w-12 h-10 object-contain"
            />
          </div>
          <ul className="hidden md:flex md:items-center space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="/podcasts"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                پادکست‌ها
              </a>
            </li>
            <li>
              <a
                href="/videos"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                ویدیوهای کوتاه
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                حمایت
              </a>
            </li>
            <li>
              <a
                href="/collaboration"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                همکاری
              </a>
            </li>
          </ul>
        </div>

        {/* سرچ باکس */}
        <div className="hidden sm:block relative w-[180px] sm:w-[230px]">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full h-10 bg-transparent text-white placeholder-gray-400 border-b border-gray-600 focus:border-gray-300 focus:outline-none px-4 transition-colors duration-300"
          />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* دکمه منوی موبایل */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300 p-2"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`} />
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-1  backdrop-blur-sm">
          <a
            href="/"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            صفحه اصلی
          </a>
          <a
            href="/podcasts"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            پادکست‌ها
          </a>
          <a
            href="/videos"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            ویدیوهای کوتاه
          </a>
          <a
            href="/support"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            حمایت
          </a>
          <a
            href="/collaboration"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            همکاری
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

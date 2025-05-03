import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="w-[100%] pl-[13px] flex justify-center flex-col font-IRANSans bg-black backdrop-blur-sm sticky top-0 pt-4 z-50">
      <div className="w-[80%] mx-auto flex justify-between items-center py-2 md:py-4">
        {/* لوگو و منو */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0 mr-[20px] ml-[10px] md:ml-[20px]">
            <img
              src={logo}
              alt="طبقه 16"
              className="w-10 h-8 md:w-12 md:h-10 object-contain"
            />
          </div>
          <ul className="hidden md:flex md:items-center space-x-4 lg:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                to="/podcasts"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                پادکست‌ها
              </Link>
            </li>
            <li>
              <Link
                to="/videos"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                ویدیوهای کوتاه
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                حمایت
              </Link>
            </li>
            <li>
              <Link
                to="/collaboration"
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
              >
                همکاری
              </Link>
            </li>
          </ul>
        </div>

        {/* سرچ باکس */}
        <div className="flex items-center">
          <div
            className={`relative ${
              showSearch ? "w-[180px] sm:w-[230px]" : "w-auto"
            } transition-all duration-300`}
          >
            {showSearch ? (
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full h-10 bg-transparent text-white placeholder-gray-400 border-b border-gray-600 focus:border-gray-300 focus:outline-none px-4 transition-colors duration-300"
              />
            ) : null}
            <button
              onClick={toggleSearch}
              className={`${
                showSearch
                  ? "absolute left-3 top-1/2 transform -translate-y-1/2"
                  : ""
              } text-gray-400 hover:text-white transition-colors duration-300 p-2`}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* دکمه منوی موبایل */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300 p-2"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`} />
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`w-full md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-1 backdrop-blur-sm">
          <Link
            to="/"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            صفحه اصلی
          </Link>
          <Link
            to="/podcasts"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            پادکست‌ها
          </Link>
          <Link
            to="/videos"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            ویدیوهای کوتاه
          </Link>
          <Link
            to="/support"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            حمایت
          </Link>
          <Link
            to="/collaboration"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
          >
            همکاری
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

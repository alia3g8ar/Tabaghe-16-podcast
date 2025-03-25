import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/DALL·E 2025-02-21 18.08.03 - A modern, sleek, and minimalistic logo design for a tech company named 'NovaVortex'. The logo should represent innovation and technology, incorporatin.webp";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // تابع برای باز و بسته کردن منو
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" p-4 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* لوگو سمت چپ */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-14 rounded-full" />
        </div>

        {/* آیکون همبرگر برای موبایل */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-gray-900 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* لینک‌های نوار ناوبری برای دسکتاپ */}
        <div
          className={` space-x-6 hidden lg:block ${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <Link
            to="/"
            className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
          >
            خانه
          </Link>
          <Link
            to="/login"
            className="text-lg text-gray-700 hover:text-blue-500 transition duration-300"
          >
            ورود
          </Link>
        </div>
      </div>

      {/* منو همبرگر برای موبایل */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div className="absolute right-4 top-4 text-white text-2xl">
          <button onClick={toggleMenu} className="focus:outline-none">
            X
          </button>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <Link
                to="/"
                className="text-lg text-gray-700 hover:text-blue-500 block"
                onClick={toggleMenu}
              >
                خانه
              </Link>
              <Link
                to="/login"
                className="text-lg text-gray-700 hover:text-blue-500 block"
                onClick={toggleMenu}
              >
                ورود
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

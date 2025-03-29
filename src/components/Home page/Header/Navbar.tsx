import React, { useState } from "react";
import logo from "../../../assets/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[67.8125rem] bg-gray-700 m-auto font-IRANSans">
      <div className="flex justify-between items-center px-6 py-4">
        {/* لوگو و منو */}
        <div className="flex items-center">
          <div>
            <img src={logo} alt="طبقه 16" className="w-[50px] h-[38.62px]" />
          </div>
          <ul className="hidden md:flex md:items-center space-x-8 space-x-reverse mr-7">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 transition-colors duration-300">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="/podcasts"
                className="text-white hover:text-gray-300 transition-colors duration-300">
                پادکست‌ها
              </a>
            </li>
            <li>
              <a
                href="/videos"
                className="text-white hover:text-gray-300 transition-colors duration-300">
                ویدیوهای کوتاه
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="text-white hover:text-gray-300 transition-colors duration-300">
                حمایت
              </a>
            </li>
            <li>
              <a
                href="/collaboration"
                className="text-white hover:text-gray-300 transition-colors duration-300">
                همکاری
              </a>
            </li>
          </ul>
        </div>

        {/* سرچ باکس */}
        <div className="relative w-[230px] h-[30px]">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full h-full bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none px-4 "
          />
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* دکمه منوی موبایل */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`} />
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-2 space-y-2 bg-gray-700">
          <a
            href="/"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300">
            صفحه اصلی
          </a>
          <a
            href="/podcasts"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300">
            پادکست‌ها
          </a>
          <a
            href="/videos"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300">
            ویدیوهای کوتاه
          </a>
          <a
            href="/support"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300">
            حمایت
          </a>
          <a
            href="/collaboration"
            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-300">
            همکاری
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

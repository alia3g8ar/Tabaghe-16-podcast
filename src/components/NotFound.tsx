// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function NotFound() {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white ">
        <Navbar />
  
        <main className="flex-grow flex flex-col items-center justify-center px-4 my-28 sm:px-6 md:px-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">404</h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-center max-w-md">
            صفحه‌ای که دنبالشی پیدا نشد!
          </p>
          <Link
            to="/"
            className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
          >
            بازگشت به خانه
          </Link>
        </main>
  
        <Footer />
      </div>
    );
  }
  
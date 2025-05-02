// src/App.tsx
import image1 from "../../assets/عکس 1.jfif";

import React from "react";
import Navbar from "../../components/Navbar";
const Podcasts = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <div className="w-[100%]  flex justify-center h-auto mt-4 md:mt-10 ">
        <div className="w-[80%] mx-auto flex flex-col  px-4 sm:px-6 py-4">
          <h4 className=" mb-0 sm:mb-2 text-white text-xl  font-IRANYekanExtraBold leading-tight text-right">
            لیست ویدیوکست ها
          </h4>
          <div className="container items-center mx-auto py-0 sm:py-8 md:py-12">
            <div className="grid grid-cols-2 mt-10 scale-[1] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className=" rounded-t-[1px] shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-42 md:h-50 rounded-t-[5px] overflow-hidden">
                    <img
                      src={image1}
                      alt={"تصویر اپیزود"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-black p-4">
                    <h4 className="text-white text-xl font-IRANYekanExtraBold leading-tight text-right mb-4 line-clamp-2">
                      سلام
                    </h4>

                    <div className="flex flex-wrap justify-between text-gray-500 mt-[27px] text-sm md:text-base font-IRANYekanExtraBold">
                      <span>مهمان: علی رحمتی</span>
                      <span>01:25:21</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcasts;

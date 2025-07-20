import React from "react";
import img from "../assets/join.jpg";

type Props = Record<string, never>;

const JoinCommunitySection: React.FC<Props> = () => {
  return (
    <div className="w-full flex justify-center bg-black py-12 px-4">
      <div
        className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6"
        style={{
          width: "996px",
          height: "219px",
          borderRadius: "35px",
          overflow: "hidden", // 👈 اضافه شد
          background:
            "linear-gradient(226.94deg, rgba(255, 255, 255, 0.02) 0.98%, rgba(255, 255, 255, 0) 98.71%)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(225.53deg, rgba(255, 255, 255, 0.2) 1.7%, rgba(0, 0, 0, 0) 96.61%)",
          borderImageSlice: 1,
        }}
      >
        {/* فرم - سمت چپ */}
        <div
          className="md:w-1/2 w-full text-white flex flex-col items-center text-center gap-4"
          style={{
            borderTopRightRadius: "35px",
            borderBottomRightRadius: "35px",
          }}
        >
          <h2 className="text-2xl font-bold">به اجتماع طبقه 16 بپیوندید</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            با عضویت در خبرنامه ما از آخرین بروزرسانی‌ها، فرصت‌ها و رویدادهای
            طبقه ۱۶ مطلع شوید.
          </p>

          <form
            className="flex w-full max-w-sm flex-row-reverse mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-l-md border border-gray-700 px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ltr text-left"
              required
            />
            <button
              type="submit"
              className="bg-black text-white border border-white px-5 py-2 rounded-r-md hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>




        {/* تصویر - سمت راست */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:ml-6 flex justify-center md:none">
        <div
  className="relative"
  style={{
    width: "489px",
    height: "219px",
    borderTopLeftRadius: "35px",
    borderBottomLeftRadius: "35px",
    overflow: "hidden",
    background:
      "linear-gradient(72.49deg, #121212 -18.15%, rgba(0, 0, 0, 0.39) 100.93%)",
  }}
>
  <img
    src={img}
    alt="Join Community"
    className="w-full h-full object-cover grayscale"
  />
</div>






        </div>
      </div>
    </div>
  );
};

export default JoinCommunitySection;

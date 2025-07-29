import React from "react";
import img from "../assets/join.jpg";

type Props = Record<string, never>;

const JoinCommunitySection: React.FC<Props> = () => {
  return (
    <div className="w-full flex justify-center bg-black py-12 px-4">
      <div
        className="flex flex-col md:flex-row items-stretch justify-between w-full max-w-[996px]"
        style={{
          height: "219px",
          borderRadius: "35px",
          overflow: "hidden",
          background:
            "linear-gradient(226.94deg, rgba(255, 255, 255, 0.02) 0.98%, rgba(255, 255, 255, 0) 98.71%)",
          border: "1px solid transparent",
          borderImage:
            "linear-gradient(225.53deg, rgba(255, 255, 255, 0.2) 1.7%, rgba(0, 0, 0, 0) 96.61%) 1",
        }}
      >
        {/* فرم - سمت چپ */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center p-6 text-white">
          <h2 className="text-2xl font-bold">به اجتماع طبقه 16 بپیوندید</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-2">
            با عضویت در خبرنامه ما از آخرین بروزرسانی‌ها، فرصت‌ها و رویدادهای
            طبقه ۱۶ مطلع شوید.
          </p>

          <form
            className="flex w-full max-w-sm flex-row-reverse mt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-grow rounded-l-md border border-gray-700 px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
              required
            />
            <button
              type="submit"
              className="bg-black text-white border border-white px-5 py-2 rounded-r-md hover:bg-white hover:text-black transition"
            >
              ثبت
            </button>
          </form>
        </div>

        {/* تصویر - سمت راست */}
        <div className="md:w-1/2 w-full relative">
          <div
            className="absolute inset-0"
            style={{
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
              style={{
                borderTopLeftRadius: "35px",
                borderBottomLeftRadius: "35px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunitySection;
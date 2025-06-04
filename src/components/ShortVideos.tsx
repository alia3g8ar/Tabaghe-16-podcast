import image1 from "../assets/عکس 1.jfif";
import image2 from "../assets/عکس 2.jfif";
import image3 from "../assets/عکس 3.jfif";
import image4 from "../assets/عکس اصلی.jfif";
import { PlayCircle } from "lucide-react";

const shortVideos = [
  {
    image: image1,
    title: "دموکراسی واقعی",
  },
  {
    image: image2,
    title: "پنج حسرت بزرگ زندگی",
  },
  {
    image: image3,
    title: "مهارت مهم در استخدام",
  },
  {
    image: image4,
    title: "دیجی‌کالا و آمازون",
  },
];

const ShortVideos = () => {
  return (
    <div className="w-full bg-[#0f0f0f] py-10 flex justify-center">
      <div className="w-[70%]">
        <h2 className="text-white text-center text-xl sm:text-2xl font-IRANYekanExtraBold mb-6">
          ویدیوهای کوتاه
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {shortVideos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-32 sm:h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white text-sm sm:text-lg font-IRANYekanExtraBold">
                    {video.title}
                  </span>
                  <PlayCircle className="text-white w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white mt-6 text-sm cursor-pointer font-IRANYekanExtraBold">
          مشاهده همه
        </p>
      </div>
    </div>
  );
};

export default ShortVideos;

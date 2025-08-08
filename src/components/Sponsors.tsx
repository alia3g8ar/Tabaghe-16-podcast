import digi from "../assets/digi.png";
import fid from "../assets/fid.png";
import snapp from "../assets/snapp.png";
import ta from "../assets/ta.png";

export default function Sponsors() {
  const platforms = [
    { src: digi, alt: "دیجی‌کالا" },
    { src: fid, alt: "فیدیبو" },
    { src: snapp, alt: "اسنپ" },
    { src: ta, alt: "طاقچه" },
  ];

  return (
    <div className="w-full py-4 pt-[2rem] sm:pt-[1rem] md:py-8 lg:py-12 px-4">
      <div className="max-w-[80%] mx-auto flex justify-center items-center">
        <div
          className="
            py-6 px-4 sm:px-6 md:px-8 lg:px-10
            rounded-2xl sm:rounded-3xl
            relative overflow-hidden
            transition-all duration-300 ease-in-out
            hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%)",
          }}
        >
          {/* گرادیانت بوردر */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-[1px] sm:p-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-500 to-transparent opacity-50"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-IRANYekanBlack text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 sm:mb-6">
              حامیان
            </h3>

            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-[2rem] md:px-[2px]">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="
                    w-24 h-24 md:w-28 md:h-28 lg:w-28 lg:h-28
                    
                    p-2
                    transition-all duration-300 ease-in-out
                    hover:scale-110 cursor-pointer"
                >
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

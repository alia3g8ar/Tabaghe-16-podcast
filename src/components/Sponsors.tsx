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
    <div className="w-full py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div
          className=" 
                    py-8 px-6 md:px-10 
                    rounded-[20px] md:rounded-[35px] 
                    relative overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%)",
          }}
        >
          {/* گرادیانت بوردر */}
          <div className="absolute inset-0 rounded-[20px] md:rounded-[35px] p-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-500 to-transparent opacity-50"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-IRANYekanBlack text-xl md:text-2xl text-white ">
              حامیان
            </h3>

            <div className="flex justify-center items-center gap-16 sm:gap-24 ">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="w-28 h-28 flex items-center justify-center 
                            rounded-xl p-2
                            transition-all duration-300 ease-in-out
                            hover:scale-110 cursor-pointer "
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

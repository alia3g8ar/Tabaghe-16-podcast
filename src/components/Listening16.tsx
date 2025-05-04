import apple from "../assets/Apple.png";
import feed from "../assets/feed.png";
import logoAppAppl from "../assets/logo_app_apple 1.png";
import spotify from "../assets/Spotify.png";
import youtube from "../assets/youtube.png";
import Group from "../assets/Group.png";

export default function Listening16() {
  const platforms = [
    { src: feed, alt: "RSS Feed" },
    { src: logoAppAppl, alt: "Apple Podcasts" },
    { src: Group, alt: "Google Podcasts" },
    { src: apple, alt: "Apple Music" },
    { src: spotify, alt: "Spotify" },
    { src: youtube, alt: "YouTube" },
  ];

  return (
    <div className="w-full py-8 md:py-16 px-4">
      {/* بخش پلتفرم‌های پخش */}
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 
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

          <div className="relative z-10">
            <h3 className="font-IRANYekanBlack text-xl md:text-2xl text-center text-white mb-8 md:mb-10">
              طبقه ۱۶ را اینجا بشنوید
            </h3>

            <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 justify-items-center">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center 
                            rounded-full p-1 sm:p-2 
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

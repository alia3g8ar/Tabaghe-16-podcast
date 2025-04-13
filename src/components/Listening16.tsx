import apple from "../assets/Apple.png";
import feed from "../assets/feed.png";
import logoAppAppl from "../assets/logo_app_apple 1.png";
import spotify from "../assets/Spotify.png";
import youtube from "../assets/youtube.png";
import Group from "../assets/Group.png";

export default function Listening16() {
  return (
    <>
      {/* بخش پلتفرم‌های پخش */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[50%] sm:w-[80%] md:w-[70%] lg:w-[50.1875rem] sm:h-[12.125rem] sm:m-[5.5rem] border-2 border-gray-500 bg-gradient-to-bl from-[#11182780] to-[#ffffff00] rounded-[20px] sm:rounded-[35px] py-6 px-4">
          <p className="font-IRANYekanBlack text-lg sm:text-xl text-center text-white mb-6 sm:pt-[18px]">
            طبقه 16 را اینجا بشنوید
          </p>
          <div className="flex flex-wrap justify-center sm:justify-evenly items-center gap-6 sm:gap-[1px] w-full sm:w-auto sm:h-[50.97px] sm:mt-8 sm:mr-[70px]">
            <img
              src={feed}
              alt="RSS Feed"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
            <img
              src={logoAppAppl}
              alt="Apple Podcasts"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
            <img
              src={Group}
              alt="Google Podcasts"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
            <img
              src={apple}
              alt="Apple Music"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
            <img
              src={spotify}
              alt="Spotify"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
            <img
              src={youtube}
              alt="YouTube"
              className="w-10 h-10 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

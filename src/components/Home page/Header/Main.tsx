import image1 from "../../../assets/عکس 1.jfif";
import image2 from "../../../assets/عکس 2.jfif";
import image3 from "../../../assets/عکس 3.jfif";
import image4 from "../../../assets/عکس اصلی.jfif";
import wave from "../../../assets/equalizer 1.png";

import apple from "../../../assets/Apple.png";
import feed from "../../../assets/feed.png";
import logoAppAppl from "../../../assets/logo_app_apple 1.png";
import spotify from "../../../assets/Spotify.png";
import youtube from "../../../assets/youtube.png";
import Group from "../../../assets/Group.png";

export default function Main() {
  return (
    <>
      <header className=" bg-gray-200 text-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* سمت راست - بخش متن */}
          <div className="w-full lg:w-2/5 space-y-6 bg-gray-900/50 p-6 rounded-xl border border-gray-800/50">
            <div className="space-y-2">
              <p className="font-normal text-2xl text-gray-400 font-IRANYekanRegular">
                سهیل در
              </p>
              <h1 className="text-4xl lg:text-5xl font-IRANYekanExtraBold leading-tight">
                پادکست طبقه ۱۶
              </h1>
              <p className="text-gray-400 text-lg font-IRANYekanRegular">
                در مورد چه صحبت می‌کند؟
              </p>
            </div>

            <div>
              <p className="text-gray-300 leading-relaxed text-justify text-sm font-IRANYekanRegular">
                نوع ایسیم متن ساختی با تولید ساکن نامه‌یوم از صنعت چاپ و یا
                استفاده از طراحی کافیک است، چارگوها و متون پایه روزانه و حمله در
                ستون و مسأل‌های که لازم است و برای شرایط عامل تکنولوژی مورد نیاز
                و داروهای متنوع با هدف مورد ارزیابی کاربردی می باشد.
              </p>
            </div>
          </div>

          {/* سمت چپ - بخش تصاویر */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center">
            {/* تصویر اصلی */}
            <div className="relative w-[391px] h-[220px] top-[34px] bg-gray-800 rounded-[110px] border border-gray-700/50 overflow-hidden shadow-lg z-10">
              <img
                src={image4}
                alt="تصویر اصلی"
                className="w-full h-full object-cover"
              />
            </div>

            {/* تصاویر پس‌زمینه */}
            <div className="absolute top-[6px] left-[360px] w-[295px] h-[166px] bg-gray-700/80 rounded-[83px] overflow-hidden opacity-60 z-0 border border-gray-700/50">
              <img
                src={image1}
                alt="تصویر 1"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="absolute top-[167px] left-[400px] w-[192px] h-[109px] bg-gray-700/80 rounded-[63.5px] overflow-hidden opacity-60 z-0 border border-gray-700/50">
              <img
                src={image2}
                alt="تصویر 2"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="absolute top-[260px] left-[285px] w-[174px] h-[97px] bg-gray-700/80 rounded-[360px] overflow-hidden opacity-60 z-0 border border-gray-700/50">
              <img
                src={image3}
                alt="تصویر 3"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* موج صدا */}
            <div className="w-[281px] h-[201px] absolute top-[220px] left-[60px] rounded-full overflow-hidden opacity-80">
              <img
                src={wave}
                alt="موج صدا"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </header>
      <div className=" w-[50.1875rem] h-[12.125rem] m-[5.5rem] border-2 border-gray-500  mx-auto bg-gradient-to-bl from-[#11182780] to-[#ffffff00] rounded-[35px] ">
        <p className="font-IRANYekanBlack  text-xl text-center text-white pt-[18px] ">
          طبقه 16 را اینجا بشنوید
        </p>
        <div className="flex gap-[70px] w-[50.97px] h-[50.97px] mt-8 mr-[70px] ">
          <img src={feed} alt="" />
          <img src={logoAppAppl} alt="" />
          <img src={Group} alt="" />
          <img src={apple} alt="" />
          <img src={spotify} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
     
      /* Rectangle 2 */

box-sizing: border-box;

position: absolute;
width: 803px;
height: 194px;
left: 318px;
top: 747px;

background: linear-gradient(226.94deg, rgba(255, 255, 255, 0.02) 0.98%, rgba(255, 255, 255, 0) 98.71%);
border-radius: 35px;

    </>
  );
}

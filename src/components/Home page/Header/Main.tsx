import image1 from "../../../assets/عکس 1.jfif";
import image2 from "../../../assets/عکس 2.jfif";
import image3 from "../../../assets/عکس 3.jfif";
import image4 from "../../../assets/عکس اصلی.jfif";
import wave from "../../../assets/equalizer 1.png";
export default function Main() {
  return (
    <header className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* سمت راست - بخش متن */}
        <div
          className="w-full lg:w-2/5 space-y-6 bg-gray-900/50 p-6 rounded-xl border-gray-800 mr-[97px]"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderImage:
              "linear-gradient(to left, rgb(31 41 55), transparent) 1",
          }}
        >
          <div className="space-y-2">
            <p className="font-medium">سهیل در</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              پادکست طبقه ۱۶
            </h1>
            <p className="text-gray-400 text-lg">در مورد چه صحبت می‌کند؟</p>
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed text-justify text-sm">
              نوع ایسیم متن ساختی با تولید ساکن نامه‌یوم از صنعت چاپ و یا
              استفاده از طراحی کافیک است، چارگوها و متون پایه روزانه و حمله در
              ستون و مسأل‌های که لازم است و برای شرایط عامل تکنولوژی مورد نیاز و
              داروهای متنوع با هدف مورد ارزیابی کاربردی می باشد. کنترلی به این
              فصل نیست و سه زمین داشته تا با آزمایش گذاشت وزارت جامعه و مشخصات
              را می‌دانند تا دو افزودن شناخت بیشتری را برای طراحی زیاد می‌تواند
              از علل تشخیص سازمان خلق.
            </p>
          </div>
        </div>

        {/* سمت چپ - بخش تصاویر */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center gap-6">
          {/* تصویر اصلی */}
          <div className="relative w-[391px] h-[220px] top-[34px]  bg-gray-800 rounded-[110px] border border-solid border-gray-700 overflow-hidden shadow-lg z-10">
            {/* اینجا شما می‌توانید تصویر اصلی را جایگزین کنید */}
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <img
                src={image4}
                alt="Said Rahmani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* تصاویر پس‌زمینه */}
          <div className="absolute top-[6px] left-[360px] w-[295px] h-[166px] bg-gray-700 rounded-[83px] overflow-hidden opacity-60 z-0 border border-solid border-gray-700">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <img
                src={image1}
                alt="تصویر 1"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="absolute top-[167px] left-[400px] w-[192px] h-[109px] bg-gray-700 rounded-[63.5px] overflow-hidden opacity-60 z-0 border border-solid border-gray-700">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <img
                src={image2}
                alt="تصویر 2"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="absolute top-[260px] left-[285px] w-[174px] h-[97px] bg-gray-700 rounded-[360px] overflow-hidden opacity-60 z-0 border border-solid border-gray-700">
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <img
                src={image3}
                alt="تصویر 3"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* موج صدا */}
          <div className="w-[281px] h-[201px] absolute top-[220px] left-[60px] rounded-full overflow-hidden">
            <img
              src={wave}
              alt="موج صدا"
              className="h-full w-full object-cover grayscale "
            />
          </div>
        </div>
      </div>
    </header>
  );
}

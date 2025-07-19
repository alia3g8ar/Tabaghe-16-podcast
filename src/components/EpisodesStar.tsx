import image1 from "../assets/عکس 1.jfif";
import image2 from "../assets/عکس 2.jfif";
import image3 from "../assets/عکس 3.jfif";
import image4 from "../assets/عکس اصلی.jfif";

const EpisodesStar = () => {
  const episodes = [
    {
      UrlImg: image1,
      title: "سرآوا",
      guest: "سعید رحمانی",
      time: "01:25:45",
    },
    {
      UrlImg: image2,
      title: "استراتژی پروکورین",
      guest: "سعید رحمانی",
      time: "01:25:45",
    },
    {
      UrlImg: image3,
      title: "مدیریت مهندسی",
      guest: "سعید رحمانی",
      time: "01:25:45",
    },
    {
      UrlImg: image4,
      title: "هوش مصنوعی",
      guest: "سعید رحمانی",
      time: "01:25:45",
    },
  ];

  return (
    <>
      <div className="w-full h-auto mt-2 md:mt-10">
        <h4 className="  text-white mx-auto text-2xl sm:text-2xl lg:text-2xl font-IRANYekanExtraBold leading-tight text-center">
          اپیزود های منتخب
        </h4>
        <div className="w-[100%] sm:w-[80%] mx-auto px-2 py-0 sm:py-8 md:py-12">
          <div className="grid grid-cols-2 scale-[0.90] sm:scale-[1] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className=" rounded-t-[5px] shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-32 md:h-48 rounded-t-[35px] overflow-hidden">
                  <img
                    src={episode.UrlImg}
                    alt={episode.title || "تصویر اپیزود"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-black py-2">
                  <h4 className="text-white text-xl font-IRANYekanExtraBold leading-tight text-right mb-4 line-clamp-2">
                    {episode.title}
                  </h4>
                  {episode.guest && episode.time && (
                    <div className="flex justify-between w-[100%] text-gray-500 mt-[22px] text-[12px] md:text-[14px] font-IRANYekanExtraBold">
                      <span>مهمان: {episode.guest}</span>
                      <span>{episode.time}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodesStar;

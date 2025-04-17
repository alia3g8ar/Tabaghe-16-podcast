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
        <h4 className="mb-6 text-white mx-auto text-2xl sm:text-2xl lg:text-2xl font-IRANYekanExtraBold leading-tight text-center">
          اپیزود های منتخب
        </h4>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className=" rounded-t-[10px] shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48 md:h-56 rounded-t-[60px] overflow-hidden">
                  <img
                    src={episode.UrlImg}
                    alt={episode.title || "تصویر اپیزود"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-black p-4">
                  <h4 className="text-white text-xl font-IRANYekanExtraBold leading-tight text-right mb-4 line-clamp-2">
                    {episode.title}
                  </h4>
                  {episode.guest && episode.time && (
                    <div className="flex flex-wrap justify-between text-gray-500 mt-[27px] text-sm md:text-base font-IRANYekanExtraBold">
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

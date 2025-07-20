import image1 from "/images/img_1.jfif";
import image2 from "/images/img_2.jfif";
import image3 from "/images/img_3.jfif";
import image4 from "/images/img_4.jpg";

const EndEpisodes = () => {
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
          اپیزود های طبقه 16
        </h4>
        <div className="w-[100%] sm:w-[80%] mx-auto px-2 py-0 sm:py-8 md:py-12">
          <div className="grid grid-cols-2 grid-rows-1 scale-[0.90] sm:scale-[1] sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="p-2 flex items-center rounded-[15px] shadow-lg transform transition-transform duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%)",
                }}
              >
                <div className="text-white ml-2 text-xl font-IRANYekanExtraBold leading-tight font-bold">
                  ۱۶.
                </div>
                <div className="relative h-16  w-28 rounded-[5px] overflow-hidden ml-2">
                  <img
                    src={episode.UrlImg}
                    alt={episode.title || "تصویر اپیزود"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-IRANYekanExtraBold leading-tight text-right ">
                    {episode.title}
                  </h4>
                  {episode.guest && (
                    <div className="flex justify-between w-[100%] text-gray-500 text-[12px] md:text-[13.5px] font-IRANYekanExtraBold">
                      <span>مهمان: {episode.guest}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <h5 className=" mb-0 mt-6 sm:mb-6 text-white mx-auto text-xs  font-IRANYekanExtraBold leading-tight text-center">
            مشاهده همه
          </h5>
        </div>
      </div>
    </>
  );
};

export default EndEpisodes;

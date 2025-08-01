import image1 from "/images/img_1.jfif";
import image2 from "/images/img_2.jfif";
import image3 from "/images/img_3.jfif";
import image4 from "/images/img_4.jpg";

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
        className="rounded-[10px] shadow-lg transform transition-transform duration-300 hover:scale-105 
        relative p-[1px] bg-gradient-to-t from-white/20 to-transparent"
      >
        {/* محتوای اصلی کارت */}
        <div className="relative h-full w-full bg-black rounded-[10px] overflow-hidden">
          {/* بخش تصویر */}
          <div className="relative h-40 md:h-56 w-full">
            <img
              src={episode.UrlImg}
              alt={episode.title || "تصویر اپیزود"}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* بخش متن */}
          <div className="p-3">
            <h4 className="text-white text-xl font-IRANYekanExtraBold leading-tight text-right mb-5 line-clamp-2">
              {episode.title}
            </h4>
            
            {episode.guest && episode.time && (
              <div className="flex justify-between w-[100%] text-gray-400 text-[12px] md:text-[14px] font-IRANYekanExtraBold">
                <span>مهمان: {episode.guest}</span>
                <span>{episode.time}</span>
              </div>
            )}
          </div>
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

// src/App.tsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import img from "../../assets/عکس 1.jfif";
import Footer from "../../components/Footer";
interface Video {
  id: number;
  title: string;
  youtube_url: string;
  thumbnail: string;
  duration: string;
  guest: string;
}

const Podcasts = (): React.ReactElement => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="w-[100%] flex justify-center h-auto mt-4 md:mt-10">
          <div className="w-[80%] mx-auto flex flex-col px-4 sm:px-6 py-4">
            <h4 className="mb-0 sm:mb-2 text-white text-xl font-IRANYekanExtraBold leading-tight text-right">
              لیست ویدیوکست ها
            </h4>
            <div className="text-white text-center py-8">
              در حال بارگذاری...
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="w-[100%] flex justify-center h-auto mt-4 md:mt-10">
          <div className="w-[80%] mx-auto flex flex-col px-4 sm:px-6 py-4">
            <h4 className="mb-0 sm:mb-2 text-white text-xl font-IRANYekanExtraBold leading-tight text-right">
              لیست ویدیوکست ها
            </h4>
            <div className="text-red-500 text-center py-8">{error}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-[100%] flex justify-center h-auto mt-4 md:mt-10">
        <div className="w-[100%] sm:w-[80%] mx-auto flex flex-col px-4 sm:px-6 py-4">
          <h4 className="mb-0 sm:mb-2 text-white text-xl font-IRANYekanExtraBold leading-tight text-right">
            لیست ویدیوکست ها
          </h4>
          <div className="container items-center mx-auto py-0 sm:py-8 md:py-12">
            <div className="grid grid-cols-2 mt-5 md:mt-1 scale-[1] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-t-[1px] shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() =>
                    window.open(
                      video.youtube_url.replace("embed", "watch"),
                      "_blank"
                    )
                  }
                >
                  <div className="relative h-42 md:h-50 rounded-t-[5px] overflow-hidden">
                    <img
                      // src={video.thumbnail}
                      src={img}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-black py-2 ">
                    <h4 className="text-white text-[15px] font-IRANYekanExtraBold leading-tight text-right mb-4 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex justify-between w-[100%] text-gray-500 mt-[22px] text-[12px] md:text-base font-IRANYekanExtraBold">
                      <span>مهمان: علی رحمتی</span>
                      <span>01:25:21</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Podcasts;

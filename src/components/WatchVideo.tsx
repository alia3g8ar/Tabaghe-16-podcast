import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

interface Video {
  id: number;
  title: string;
  youtube_url: string;
  thumbnail: string;
  duration: string;
  guest: string;
}

const WatchVideo = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/videos/${id}`);
        if (!response.ok) throw new Error("ویدیو یافت نشد");
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading)
    return (
      <div className="text-white text-center py-8">در حال بارگذاری...</div>
    );
  if (!video)
    return <div className="text-red-500 text-center py-8">ویدیو یافت نشد!</div>;

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full sm:w-4/5 mx-auto px-4 sm:px-6 py-4">
        <h1 className="text-white text-2xl font-IRANYekanExtraBold text-right mb-6">
          {video.title}
        </h1>

        {/* پلیر یوتیوب */}
        <div className="player-wrapper">
          <ReactPlayer
            url={video.youtube_url}
            controls={true}
            width="100%"
            height="400px"
            className="react-player"
          />
        </div>
        {/* اطلاعات ویدیو */}
        <div className="text-white text-right">
          <p className="font-IRANYekanBold">مهمان: {video.guest}</p>
          <p>مدت زمان: {video.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../utils/api";

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
    const loadVideo = async () => {
      try {
        const data = await fetchVideo(id!);
        setVideo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [id]);

  if (loading)
    return (
      <div className="text-white text-center py-8">در حال بارگذاری...</div>
    );

  if (!video)
    return <div className="text-red-500 text-center py-8">ویدیو یافت نشد!</div>;

  // استخراج کد ویدیوی یوتیوب از URL
  const extractYoutubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = extractYoutubeId(video.youtube_url);
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : "";

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full sm:w-4/5 mx-auto px-4 sm:px-6 py-4">
        <h1 className="text-white text-2xl font-IRANYekanExtraBold text-right mb-6">
          {video.title}
        </h1>

        <div className="relative pb-[56.25%] h-0 overflow-hidden mb-6">
          {youtubeId && (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="text-white text-right">
          <p className="font-IRANYekanBold">مهمان: {video.guest}</p>
          <p>مدت زمان: {video.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;

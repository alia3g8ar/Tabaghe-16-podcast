import apple from "../assets/Apple.png";
import feed from "../assets/feed.png";
import logoAppAppl from "../assets/logo_app_apple 1.png";
import spotify from "../assets/Spotify.png";
import youtube from "../assets/youtube.png";
import Group from "../assets/Group.png";

import appleD from "../assets/AppleD.png";
import feedD from "../assets/feedD.png";
import IvooxD from "../assets/IvooxD.png";
import SpotifyD from "../assets/SpotifyD.png";
import youtubeD from "../assets/youtubeD.png";

import vector1 from "../assets/vector.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import vector4 from "../assets/vector4.png";
import instagram from "../assets/instagram.png";

interface Platform {
  src: string;
  alt: string;
}

interface PlatformDark {
  src: string;
  alt: string;
}
interface vector {
  src: string;
  alt: string;
}

const platforms: Platform[] = [
  { src: apple, alt: "Apple Music" },
  { src: feed, alt: "RSS Feed" },
  { src: Group, alt: "Google Podcasts" },
  { src: logoAppAppl, alt: "Apple Podcasts" },
  { src: spotify, alt: "Spotify" },
  { src: youtube, alt: "YouTube" },
];

const platformsDark: PlatformDark[] = [
  { src: appleD, alt: "RSS Feed" },
  { src: feedD, alt: "Apple Podcasts" },
  { src: IvooxD, alt: "Google Podcasts" },
  { src: SpotifyD, alt: "Apple Music" },
  { src: youtubeD, alt: "Spotify" },
];

const vectors: vector[] = [
  { src: vector1, alt: "twitter" },
  { src: vector2, alt: "vector2" },
  { src: vector3, alt: "vector3" },
  { src: vector4, alt: "vector4" },
  { src: instagram, alt: "Instagram" },
];

export { platforms, platformsDark, vectors };

import Main from "../../components/Baner";
import EndEpisodes from "../../components/EndEpisodes";
import EpisodesStar from "../../components/EpisodesStar";
import Footer from "../../components/Footer";
import Listening16 from "../../components/Listening16";
import Navbar from "../../components/Navbar";
import ShortVideos from "../../components/ShortVideos";
import Sponsors from "../../components/Sponsors";

const Home = (): React.ReactElement => {
  return (
    <div className="bg-black">
      <Navbar />
      <Main />
      <Listening16 />
      <EpisodesStar />
      <EndEpisodes />
      <Sponsors />
      <ShortVideos />
      <Footer />
    </div>
  );
};

export default Home;

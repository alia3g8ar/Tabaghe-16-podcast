import Main from "../../components/Baner";
import EpisodesStar from "../../components/EpisodesStar";
import Listening16 from "../../components/Listening16";
import Navbar from "../../components/Navbar";

const Home = (): React.ReactElement => {
  return (
    <div className="bg-black">
      <Navbar />
      <Main />
      <Listening16 />
      <EpisodesStar />
    </div>
  );
};

export default Home;

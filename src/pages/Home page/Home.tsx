import Main from "../../components/Baner";
import EpisodesStar from "../../components/EpisodesStar";
import Listening16 from "../../components/Listening16";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.tsx";

const Home = (): React.ReactElement => {
  return (
    <div className="bg-black">
      <Navbar />
      <Main />
      <Listening16 />
      <EpisodesStar />
      <Footer />
    </div>
  );
};

export default Home;

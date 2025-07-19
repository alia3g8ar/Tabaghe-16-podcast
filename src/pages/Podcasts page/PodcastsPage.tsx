import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Podcasts from "../../components/Podcasts";

const PodcastsPage = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <Podcasts />
      <Footer />
    </>
  );
};

export default PodcastsPage;

import CarouselHome from "../../components/Ads/Ads";
import Categories from "../../components/Categories/Categories";
import Recents from "../../components/Recents/Recents";
const Home: React.FC = () => {
  return (
    <>
      <div className="mt-3">
        <CarouselHome />
      </div>
      <div className="mt-3">
        <Categories />
      </div>
      <div className="mt-3">
        <Recents />
      </div>
    </>
  );
};
export default Home;

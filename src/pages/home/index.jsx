import Collections from "./components/Collections";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import Offers from "./components/Offers";
import TrustFeatures from "./components/TrustFeatures";

const Home = () => {
  return (
    <div id="home" className="page flex flex-col gap-10 lg:gap-30">
      <Hero />
       <Collections />
      <NewArrivals />
      <Offers />
      <TrustFeatures />
    </div>
  );
};
export default Home;

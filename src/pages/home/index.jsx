// import About from "./components/About";
// import Banner from "./components/Banner";
// import Customers from "./components/customers";
// import Experience from "./components/Experience";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
// import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div id="home" className="page flex flex-col gap-10 lg:gap-30">
      <Hero />
       <Collections />
      {/*<About />
      <Banner />
      <Experience />
      <Testimonials />
      <Customers /> */}
    </div>
  );
};
export default Home;

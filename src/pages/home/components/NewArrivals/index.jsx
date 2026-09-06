import SliderProducts from "../../../../components/shared/sliders/SliderProducts";
import TitleAccent from "../../../../components/shared/TitleAccent";
import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"
import p5 from "../../assets/images/p5.jpg"

const NewArrivals = () => {

  const slides = [
    {
      id: 1,
      image: p1,
      title: "p1",
      price: "1000$",
      description: "-",
      buttonText: "خرید",
    },
    {
      id: 2,
      image: p2,
      title: "p2",
      price: "1000$",
      description: "-",
      buttonText: "خرید",
    },
    {
      id: 3,
      image: p3,
      title: "p3",
      price: "1000$",
      description: "-",
      buttonText: "خرید",
    },
    {
      id: 4,
      image: p4,
      title: "p4",
      price: "1000$",
      description: "-",
      buttonText: "خرید",
    },
    {
      id: 5,
      image: p5,
      title: "p5",
      price: "1000$",
      description: "-",
      buttonText: "خرید",
    },
  ];

  return (
    <section id="new-arrivals">
      <div className="app-container flex flex-col">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="text-[var(--color-secondary)]/40 tracking-[10px]">
            New Arrivals
          </div>
          <h2 className="text-[var(--color-secondary)]">جدیدترین ها</h2>
          <TitleAccent />
          <br />
          <SliderProducts items={slides}/>
        </div>
      </div>
    </section>
  );
};
export default NewArrivals;

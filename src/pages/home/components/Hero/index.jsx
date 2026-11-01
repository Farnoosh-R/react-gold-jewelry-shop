// import Button from "../../../../components/shared/Button";
// import hero from "../../assets/images/hero.png";

// const Hero = () => {
//   return (
//     <section id="hero" className="-mt-20">
//       <div
//         className="w-full h-[65vh] lg:h-screen rounded-bl-[350px]"
//         style={{
//           backgroundImage: `url(${hero})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="app-container relative h-full">
//           <div className="flex flex-col gap-3 absolute left-0 top-35 max-[767px]:right-5">
//             <span
//               className="bg-clip-text text-transparent tracking-[20px]"
//               style={{
//                 backgroundImage: "var(--gradient-secondary)",
//               }}
//             >
//               TIMELESS ELEGANCE
//             </span>

//             <div>
//               <h1 className="text-[var(--color-secondary)]">درخشش متفاوت</h1>
//               <h1 className="text-[var(--color-light)]">را انتخاب کن</h1>
//             </div>

//             <div className="flex gap-2">
//               <Button variant="primary" btnType="gradient" size="lg">
//                 مشاهده کالکشن ها
//               </Button>
//               <Button variant="secondary" btnType="gradient" size="lg">
//                 خرید جدیدترین ها
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;

import Button from "../../../../components/shared/Button";
import hero from "../../assets/images/hero.png";

const Hero = () => {
return ( <section id="hero" className="-mt-20"> <div className="relative w-full h-[65vh] lg:h-screen rounded-bl-[350px] overflow-hidden">

    {/* Background Image */}
    <div
      className="absolute inset-0 max-[767px]:brightness-[0.3]"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Content */}
    <div className="app-container relative h-full">
      <div className="flex flex-col gap-3 absolute left-0 top-35 max-[767px]:left-auto max-[767px]:right-5">
        <span
          className="bg-clip-text text-transparent tracking-[20px]"
          style={{
            backgroundImage: "var(--gradient-secondary)",
          }}
        >
          TIMELESS ELEGANCE
        </span>

        <div>
          <h1 className="text-[var(--color-secondary)]">
            درخشش متفاوت
          </h1>
          <h1 className="text-[var(--color-light)]">
            را انتخاب کن
          </h1>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" btnType="gradient" size="lg">
            مشاهده کالکشن ها
          </Button>
          <Button variant="secondary" btnType="gradient" size="lg">
            خرید جدیدترین ها
          </Button>
        </div>
      </div>
    </div>

  </div>
</section>


);
};

export default Hero;

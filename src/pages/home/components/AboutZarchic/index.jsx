import flowerBush from "../../assets/images/flowerBush.png";
import logo from "../../../../assets/images/logo.png";

const AboutZarchic = () => {
  return (
    <section id="about-zarchic" className="">
      <div className="app-container border border-[var(--color-secondary)]/10 py-15 rounded-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-1 lg:border-l-2 lg:border-[var(--color-secondary)]/30">
            <div className="flex flex-col items-center gap-1 mb-10 lg:mb-0">
              <img src={logo} className="w-20" alt="zarchic" />
              <h2 className="text-[var(--color-secondary)]/70">Zarchic</h2>
              <div className="text-[var(--color-secondary)]/40 text-[13px]">
                Timeless Elegance
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col lg:flex-row justify-center tems-center pr-10">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <h2 className="text-[var(--color-secondary)]">زرشیک،</h2>
                  <h2>درخشش در جزئیات</h2>
                </div>
                <div className="leading-8">
                  در زرشیک باور داریم هر قطعه طلا، فراتر از یک زیور، بازتابی از
                  سلیقه و شخصیت شماست. مجموعه‌ای از زیورآلات طلا با طراحی‌های
                  ظریف و ماندگار را گرد هم آورده‌ایم تا انتخاب و خرید آنلاین
                  طلا، تجربه‌ای ساده و لذت‌بخش باشد.
                </div>
              </div>
              <img
                src={flowerBush}
                alt=""
                className="w-90 h-full object-cover opacity-40 -ml-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutZarchic;

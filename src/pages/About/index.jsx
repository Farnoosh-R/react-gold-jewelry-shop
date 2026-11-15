import about2 from "./assets/images/about2.jpg";
import about3 from "./assets/images/about3.jpg";
import shine from "./assets/images/shine.png";
import logo from "../../assets/images/logo.png";
import { FaGem, FaHeart, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div class="text-[var(--color-secondary)]/40 tracking-[10px]">
                Our Story
              </div>
              <h2 className="text-[var(--color-secondary)]">درباره زرشیک</h2>
            </div>
            <div className="text-[var(--color-light)] leading-8">
              در زرشیک باور داریم هر قطعه طلا، فراتر از یک زیور، بازتابی از
              سلیقه و شخصیت شماست. ما مجموعه‌ای از زیورآلات طلا با طراحی‌های
              ظریف، ماندگار و چشم‌نواز را گرد هم آورده‌ایم تا انتخاب و خرید
              آنلاین طلا، تجربه‌ای ساده و لذت‌بخش باشد. زرشیک تلاش می‌کند با
              ارائه مجموعه‌ای متنوع از انگشتر طلا، گردنبند طلا، دستبند طلا،
              گوشواره طلا و سایر زیورآلات، انتخابی متناسب با سلیقه و سبک زندگی
              هر فرد فراهم کند. هر طراحی با نگاهی به زیبایی، ظرافت و ماندگاری
              انتخاب شده تا بتوانید برای لحظه‌های خاص زندگی، زیوری منحصربه‌فرد
              انتخاب کنید. برای ما طلا فقط یک زیور نیست؛ بخشی از داستان، سبک و
              لحظه‌های ماندگار زندگی شماست. زرشیک اینجاست تا این لحظه‌ها را
              درخشان‌تر کند.
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
              <div className="flex gap-2 items-center">
                <div>
                  <FaGem size={30} color="var(--color-secondary)" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[var(--color-light)] font-bold">
                    طراحی ظریف و خاص
                  </div>
                  <div className="text-[var(--color-gray)]">
                    برای سلیقه‌های متفاوت
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <FaShieldAlt size={30} color="var(--color-secondary)" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[var(--color-light)] font-bold">
                    اصالت و اطمینان
                  </div>
                  <div className="text-[var(--color-gray)]">
                    تجربه‌ای مطمئن در انتخاب
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <div>
                  <FaHeart size={30} color="var(--color-secondary)" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[var(--color-light)] font-bold">
                    برای لحظه‌های ماندگار
                  </div>
                  <div className="text-[var(--color-gray)]">
                    انتخاب های به یاد ماندنی
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------ */}
          <div className="relative flex justify-center gap-1">
            <div className="flex flex-col justify-center">
              <div className="w-70 h-75 overflow-hidden rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]">
                <img src={about2} className="object-cover w-full" alt="" />
              </div>
            </div>
            <div className="relative flex flex-col justify-end gap-1">
              <div className="absolute bottom-20 -right-10 flex justify-center items-center rounded-full w-20 h-20 bg-[var(--color-primary-dark)] border-4 border-[var(--color-primary)]">
                <img src={logo} className="w-12" alt="logo" />
              </div>
              <div className="absolute flex top-0 left-25 w-50 h-18 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl justify-center items-center">
                <img src={shine} className="object-cover w-full" alt="shine" />
              </div>
              <div className="w-60 h-50 -mb-20 overflow-hidden rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px]">
                <img
                  src={about3}
                  className="object-cover w-full"
                  alt="about2"
                />
              </div>
              <div className="absolute w-[150px] h-[100px] bottom-10 -left-5 rounded-tl-[20px] rounded-tr-[50px] rounded-bl-[50px] bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-[var(--color-primary)] py-10">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="flex flex-col gap-1 justify-center items-center">
            <img src={logo} alt="logo" className="w-20" />
            <div className="tracking-[10px] text-lg">ZARCHIC</div>
            <div className="text-[var(--color-light)]">
              برای زیبایی‌هایی که هرگز از یاد نمی‌روند
            </div>
            <div className="flex gap-4 mt-4">
              <div
                className="border border-[var(--color-light)] rounded-full p-2 cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-[var(--color-secondary)]
                hover:border-[var(--color-secondary)]
                hover:scale-110
                hover:-translate-y-1
                hover:shadow-[0_6px_20px_rgba(188,149,94,0.35)]"
              >
                <FaInstagram
                  size={15}
                  color="var(--color-light)"
                  className="transition-transform duration-300"
                />
              </div>
              <div
                className="border border-[var(--color-light)] rounded-full p-2 cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-[var(--color-secondary)]
                hover:border-[var(--color-secondary)]
                hover:scale-110
                hover:-translate-y-1
                hover:shadow-[0_6px_20px_rgba(188,149,94,0.35)]"
              >
                <FaWhatsapp
                  size={15}
                  color="var(--color-light)"
                  className="transition-transform duration-300"
                />
              </div>
              <div
                className="border border-[var(--color-light)] rounded-full p-2 cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-[var(--color-secondary)]
                hover:border-[var(--color-secondary)]
                hover:scale-110
                hover:-translate-y-1
                hover:shadow-[0_6px_20px_rgba(188,149,94,0.35)]"
              >
                <FaTelegramPlane
                  size={15}
                  color="var(--color-light)"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[var(--color-light)]">
            <div className="text-lg">دسترسی سریع</div>
            <div className="flex flex-col gap-2">
              <Link to={"/"} className="hover:text-[var(--color-secondary)]">
                صفحه اصلی
              </Link>
              <Link
                to={"/about"}
                className="hover:text-[var(--color-secondary)]"
              >
                درباره ما
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-[var(--color-secondary)]"
              >
                تماس با ما
              </Link>
              <Link
                to={"/store"}
                className="hover:text-[var(--color-secondary)]"
              >
                فروشگاه
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[var(--color-light)]">
            <div className="text-lg">مقالات منتخب</div>
            <div className="flex flex-col gap-2">
              <Link to={"/"} className="hover:text-[var(--color-secondary)]">
                راهنمای خرید طلا
              </Link>
              <Link
                to={"/about"}
                className="hover:text-[var(--color-secondary)]"
              >
                راز درخشش طلا
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-[var(--color-secondary)]"
              >
                دنیای سنگ‌های قیمتی
              </Link>
              <Link
                to={"/store"}
                className="hover:text-[var(--color-secondary)]"
              >
                مراقبت از جواهرات
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[var(--color-light)]">
            <div className="text-lg">ارتباط با ما</div>
            <div className="flex gap-3">
              <FaPhoneAlt size={18} />
              <div>99898767 - 021</div>
            </div>
            <div className="flex gap-3">
              <FaEnvelope size={18} />
              <div>jadora@gmail.com</div>
            </div>
            <div className="flex gap-3">
              <FaMapMarkerAlt size={18} />
              <div>تهران، خ مطهری، کوچه اول، پلاک پنجم</div>
            </div>
          </div>
          <div className="text-white">
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=8575801&Code=93VDh2FzRfysIR2X273Jsd74scNcFJif"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=8575801&Code=93VDh2FzRfysIR2X273Jsd74scNcFJif"
                alt="نماد اعتماد الکترونیکی"
                style={{ cursor: "pointer" }}
                code="93VDh2FzRfysIR2X273Jsd74scNcFJif"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

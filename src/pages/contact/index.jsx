import contactBg from "./assets/images/contactBg.png";
import { FaHeadset } from "react-icons/fa";
import { LuClock, LuMapPin } from "react-icons/lu";
import TitleAccent from "../../components/shared/TitleAccent";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relativ mt-20 w-full h-screen"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full  h-screen"></div>
      <div className="app-container">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-1 justify-center items-center mt-40">
            <div className="text-[var(--color-secondary)]/40 tracking-[10px]">
              Contact
            </div>
            <h2 className="text-[var(--color-secondary)]">تماس با ما</h2>
            <TitleAccent />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
            <div className="">
              <div className="flex flex-col leading-18 text-[70px] text-[var(--color-primary-muted)] opacity-20">
                <div>GET IN</div>
                <div>TOUCH</div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[var(--color-primary-light)] px-10 py-7 rounded-2xl">
              <FaHeadset color="var(--color-primary-muted)" size={50} />
              <div className="flex flex-col gap-1">
                <div className="text-lg text-[var(--color-light)]">
                  ارتباط با فروشگاه
                </div>
                <div className="text-[var(--color-primary-muted)]">
                  4450 3664 21+
                </div>
                <div className="text-[var(--color-primary-muted)]">
                  info@gmail.com
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[var(--color-primary-light)] px-10 py-7 rounded-2xl">
              <LuClock color="var(--color-primary-muted)" size={50} />
              <div className="flex flex-col gap-1">
                <div className="text-lg text-[var(--color-light)]">
                  ساعت کاری فروشگاه
                </div>
                <div className="text-[var(--color-primary-muted)]">
                  شنبه تا چهارشنبه از 8 تا 10 شب پنجشنبه و جمعه از ساعت 8 تا 5
                  بعدازظهر
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[var(--color-primary-light)] px-10 py-7 rounded-2xl">
              <LuMapPin color="var(--color-primary-muted)" size={50} />
              <div className="flex flex-col gap-1">
                <div className="text-lg text-[var(--color-light)]">
                  آدرس فروشگاه
                </div>
                <div className="text-[var(--color-primary-muted)]">
                  تهران، خ مطهری، کوچه اول
                  <br />
                  پلاک 1، واحد 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

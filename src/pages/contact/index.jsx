import contactBg from "./assets/images/contactBg.png";
import { FaHeadset } from "react-icons/fa";
import { LuClock, LuMapPin } from "react-icons/lu";

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-60 place-items-center">
            <div className="bg-[var(--color-primary-light)] p-10">
                <FaHeadset color="var(--color-muted)" size={50}/>
            </div>
            <div>
                <LuClock color="var(--color-muted)" size={50}/>
            </div>
            <div><LuMapPin color="var(--color-muted)" size={50}/></div>
            <div>1</div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

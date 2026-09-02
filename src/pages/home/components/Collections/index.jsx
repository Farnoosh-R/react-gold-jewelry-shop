import { Link } from "react-router-dom";
import col1 from "../../assets/images/col1.jpg";
import col2 from "../../assets/images/col2.jpg";
import col3 from "../../assets/images/col3.jpg";
import col4 from "../../assets/images/col4.jpg";
import TitleAccent from "../../../../components/shared/TitleAccent";

const Collections = () => {
  return (
    <section id="collections">
      <div className="app-container flex flex-col gap-8">
        <div className="flex flex-col gap-1 justify-center items-center">
            <div className="text-[var(--color-secondary)]/40 tracking-[10px]">Collections</div>
            <h2 className="text-[var(--color-secondary)]">کالکشن ها</h2>
            <TitleAccent />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-end">
            
            <Link className="flex flex-col w-3/5 h-[300px] text-center group">
            
              <div className="image-holder  rounded-tr-3xl rounded-tl-3xl shadow-2xl overflow-hidden relative">
                <img src={col1} className="" alt="" />
                <div className="opacity-0 absolute top-0 left-0 w-full h-full rounded-tl-3xl rounded-tr-3xl bg-black/40 z-10 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-bl-3xl rounded-br-3xl p-3">
                <div className=" text-xl">Eternal Glow</div>
                <div className="text-[var(--color-light)]">مشاهده کالکشن</div>
              </div>
            </Link>
          </div>
          <div className="flex justify-start">
            <Link className="flex flex-col w-3/5 h-[300px] text-center group">
              <div className="image-holder rounded-tr-3xl rounded-tl-3xl shadow-2xl overflow-hidden relative">
                <img src={col2} alt="" />
                <div className="opacity-0 absolute top-0 left-0 w-full h-full rounded-tl-3xl rounded-tr-3xl bg-black/40 z-10 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-bl-3xl rounded-br-3xl p-3">
                <div className=" text-xl">Eternal Glow</div>
                <div className="text-[var(--color-light)]">مشاهده کالکشن</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-end">
            <Link className="flex flex-col w-3/5 h-[300px] text-center group">
              <div className="image-holder rounded-tr-3xl rounded-tl-3xl shadow-2xl overflow-hidden relative">
                <img src={col3} alt="" />
                <div className="opacity-0 absolute top-0 left-0 w-full h-full rounded-tl-3xl rounded-tr-3xl bg-black/40 z-10 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-bl-3xl rounded-br-3xl p-3">
                <div className=" text-xl">Eternal Glow</div>
                <div className="text-[var(--color-light)]">مشاهده کالکشن</div>
              </div>
            </Link>
          </div>
          <div className="flex justify-start">
            <Link className="flex flex-col w-3/5 h-[300px] text-center group">
              <div className="image-holder rounded-tr-3xl rounded-tl-3xl shadow-2xl overflow-hidden relative">
                <img src={col4} alt="" />
                <div className="opacity-0 absolute top-0 left-0 w-full h-full rounded-tl-3xl rounded-tr-3xl bg-black/40 z-10 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col gap-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-bl-3xl rounded-br-3xl p-3">
                <div className=" text-xl">Eternal Glow</div>
                <div className="text-[var(--color-light)]">مشاهده کالکشن</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Collections;

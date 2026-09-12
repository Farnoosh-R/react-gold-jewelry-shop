import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { FaShoppingCart } from "react-icons/fa";

export default function SliderProducts({ items }) {
  return (
    <div className="w-full mr-auto min-w-0">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="relative pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="flex flex-col text-white">
                <div className="relative overflow-hidden rounded-tr-xl rounded-tl-xl h-[200px]">
                  <img
                    src={item.image}
                    className="object-cover w-full h-full"
                    alt="products"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 p-5 bg-[var(--color-primary)] rounded-br-xl rounded-bl-xl">
                  <div className="text-[var(--color-secondary)]">{item.title}</div>

                  <div className="flex justify-between gap-25 items-center">
                    <div className="bg-[var(--color-primary-dark)] p-2 rounded-lg">
                      <FaShoppingCart color="var(--color-secondary)" />
                    </div>
                    <div>{item.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

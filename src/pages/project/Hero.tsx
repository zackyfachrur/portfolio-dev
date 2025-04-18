import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { AssetsProps } from "@/types/assets";
import Assets from "@/assets/json/Assets.json";

export default function Hero() {
  const Resources = Assets.map((content: AssetsProps) => content.source);

  return (
    <section className="h-[80vh] max-xl:h-[70vh] flex justify-center bg-green-900 items-center bg-[url('@/assets/img/hero-pattern.png')]">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        allowTouchMove={false}
        className="swiper-transition"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween:50
          },
          800: {
            slidesPerView: 2,
            spaceBetween:50
          },
          1280: {
            slidesPerView: 3,
            spaceBetween:50
          },
        }}
        autoplay={{
          delay: 0,
        }}
        loop={true}
        speed={8000}
      >
        {Resources.map((content, index) => (
          <SwiperSlide key={index}>
            <img
              src={content}
              alt="Hero"
              draggable={false}
              className="rounded-2xl drop-shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

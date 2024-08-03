import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ar7Id from "../../../../utils/unique-id/ar7Id";
const HomepageHeroCarousel = () => {
  return (
    <div className="border-[3px] border-[white] mt-5 lg:mt-0 rounded-2xl overflow-hidden h-[10rem] lg:h-full w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {[
          "/images/1/carodpati-1.avif",
          //   "/images/1/carodpati-2.jpg",
          "/images/1/carodpati-3.jpg",
        ].map((data) => {
          return (
            <SwiperSlide key={ar7Id()} className="h-full w-full">
              <img
                src={data}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomepageHeroCarousel;

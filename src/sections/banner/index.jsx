import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {banner?.map((el, idx) => (
          <SwiperSlide key={el.image}>
            <img height={170} src={el.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const banner = [
  {
    image: "/public/images/banner1.jpeg",
  },
  {
    image: "/public/images/banner2.jpeg",
  },
];

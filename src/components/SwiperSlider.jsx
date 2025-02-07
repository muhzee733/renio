import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 1</h2>
            <p>This is some dummy text for Slide 1.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 2</h2>
            <p>Another dummy text for Slide 2.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 3</h2>
            <p>More dummy text for Slide 3.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

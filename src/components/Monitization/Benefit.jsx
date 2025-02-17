import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Blog from "../Blog/Blog";
import { Pagination, Autoplay } from "swiper/modules";

const Benefit = () => {
  const blogData = [
    {
      img: "/assets/blog-1.png",
      h3: "Governments & Municipalities",
      p: "Renie transforms offices and residential communities with tailored recycling solutions.",
    },
    {
      img: "/assets/blog-3.png",
      h3: "Educational Institutions",
      p: "Renie Bins improve educational environment, rewarding eco-friendly actions.",
    },
    {
      img: "/assets/blog-2.png",
      h3: "Retail and Malls",
      p: "Renie enhances shopping experience by creating clean and more rewarding space.",
    },
    {
      img: "/assets/blog-4.png",
      h3: "Commercial and Residential",
      p: "Renie enhances shopping experience by creating clean and more rewarding space.",
    },
  ];

  return (
    <div className="benefits">
      <div className="benefit-wrapper">
        <div className="container">
          <div className="row">
            <h2>Industries That Benefit from Data Monetization</h2>
            <Swiper
              spaceBetween={10}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="mySwiper"
            >
              {blogData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Blog h3={item.h3} img={item.img} p={item.p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

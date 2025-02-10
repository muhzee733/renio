import React from "react";
import Blog from "./Blog/Blog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

const RenieBin = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="renie-bin-wrapper">
              <h2>Renie Bins are Everywhere</h2>
              <p>Transforming Waste for Every Space</p>
              <div className="blogs">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={3}
                  
                >
                  <SwiperSlide>
                    <Blog
                      img="/assets/blog-1.png"
                      h3="Governments & Municipalities"
                      p="Renie transforms offices and residential communities with tailored recycling solutions."
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      img="/assets/blog-2.png"
                      h3="Educational Institutions "
                      p="Renie Bins improve educational environment, rewarding eco-friendly actions."
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      img="/assets/blog-3.png"
                      h3="Retail and Malls"
                      p="Renie enhances shopping experience by creating clean and more rewarding space."
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      img="/assets/blog-4.png"
                      h3="Commercial and Residential"
                      p="Renie enhances shopping experience by creating clean and more rewarding space."
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenieBin;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Blog from "./Blog/Blog";
import { Pagination, Autoplay } from "swiper/modules";

const blogData = [
  {
    img: "/assets/blog-1.webp",
    h3: "Governments & Municipalities",
    p: "Renie transforms offices and residential communities with tailored recycling solutions.",
  },
  {
    img: "/assets/blog-3.webp",
    h3: "Educational Institutions",
    p: "Renie Bins improve educational environment, rewarding eco-friendly actions.",
  },
  {
    img: "/assets/blog-2.webp",
    h3: "Retail and Malls",
    p: "Renie enhances shopping experience by creating clean and more rewarding space.",
  },
  {
    img: "/assets/blog-4.webp",
    h3: "Commercial and Residential",
    p: "Renie enhances shopping experience by creating clean and more rewarding space.",
  },
];

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="renie-bin-wrapper">
            <h2>Renie Bins are Everywhere</h2>
            <p className="desktop-paragraph">Transforming Waste for Every Space</p>
            <div id="derktop-version">
              <div className="blogs">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                >
                  <SwiperSlide>
                    <Blog
                      h3={blogData[0].h3}
                      img={blogData[0].img}
                      p={blogData[0].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[2].h3}
                      img={blogData[2].img}
                      p={blogData[2].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[3].h3}
                      img={blogData[3].img}
                      p={blogData[3].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[1].h3}
                      img={blogData[1].img}
                      p={blogData[1].p}
                    />
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
            <div id="mobile-version">
              <div className="blogs">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                >
                  <SwiperSlide>
                    <Blog
                      h3={blogData[0].h3}
                      img={blogData[0].img}
                      p={blogData[0].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[2].h3}
                      img={blogData[2].img}
                      p={blogData[2].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[3].h3}
                      img={blogData[3].img}
                      p={blogData[3].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[0].h3}
                      img={blogData[0].img}
                      p={blogData[0].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[2].h3}
                      img={blogData[2].img}
                      p={blogData[2].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[1].h3}
                      img={blogData[1].img}
                      p={blogData[1].p}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Blog
                      h3={blogData[3].h3}
                      img={blogData[3].img}
                      p={blogData[3].p}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

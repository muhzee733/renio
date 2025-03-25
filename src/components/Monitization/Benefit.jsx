import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Blog from "@/components/Blog/Blog";
import { Pagination } from "swiper/modules";
import H2 from "../Typography/H2";

const blogData = [
  {
    img: "/assets/blog-6.webp",
    h3: <>Retail & <br />E-Commerce </>,
    p: "Gain insights into packaging disposal, customer behavior, and recycling trends.",
  },
  {
    img: "/assets/blog-8.webp",
    h3: "Hospitality & Food Services",
    p: "Track food waste patterns, optimize inventory, and minimize losses.",
  },
  {
    img: "/assets/blog-7.webp",
    h3: "Manufacturing & Production",
    p: "Understand material waste, optimize supply chains, and enhance sustainability goals.",
  },
  {
    img: "/assets/blog-9.webp",
    h3: "Smart Cities & Municipalities",
    p: "Improve urban waste management, enhance recycling programs, and promote greener cities.",
  },
];

export default function App() {
  return (
    <>
      <div class="renieeee">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <div className="renie-bin-wrapper">
                <H2 title='Industries That Benefit from Data Monetization' />
                <div id="derktop-version">
                  <div className="blogs moni-blog">
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
      </div>
    </>
  );
}

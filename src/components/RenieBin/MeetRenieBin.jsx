import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MeetRenieBin = () => {
  return (
    <div className="MeetRenieBin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="meet-main-banner">
              <h2>Meet Renie Bins </h2>
              <p>Collect Multiple Waste Type in One Bin</p>
            </div>
            <div className="meet-image">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/assets/bin.png" alt="bin" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/RENIE_TWO.png" alt="bin" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/RENIE_MAXI.png" alt="bin" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/RENIE_MINI.png" alt="bin" />
                </SwiperSlide>
              </Swiper>
            </div>
            <p className="meet-para">
              Renie Bins are equipped with special sensors that mimic a
              vision-type experience, eliminating the need for expensive
              processing power. This cutting-edge technology ensures the bins
              remain as affordable as traditional, non-smart bins. Enjoy the
              benefits of smart waste management without the high costs,
            </p>
            <div className="meet-mini-box">
              <div>
                <img src="/assets/Vector.webp" alt="mini-bin" />
                <p>Platic Bottle</p>
              </div>
              <div>
                <img src="/assets/Vector-2.webp" alt="mini-bin" />
                <p>Plastic Cups</p>
              </div>
              <div>
                <img src="/assets/Vector-3.webp" alt="mini-bin" />
                <p>Paper Cups</p>
              </div>
              <div>
                <img src="/assets/Vector-4.webp" alt="mini-bin" />
                <p>Cans</p>
              </div>
              <div>
                <img src="/assets/Vector-5.webp" alt="mini-bin" />
                <p>Tetra Pak</p>
              </div>
              <div>
                <img src="/assets/Vector-6.webp" alt="mini-bin" />
                <p>Glass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetRenieBin;

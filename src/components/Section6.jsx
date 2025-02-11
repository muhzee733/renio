import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Section6 = () => {
  return (
    <>
      <div className=" bg-white software">
        <div className="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 d-flex align-items-center">
              <div className="software-left d-flex gap-4 w-100 align-items-center">
                <img src="/assets/re-logo.png" width="auto" />
                <div className="">
                  <h2>Renie</h2>
                  <h6>Software</h6>
                  <p>Where everything comes together</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div className="software-right-column">
                <Swiper
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  gap={30}
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub.png" />
                      <span>Renie Admin</span>
                      <p>
                      Renie Admin centralizes all management tasks, providing seamless control over operations, data, and user interactions.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub-2.png" />
                      <span>Renie Hub</span>
                      <p>
                      Our innovative platform makes it possible to generate a passive income from data monetization of plastic waste
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub-3.png" />
                      <span>Renie Rewards</span>
                      <p>
                      Renie Nexus makes recycling easy with instant access and prize rewards, boosting sustainability.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="software-right-container">
                      <img src="/assets/renie-hub-4.png" />
                      <span>Renie Ads</span>
                      <p>
                      Our AI platform uses Renie Bin data to deliver targeted ads, driving eco-friendly engagement.
                      </p>
                    </div>
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

export default Section6;

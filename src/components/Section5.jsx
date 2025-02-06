import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider5 from "@/components/Slider5/Slider5";
import "swiper/css";
import "swiper/css/navigation";

const Section5 = () => {
  return (
    <div className="scroll-section-inner">
      <div className="scroll-section">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <Slider5
              title1="Renie"
              title2="Rewards"
              img="/assets/mobile-1.png"
              customClass="E31662"
              h6={`No downloads, no registration just 
                straight money in your wallet.`}
              p={`In today's fast-paced world, nobody has time for complicated loyalty
                programs. Renie gets it. That's why we've stripped away everything
                that stands between you and your rewards. No apps to download. No
                forms to fill. No cards to carry. Just pure, instant gratification.
                <br /> <br />
                Your smartphone is all you need – it's your digital wallet, ready to
                collect and redeem rewards at a moment's notice. We've eliminated the
                traditional barriers that make loyalty programs feel like work. No
                more searching through app stores, waiting for downloads, or creating
                yet another account you'll forget about.`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <Slider5
              title1="Find the"
              title2="Renie Bins"
              img="/assets/mobile-2.png"
              customClass="4765E6"
              h6={`No downloads, no registration just 
                straight money in your wallet.`}
              p={`In today's fast-paced world, nobody has time for complicated loyalty
                programs. Renie gets it. That's why we've stripped away everything
                that stands between you and your rewards. No apps to download. No
                forms to fill. No cards to carry. Just pure, instant gratification.
                <br /> <br />
                Your smartphone is all you need – it's your digital wallet, ready to
                collect and redeem rewards at a moment's notice. We've eliminated the
                traditional barriers that make loyalty programs feel like work. No
                more searching through app stores, waiting for downloads, or creating
                yet another account you'll forget about.`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <Slider5
              title1="Redeem "
              title2="Rewards"
              img="/assets/mobile-3.png"
              customClass="5C4099"
              h6={`No downloads, no registration just 
                straight money in your wallet.`}
              p={`In today's fast-paced world, nobody has time for complicated loyalty
                programs. Renie gets it. That's why we've stripped away everything
                that stands between you and your rewards. No apps to download. No
                forms to fill. No cards to carry. Just pure, instant gratification.
                <br /> <br />
                Your smartphone is all you need – it's your digital wallet, ready to
                collect and redeem rewards at a moment's notice. We've eliminated the
                traditional barriers that make loyalty programs feel like work. No
                more searching through app stores, waiting for downloads, or creating
                yet another account you'll forget about.`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <Slider5
              title1="NO Download"
              title2="& NO Registration"
              img="/assets/mobile-4.png"
              customClass="4765E6"
              h6={`No downloads, no registration just 
                straight money in your wallet.`}
              p={`In today's fast-paced world, nobody has time for complicated loyalty
                programs. Renie gets it. That's why we've stripped away everything
                that stands between you and your rewards. No apps to download. No
                forms to fill. No cards to carry. Just pure, instant gratification.
                <br /> <br />
                Your smartphone is all you need – it's your digital wallet, ready to
                collect and redeem rewards at a moment's notice. We've eliminated the
                traditional barriers that make loyalty programs feel like work. No
                more searching through app stores, waiting for downloads, or creating
                yet another account you'll forget about.`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section5;

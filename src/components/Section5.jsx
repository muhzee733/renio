import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider5 from "@/components/Slider5/Slider5";
import "swiper/css";
import "swiper/css/navigation";

const Section5 = () => {
  return (
    <>
      <div className="scroll-section-inne" id="custom-slider">
        <Swiper modules={[Navigation]} slidesPerView={1} navigation>
          <SwiperSlide>
            <Slider5
              title1="Renie"
              title2="Nexus"
              img="/assets/mobile-1.webp"
              img2="/assets/no-download.webp"
              customClass="E31662"
              h6={`No downloads, no registration just 
                straight money in your wallet.`}
              p={`In today’s fast-paced world, nobody has time for complicated loyalty programs. Renie understands, so we’ve removed all the barriers. No apps to download, no forms to fill, and no cards to carry. Just instant rewards, straight to your digital wallet.
Your smartphone is all you need to collect and redeem rewards instantly—no more waiting or extra accounts to manage. It's loyalty made simple.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider5
              title1="Find the"
              title2="Renie Bins"
              img="/assets/mobile-3.webp"
              customClass="4765E6"
              h6={`Easily locate the nearest Renie Bin and navigate to it.`}
              p={`Easily find the nearest Renie Bin with just a few taps and navigate to it effortlessly. Our intuitive system guides you directly to the closest bin, ensuring a smooth, hassle-free experience.

Whether you're at home, work, or on the go, locating a Renie Bin is quick and simple. Real-time directions help you reach it efficiently, making waste disposal easier than ever.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider5
              title1="Redeem "
              title2="Rewards"
              img="/assets/mobile-2.webp"
              customClass="5C4099"
              h6={`No vouchers or discounts—just real, valuable rewards!`}
              p={`Say goodbye to vouchers and temporary discounts. With our system, you get real, valuable rewards—no hidden conditions or expiry dates. Whether it’s points, cashback, or incentives, each reward provides lasting value.
Enjoy instant, meaningful rewards with every transaction. No coupons, no waiting—just straightforward, transparent benefits.`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Section5;

import Meta from "@/components/Meta";
import JoinNow from "@/components/Monitization/JoinNow";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import RenieAds from "@/components/RenieAds/Banner";
import SecondSection from "@/components/RenieAds/SecondSection";
import ThirdSection from "@/components/RenieAds/ThirdSection";
import React from "react";

const Renieads = () => {
  return (
    <>
      <Meta
        title="Ads That Matter | Sustainable Advertising with Renie"
        description="Use network of 1000s of Renie Bins working together, forming Renie’s advertising platform, ‘Ads That Matter,’. Reach your perfect audience with AI."
      />
      <Navbar />
      <RenieAds />
      <SecondSection />
      <ThirdSection />
      <JoinNow />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default Renieads;

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

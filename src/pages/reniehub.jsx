import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieHub/Banner";
import SecondSection from "@/components/RenieHub/SecondSection";
import ThirdSection from "@/components/RenieHub/ThirdSection";
import FourthSection from "@/components/RenieHub/FourthSection";
import React from "react";
import FifthSection from "@/components/RenieHub/FifthSection";
import SixSection from "@/components/RenieHub/SixSection";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";

const reniehub = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixSection />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default reniehub;

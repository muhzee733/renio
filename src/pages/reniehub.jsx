import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieHub/Banner";
import SecondSection from "@/components/RenieHub/SecondSection";
import ThirdSection from "@/components/RenieHub/ThirdSection";
import FourthSection from "@/components/RenieHub/FourthSection";
import React from "react";

const reniehub = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
};

export default reniehub;

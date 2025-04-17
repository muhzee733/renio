import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieFranchise/Banner";
import SecondSection from "@/components/RenieAdmin/secondSection";
import React from "react";
import HowItWork from "@/components/RenieFranchise/HowItWork";
import Benefits from "@/components/RenieFranchise/Benefits";
import NextStep from "@/components/RenieFranchise/NextStep";
import Meta from "@/components/Meta";

const RenieFranchise = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Banner />
      <SecondSection />
      <HowItWork />
      <Benefits />
      <NextStep />
      <MiniFooter />
      <Footer />
    </>
  );
};

export default RenieFranchise;

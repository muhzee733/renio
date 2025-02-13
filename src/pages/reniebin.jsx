import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieBin/Banner";
import CraftedRenie from "@/components/RenieBin/CraftedRenie";
import Discover from "@/components/RenieBin/Discover";
import GroundRenie from "@/components/RenieBin/GroundRenie";
import MeetRenieBin from "@/components/RenieBin/MeetRenieBin";
import PowerRenie from "@/components/RenieBin/PowerRenie";
import ProductRenie from "@/components/RenieBin/ProductRenie";
import RenieSection from "@/components/RenieBin/RenieSection2";
import React from "react";

const RenieBin = () => {
  return (
    <>
      <Navbar white={true} />
      <Banner />
      <RenieSection />
      <MeetRenieBin />
      <PowerRenie />
      <GroundRenie />
      <CraftedRenie />
      <ProductRenie />
      <Discover />
      <Footer />
    </>
  );
};

export default RenieBin;

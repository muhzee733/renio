'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
import Meta from "@/components/Meta";
import MiniFooter from "@/components/Navbar/MiniFooter";

const RenieBin = () => {


  return (
    <>
      <Meta
        title="Renie Bin: Smart Waste Management Solutions"
        description="Renie Bin, the smart solution for efficient waste segregation and recycling. Track your impact and earn from deposited waste."
      />
      <Navbar white={true} />
      <Banner />
      <RenieSection />
      <MeetRenieBin />
      {/* <PowerRenie /> */}
      <GroundRenie
        imagePath="/assets/bin3/bin/M"
        frameCount={104}
        containerClass="canvas-container-1"
      />
      <CraftedRenie />
      <ProductRenie />
      <Discover />
      {/* <MiniFooter /> */}
      <Footer />
    </>
  );
};

export default RenieBin;

import Banner from "@/components/MediaHub/Banner";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import MediaHub from '@/components/MediaHub/MediaHub';
import React from "react";

const Mediahub = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <MediaHub />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default Mediahub;

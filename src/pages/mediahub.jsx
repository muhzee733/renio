import Banner from "@/components/MediaHub/Banner";
import Footer from "@/components/Navbar/Footer";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import MediaHub from "@/components/MediaHub/MediaHub";
import React from "react";
import Meta from "@/components/Meta";

const Mediahub = () => {
  return (
    <>
      <Meta
        title="Media Hub"
        description="The latest news and updates from Renie"
      />
      <Navbar />
      <Banner />
      <MediaHub />
      <Footer />
      <MiniFooter />
    </>
  );
};

export default Mediahub;

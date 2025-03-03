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
import Head from "next/head";

const reniehub = () => {
  return (
    <>
      <Head>
        <title>Renie Hub</title>
      </Head>
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

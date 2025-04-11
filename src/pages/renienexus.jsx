import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/RenieApp/Banner";
import React from "react";

const RenieNexus = () => {
  return (
    <>
      <Meta
        title="Renie App: Track Your Recycling Impact Anytime, Anywhere"
        description="Download the Renie App to easily track your recycling impact, find nearby bins, and earn rewards for your sustainable efforts."
      />
      <Navbar />
      <Banner />

    </>
  );
};

export default RenieNexus;

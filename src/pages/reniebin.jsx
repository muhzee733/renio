import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";

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

const RenieBin = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameCount = 158;
  const airpods = { frame: 0 };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/assets/bin-4/Renie_bin${(i + 1)
        .toString()
        .padStart(4, "0")}.png`;
      imagesRef.current.push(img);
    }

    const render = () => {
      if (!context || imagesRef.current.length === 0) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imagesRef.current[airpods.frame], 0, 0);
    };

    imagesRef.current[0].onload = render;

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".reniebin-wrapper",
        start: "top top",
        end: "+=1000",
        scrub: 0.5,
        pin: ".canvas-container",
        onUpdate: render,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Renie Bin: Smart Waste Management Soluctions</title>
        <meta
          name="description"
          content="Renie Bin, the smart solution for efficient waste segregation and recycling. Track your impact and earn from deposited waste."
        />
      </Head>
      <Navbar white={true} />
      <Banner canvasRef={canvasRef} />
      <RenieSection />
      <MeetRenieBin />
      <PowerRenie />
      <GroundRenie
        imagePath="/assets/bin3/0001.png"
        frameCount={65}
        containerClass="canvas-container-1"
      />
      <CraftedRenie />
      <ProductRenie />
      <Discover />
      <Footer />
    </>
  );
};

export default RenieBin;

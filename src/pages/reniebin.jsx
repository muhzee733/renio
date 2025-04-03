import { useEffect, useRef, useState } from "react";
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
import Meta from "@/components/Meta";
import MiniFooter from "@/components/Navbar/MiniFooter";

const RenieBin = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameCount = 120;
  const airpods = { frame: 0 };

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 992);
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    // Function to set canvas size dynamically
    const setCanvasSize = () => {
      const aspectRatio = 1158 / 651;
      let width = isMobile ? window.innerWidth * 0.9 : 1158;
      let height = width / aspectRatio;

      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/assets/bin-5/Anim${(i + 1).toString().padStart(4, "0")}.webp`;
      imagesRef.current.push(img);
    }

    const render = () => {
      if (!context || imagesRef.current.length === 0) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = imagesRef.current[airpods.frame];

      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    imagesRef.current[0].onload = render;

    // Set different animation ending positions based on screen size
    const scrollEnd = isMobile ? window.innerHeight * 0.9 : 1150;

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".reniebin-wrapper",
        start: "top top",
        end: `+=${scrollEnd}`,
        scrub: 0.5,
        pin: ".canvas-container",
        onUpdate: render,
      },
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <>
      <Meta
        title="Renie Bin: Smart Waste Management Solutions"
        description="Renie Bin, the smart solution for efficient waste segregation and recycling. Track your impact and earn from deposited waste."
      />
      <Navbar white={true} />
      <Banner canvasRef={canvasRef} />
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
      <MiniFooter />
      <Footer />
    </>
  );
};

export default RenieBin;

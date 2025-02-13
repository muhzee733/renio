import { useEffect, useRef } from "react";
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

const RenieBin = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameCount = 147;
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
      img.src = `/assets/bin2/Video1_004_${(i + 1)
        .toString()
        .padStart(5, "0")}.png`;
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
        trigger: ".canvas-container",
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
      <Navbar white={true} />
      <Banner canvasRef={canvasRef} />
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

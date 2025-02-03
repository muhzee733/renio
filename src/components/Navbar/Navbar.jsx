import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import gsap from "gsap";

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      // Shrink the navbar with GSAP
      gsap.to(".main-navbar", {
        width: "80px",
        height: "70px",
        duration: 1,
        ease: "power2.inOut",
        position: "fixed",
      });

      // Hide navbar items
      gsap.to(".navbar-items", {
        opacity: 0,
        duration: 0.3,
      });

      // Show logo toggle after navbar shrinks
      gsap.to(".logo-toggle", {
        opacity: 1,
        duration: 0.3,
        delay: 1,
        display: "block",
        position: "absolute",
        transform: "translateX(9px)",
      });

      // Move logo off-screen
      gsap.to(".logo-image", {
        opacity: 0,
        duration: 0.3,
      });

      // Hide the button
      gsap.to(".btn", {
        opacity: 0,
        duration: 0.3,
      });
    } else {
      // Reset navbar to original size
      gsap.to(".main-navbar", {
        width: "1094px",
        duration: 1,
        ease: "power2.inOut",
        position: "relative",
      });

      // Show navbar items back
      gsap.to(".navbar-items", {
        opacity: 1,
        duration: 0.3,
        delay: 1,
      });

      // Hide logo toggle (small logo)
      gsap.to(".logo-toggle", {
        opacity: 0,
        duration: 0.3,
        display: "none",
      });

      // Reset logo to original position and opacity
      gsap.to(".logo-image", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });

      // Show the button
      gsap.to(".btn", {
        opacity: 1,
        duration: 0.8,
      });
    }
  }, [isScrolled]);

  return (
    <>
      <div className="main-navbar d-flex justify-content-between align-items-center fixed">
        <Image src="/assets/logo.png" alt="renio logo" className="logo-image" />
        <div className="navbar-items d-flex gap-4">
          <ul className="d-flex gap-4">
            <li>Renie Bin</li>
            <li>Renie Hub</li>
            <li>Renie App</li>
            <li>Ads that matter</li>
            <li>Media Hub</li>
          </ul>
        </div>
        <Image
          src="/assets/small.png"
          alt="renio logo"
          className="logo-toggle"
        />
        <Button title="Connect with an expert" className="btn" />
      </div>
      <div>Dark/Light</div>
    </>
  );
};

export default Navbar;

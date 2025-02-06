import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    tl.current
      .set([logoRef.current, linksRef.current, buttonRef.current], { opacity: 1 }) 
      .set(menuImageRef.current, { opacity: 0 })
      .to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 0,
        display: "none",
        duration: 0,
      })
      .to(
        navRef.current,
        {
          width: "78px",
          background: "white",
          height: "65px",
          borderRadius: "8px",
          duration: 0,
        },
        "<"
      )
      .to(
        menuImageRef.current,
        {
          opacity: 1,
          display: "block",
          duration: 0,
        },
        "<"
      );

    const handleScroll = () => {
      if (window.scrollY > 1) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="main-navbar container">
      {/* Main Logo */}
      <Image
        ref={logoRef}
        src="/assets/logo.png"
        alt="Renie Logo"
        width={140}
        height={50}
      />

      {/* Navigation Links */}
      <ul
        ref={linksRef}
        className="d-flex gap-3 navbar-links"
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <li>Renie Bin</li>
        <li>Renie Hub</li>
        <li>Renie App</li>
        <li>Ads that Matter</li>
        <li>Media Hub</li>
      </ul>

      {/* Call-to-Action Button */}
      <button ref={buttonRef} className="btn">
        Connect with an expert
      </button>

      {/* Small Menu Icon */}
      <Image
        ref={menuImageRef}
        src="/assets/small.png"
        alt="Menu Icon"
        width={40}
        height={40}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />
    </nav>
  );
};

export default Navbar;

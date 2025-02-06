import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Button from "../Button/Button";

const Navbar = () => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    tl.current
      .to(
        [logoRef.current, linksRef.current, buttonRef.current],
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "start"
      )
      .to(
        navRef.current,
        {
          width: "100px",
          height: "65px",
          borderRadius: "8px",
          duration: 0.3, // Quick effect on navbar resizing
          ease: "power2.inOut",
        },
        "start"
      )
      .to(
        menuImageRef.current,
        {
          opacity: 1,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2"
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
    <nav
      ref={navRef}
      className="main-navbar container"
    >
      <Image
        ref={logoRef}
        src="/assets/logo.png"
        alt="Renie Logo"
        width={140}
        height={50}
        style={{ transition: "all 0.5s ease" }}
      />

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

      <button
        ref={buttonRef}
        className="btn"
      >
        Connect with an expert
      </button>

      <Image
        ref={menuImageRef}
        src="/assets/small.png"
        alt="Menu Icon"
        width={40}
        height={40}
        style={{
          position: "absolute",
          right: "30px",
          opacity: 0,
          transform: "scale(0.5)",
          transition: "transform 0.3s ease-out",
        }}
      />
    </nav>
  );
};

export default Navbar;

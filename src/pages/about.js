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
      .to(
        [logoRef.current, linksRef.current, buttonRef.current],
        {
          opacity: 0,
          scale: 0.8, 
          filter: "blur(1px)",
          duration: 0.5,
          ease: "power2.inOut",
        },
        "start"
      )
      .to(
        navRef.current,
        {
          width: "100px", 
          height: "50px",
          borderRadius: "30px",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "start"
      )
      .to(
        menuImageRef.current,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );

    const handleScroll = () => {
      if (window.scrollY > 100) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          width: "1000px",
          height: "60px",
          background: "#333",
          color: "#fff",
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          zIndex: 1000,
          padding: "0 20px",
          borderRadius: "10px",
        }}
      >
        <Image
          ref={logoRef}
          src="/assets/logo.png"
          alt="Renie Logo"
          width={100}
          height={50}
          style={{ transition: "all 0.5s ease" }}
        />

        {/* Navbar Links */}
        <ul
          ref={linksRef}
          className="d-flex gap-3"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            transition: "opacity 0.5s ease-in-out",
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
          style={{
            background: "#ff6600",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px",
            transition: "all 0.5s ease",
          }}
        >
          Contact Us
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

      <div
        style={{
          height: "200vh",
          paddingTop: "80px",
          background: "#f4f4f4",
        }}
      >
        <h1 style={{ textAlign: "center", paddingTop: "200px" }}>
          Scroll Down to See Navbar Animation
        </h1>
      </div>
    </>
  );
};

export default Navbar;

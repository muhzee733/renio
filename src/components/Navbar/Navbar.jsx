import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = ({white}) => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    tl.current
      .set([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 1,
      })
      .set(menuImageRef.current, { opacity: 0, display: "none" })
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
          duration: 0.4,
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
      if (window.scrollY > 1 || isMobile) {
        gsap.to(menuImageRef.current, {
          opacity: 1,
          display: "block",
          duration: 0.3,
        });
        tl.current.play();
      } else {
        gsap.to(menuImageRef.current, {
          opacity: 0,
          display: "none",
          duration: 0.3,
        });
        tl.current.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (window.scrollY > 1 || isMobile) {
      gsap.to(navRef.current, {
        width: "100%",
        height: "70px",
        borderRadius: "8px",
        duration: 0.6,
      });
      gsap.to([logoRef.current, linksRef.current], {
        opacity: 1,
        display: "flex",
        duration: 0.6,
      });
      gsap.to(buttonRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.6,
      });
      gsap.to(menuImageRef.current, { opacity: 0, duration: 0.6 });
    }
  };

  const handleMouseLeave = () => {
    if (window.scrollY > 1 || isMobile) {
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 0,
        display: "none",
        duration: 0.6,
      });
      gsap.to(navRef.current, {
        width: "78px",
        height: "65px",
        borderRadius: "8px",
        duration: 0.6,
      });
      gsap.to(menuImageRef.current, { opacity: 1, duration: 0.6 });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="main-navbar container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{display: "flex !important", backgroundColor: white ? "white" : "",}}
      >
        <Image
          ref={logoRef}
          src="/assets/logo.png"
          alt="Renie Logo"
          width={140}
          height={50}
          style={{
            display: isMobile ? "none" : "block",
          }}
        />
        <Image
          src="/assets/small.png"
          alt="Menu Icon"
          width={40}
          height={40}
          className="mobile-menu"
          style={{
            display: isMobile ? "block" : "none",
          }}
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
        <button ref={buttonRef} className="btn">
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
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
          }}
        />
      </nav>
      <nav
      id="mobile-version"
      className={`mobile-nav ${isNavOpen ? "custom-open" : ""}`}
      style={{
        transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Menu Icon */}
      <Image
        src="/assets/small.png"
        alt="Menu Icon"
        width={40}
        height={40}
        className="mobile-menu"
        onClick={toggleNav}
      />

      {/* Navbar Content */}
      {isNavOpen && (
        <div className="custom-mobile-menu">
          <ul className="d-flex gap-3 navbar-link flex-column">
            <li>Renie Bin</li>
            <li>Renie Hub</li>
            <li>Renie App</li>
            <li>Ads that Matter</li>
            <li>Media Hub</li>
          </ul>
          <button className="btn-3">Connect with an expert</button>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;

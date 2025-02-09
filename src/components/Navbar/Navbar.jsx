import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Small logo state (collapsed)
    tl.to([logoRef.current, linksRef.current, buttonRef.current], {
      opacity: 0,
      display: "none",
      duration: 0,
    })
      .to(
        navRef.current,
        {
          width: "78px",
          height: "65px",
          borderRadius: "8px",
          duration: 0.3,
        },
        "<"
      )
      .to(
        menuImageRef.current,
        {
          opacity: 1,
          display: "block",
          duration: 0.2,
        },
        "<"
      );

    const handleScroll = () => {
      if (window.scrollY > 1 && !isExpanded) {
        tl.play();
      } else {
        tl.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  // Expand Navbar (Desktop - Hover)
  const expandNavbar = () => {
    if (window.innerWidth > 768) {
      setIsExpanded(true);
      gsap.to(navRef.current, {
        width: "100%",
        height: "auto",
        borderRadius: "0px",
        background: "#fff",
        duration: 0.3,
      });
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 1,
        display: "flex",
        duration: 0.3,
      });
      gsap.to(menuImageRef.current, { opacity: 0, duration: 0.2 });
    }
  };

  // Collapse Navbar (Desktop - Hover Out)
  const collapseNavbar = () => {
    if (window.innerWidth > 768) {
      setIsExpanded(false);
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 0,
        display: "none",
        duration: 0.3,
      });
      gsap.to(navRef.current, {
        width: "78px",
        height: "65px",
        borderRadius: "8px",
        duration: 0.3,
      });
      gsap.to(menuImageRef.current, { opacity: 1, duration: 0.2 });
    }
  };

  // Toggle Mobile Menu (Click)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (!isMobileMenuOpen) {
      gsap.to(".mobile-menu", { opacity: 1, y: 0, duration: 0.4, display: "flex" });
    } else {
      gsap.to(".mobile-menu", { opacity: 0, y: "-100%", duration: 0.3, display: "none" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="main-navbar container"
        onMouseEnter={expandNavbar}
        onMouseLeave={collapseNavbar}
        style={{ transition: "all 0.3s ease-in-out", position: "relative" }}
      >
        {/* Main Logo */}
        <Image
          ref={logoRef}
          src="/assets/logo.png"
          alt="Renie Logo"
          width={140}
          height={50}
          className="desktop-logo"
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

        {/* Small Menu Icon (for Mobile) */}
        <Image
          ref={menuImageRef}
          src="/assets/small.png"
          alt="Menu Icon"
          width={40}
          height={40}
          onClick={toggleMobileMenu}
          className="mobile-menu-icon"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            display: "none",
          }}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "#fff",
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          opacity: 0,
          transform: "translateY(-100%)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <ul style={{ listStyle: "none", textAlign: "center", padding: 0 }}>
          <li style={{ margin: "15px 0" }}>Renie Bin</li>
          <li style={{ margin: "15px 0" }}>Renie Hub</li>
          <li style={{ margin: "15px 0" }}>Renie App</li>
          <li style={{ margin: "15px 0" }}>Ads that Matter</li>
          <li style={{ margin: "15px 0" }}>Media Hub</li>
        </ul>

        <button className="btn" onClick={toggleMobileMenu}>
          Connect with an expert
        </button>

        {/* Close Button */}
        <button
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={toggleMobileMenu}
        >
          ✖
        </button>
      </div>
    </>
  );
};

export default Navbar;

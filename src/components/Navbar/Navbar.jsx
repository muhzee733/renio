import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    { name: "Renie Bin", path: "/reniebin" },
    { name: "Renie Hub", path: "/reniehub" },
    { name: "Renie Nexus", path: "/renienexus" },
    { name: "Ads that Matter", path: "/renieads" },
    { name: "Media Hub", path: "/mediahub" },
  ];
  const handleClick = () => {
    router.push("/renielicense");
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
          duration: 0.5,
        });
        tl.current.play();
      } else {
        gsap.to(menuImageRef.current, {
          opacity: 0,
          display: "none",
          duration: 0.5,
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
    if (window.scrollY > 1 && !isMobile) {
      gsap.to(navRef.current, {
        width: "100%",
        height: "70px",
        borderRadius: "8px",
        duration: 0.6,
      });
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 1,
        display: "flex",
        duration: 0.6,
      });
      gsap.to(menuImageRef.current, { opacity: 0, duration: 0.8 });
    }
  };
  const handleMouseLeave = () => {
    if (window.scrollY > 1 && !isMobile) {
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="main-navbar container-xl"
        style={{
          display: "flex !important",
        }}
      >
        <Link href="/" passHref>
          <img
            ref={logoRef}
            src="/assets/logo.webp"
            alt="Renie Logo"
            width={140}
            style={{
              display: isMobile ? "none" : "block",
              cursor: "pointer",
              height: "auto",
            }}
          />
        </Link>

        <Link className="mobile-menu" href="/" passHref>
          <img
            src="/assets/small.webp"
            width={50}
            alt="Menu Icon"
            style={{
              display: isMobile ? "block" : "none",
              cursor: "pointer",
              height: "auto",
            }}
          />
        </Link>
        <ul ref={linksRef} className="d-flex gap-4 navbar-links flex-nowrap desktop-nav-links">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={router.pathname === link.path ? "actives" : ""}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button
          ref={buttonRef}
          className="btn desktop-nav-links"
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Explore the full demo
        </button>
        <img
          ref={menuImageRef}
          src="/assets/small.webp"
          alt="logo"
          width={50}
          style={{
            height: "auto",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
          }}
        />

        <img
          src="/assets/small.webp"
          alt="mobile logo"
          width={45}
          style={{
            height: "auto",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="custom-small-image"
          onClick={handleLogoClick}
        />

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Link href="/">
            <img src="/assets/logo.webp" width={100} alt="renie logo" />
          </Link>
          <button onClick={handleLogoClick} className="close-btn">
            ✖
          </button>
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <button onClick={handleClick} className="mobile-btn">
          Explore the full demo
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

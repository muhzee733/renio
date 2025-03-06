import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ white }) => {
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
    { name: "Renie App", path: "/renieapp" },
    { name: "Ads that Matter", path: "/renieads" },
    { name: "Media Hub", path: "/mediahub" },
  ];
  const handleClick = () => {
    router.push("/contact");
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

  return (
    <>
      <nav
        ref={navRef}
        className="main-navbar container"
        style={{
          display: "flex !important",
          backgroundColor: white ? "white" : "",
        }}
      >
        <Link href="/" passHref>
          <Image
            ref={logoRef}
            src="/assets/logo.webp"
            alt="Renie Logo"
            width={140}
            height={50}
            style={{
              display: isMobile ? "none" : "block",
              cursor: "pointer",
            }}
          />
        </Link>

        <Link className="mobile-menu" href="/" passHref>
          <Image
            src="/assets/small.webp"
            alt="Menu Icon"
            width={40}
            height={40}
            style={{
              display: isMobile ? "block" : "none",
              cursor: "pointer",
            }}
          />
        </Link>
        <ul ref={linksRef} className="d-flex gap-3 navbar-links flex-nowrap">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button ref={buttonRef} className="btn" onClick={handleClick}>
          Connect with an expert
        </button>
        <Image
          ref={menuImageRef}
          src="/assets/small.webp"
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
        <Image
          src="/assets/small.webp"
          alt="Menu Icon"
          width={40}
          height={40}
          className="custom-small-image"
          onClick={handleLogoClick}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Link href="/">
            <Image
              src="/assets/logo.webp"
              alt="Renie Logo"
              width={100}
              height={50}
            />
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
          <button className="mobile-btn">Connect with an expert</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

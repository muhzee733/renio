import React, { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ white }) => {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Navigation links array
  const navLinks = [
    { name: "Renie Bin", path: "/reniebin" },
    { name: "Renie Hub", path: "/reniehub" },
    { name: "Renie App", path: "/renieapp" },
    { name: "Ads that Matter", path: "/ads-that-matter" },
    { name: "Media Hub", path: "/media-hub" },
  ];

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
        <div onClick={handleLogoClick}>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Renie Logo"
              width={140}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="d-flex gap-3 navbar-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <button ref={buttonRef} className="btn">
          Connect with an expert
        </button>

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Link href="/">
            <Image
              src="/assets/logo.png"
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

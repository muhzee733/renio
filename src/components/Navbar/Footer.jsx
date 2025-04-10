import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Renie Bin", path: "/reniebin" },
    { name: "Renie Hub", path: "/reniehub" },
    { name: "Renie App", path: "/renieapp" },
    { name: "Media Hub", path: "/mediahub" },
    { name: "Ads that Matter", path: "/renieads" },
    { name: "Renie Franchise", path: "/reniefranchise" }
  ];

  return (
    <div className="footer-section">
      <div className="footer-main-section">
        <div className="footer-wrapper">
          <div className="container-xl p-0">
            <div className="container-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-left-section">
                    <h6>
                      Sign up to receive the latest news and support articles
                    </h6>
                    <div className="newsletter">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                      />
                      <button>Sign Up Now</button>
                    </div>
                    <p className="footer-text">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacypolicy">
                        <span className="text-bold">privacy policy</span>
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mobile-none">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Pages</h6>
                        <ul>
                          {navLinks.map((link, index) => (
                            <li key={index}>
                              <Link href={link.path}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Legals</h6>
                        <ul>
                          <li>
                            <Link href="/privacypolicy">Privacy policy</Link>
                          </li>
                          <li>
                            <Link href="/platform-terms">Platform terms</Link>
                          </li>
                          <li>
                            <Link href="/term-of-services">Terms of services</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Follow us</h6>
                        <ul>
                          <li >
                            <Link
                              href="https://www.facebook.com/wearerenie"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex gap-2"
                            >
                              <img src="/assets/facebook.webp" alt="Facebook" />
                              <span>Facebook</span>
                            </Link>
                          </li>
                          <li className="d-flex gap-2">
                            <Link
                              href="https://www.linkedin.com/company/renietech"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex gap-2"
                            >
                              <img src="/assets/linkedin.webp" alt="LinkedIn" />
                              <span>LinkedIn</span>
                            </Link>
                          </li>
                          <li className="d-flex gap-2">
                            <Link
                              href="https://www.instagram.com/wearerenie/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex gap-2"
                            >
                              <img src="/assets/instragram.webp" alt="Instagram" />
                              <span>Instagram</span>
                            </Link>
                          </li>
                          <li className="d-flex gap-2">
                            <Link
                              href="https://www.tiktok.com/@wearerenie"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex gap-2"
                            >
                              <img src="/assets/tiktok.webp" alt="TikTok" />
                              <span>TikTok</span>
                            </Link>
                          </li>
                          <li className="d-flex gap-2">
                            <Link
                              href="https://www.youtube.com/@wearerenie"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex gap-2"
                            >
                              <img src="/assets/youtube.webp" alt="YouTube" />
                              <span>YouTube</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="custom-center">
                    <img src="/assets/footer-text.webp" alt="Renie Tech" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row bootom-footer">
              <div className="col-lg-6 col-md-6">
                <p className="text-left">
                  © 2025 All rights reserved. Renie Tech Trading LLC
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="text-right">
                  Country : Qatar | Saudi Arabia | United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

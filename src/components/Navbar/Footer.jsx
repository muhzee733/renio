import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Renie Bin", path: "/reniebin" },
    { name: "Renie Hub", path: "/reniehub" },
    { name: "Renie App", path: "/renieapp" },
    { name: "Ads that Matter", path: "/renieads" },
    { name: "Media Hub", path: "/mediahub" },
  ];
  return (
    <div className="footer-section">
      <div class="footer-main-section">
        <div className="footer-wrapper">
          <div className="container p-0">
            <div class="container-wrapper">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
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
                      by submitting this form, you agree to our{" "}
                      <span className="text-bold">privacy policy</span>.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 mobile-none">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
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
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Legals</h6>
                        <ul>
                          <Link href="/privacypolicy">
                            <li>Privacy policy</li>
                          </Link>
                          <Link href="/platform-terms">
                            <li>Platform terms</li>
                          </Link>
                          <Link href="/term-of-services">
                            <li>Terms of services</li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Follow us</h6>
                        <ul>
                          <Link href="https://www.facebook.com/wearerenie">
                            <li className="d-flex gap-2">
                              <img src="/assets/facebook.webp" />
                              <span>Facebook</span>
                            </li>
                          </Link>
                          <Link href="https://www.linkedin.com/company/renietech">
                          <li className="d-flex gap-2">
                            <img src="/assets/linkedin.webp" />
                            <span>Linkedin</span>
                          </li>
                          </Link>
                          <Link href="https://www.instagram.com/wearerenie/">
                          <li className="d-flex gap-2">
                            <img src="/assets/instragram.webp" />
                            <span>Instagram</span>
                          </li>
                          </Link>
                          
                          <Link href="https://www.tiktok.com/@wearerenie">
                          <li className="d-flex gap-2">
                            <img src="/assets/tiktok.webp" />
                            <span>Tiktok</span>
                          </li></Link>
                          
                          <Link href="https://www.youtube.com/@wearerenie">
                          <li className="d-flex gap-2">
                            <img src="/assets/youtube.svg" />
                            <span>Youtube</span>
                          </li></Link>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div className="custom-center">
                    <img src="/assets/footer-text.webp" alt="renio" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row bootom-footer">
              <div class="col-lg-6 col-md-6">
                <p className="text-left">
                  © 2024 All rights reserved. Renie Tech Trading LLC
                </p>
              </div>
              <div class="col-lg-6 col-md-6">
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
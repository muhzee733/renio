import Link from "next/link";
import React from "react";

const Footer = () => {
  const pages = [
    { name: "Renie Bin", path: "/reniebin" },
    { name: "Renie Hub", path: "/reniehub" },
    { name: "Renie App", path: "/renieapp" },
    { name: "Ads that Matter", path: "/renieads" },
    { name: "Media Hub", path: "/mediahub" },
  ];

  return (
    <div className="footer-section">
      <div className="footer-main-section">
        <div className="footer-wrapper">
          <div className="container p-0">
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
                      <span className="text-bold">privacy policy</span>.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="row">
                    {/* Pages Section */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="userfull-links">
                        <h6>Pages</h6>
                        <ul>
                          {pages.map((page, index) => (
                            <li key={index}>
                              <Link href={page.path}>{page.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Legals Section */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
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

                    {/* Social Media Section */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="userfull-links">
                        <h6>Follow us</h6>
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/wearerenie">
                              <span>Facebook</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.linkedin.com/company/renietech">
                              <span>LinkedIn</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/wearerenie/">
                              <span>Instagram</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.tiktok.com/@wearerenie">
                              <span>TikTok</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.youtube.com/@wearerenie">
                              <span>YouTube</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Logo Section */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="custom-center">
                    <img src="/assets/footer-text.png" alt="renio" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="row bootom-footer">
              <div className="col-lg-6 col-md-6">
                <p className="text-left">
                  © 2024 All rights reserved. Renie Tech Trading LLC
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="text-right">
                  Country: Qatar | Saudi Arabia | United Arab Emirates
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

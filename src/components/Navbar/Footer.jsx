import Link from "next/link";
import React from "react";

const Footer = () => {
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
                <div class="col-lg-6 col-md-6">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Pages</h6>
                        <ul>
                          <li>Renie Bin</li>
                          <li>Renie Hub </li>
                          <li>Renie App </li>
                          <li>Ads that matter</li>
                          <li>Media Hub</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
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
                            {" "}
                            <Link href="/term-of-services">
                              Terms of services
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col">
                      <div className="userfull-links">
                        <h6>Follow us</h6>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div className="custom-center">
                    <img src="/assets/footer-text.png" alt="renio" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row bootom-footer">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div class="container">
          <div className="footer-wrapper">
            <div className="footer-upper-section">
              <div className="footer-left-section">
                <h6>Sign up to receive the latest news and support articles</h6>
                <div className="newsletter">
                  <input type="email" placeholder="Enter your email address" />
                  <button>Sign Up Now</button>
                </div>
                <p className="footer-text">
                  by submitting this form, you agree to our{" "}
                  <span className="text-bold">privacy policy</span>.
                </p>
              </div>
              <div className="foolter-links">
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
                <div className="userfull-links">
                  <h6>Legals</h6>
                  <ul>
                    <li>Privacy policy</li>
                    <li>Platform terms</li>
                    <li>Terms of use</li>
                  </ul>
                </div>
                <div className="userfull-links">
                  <h6>Follow us</h6>
                  <ul>
                    <li>
                      <span style={{ marginRight: "10px" }}>
                        <img src="/assets/facebook.png" />
                      </span>
                      Facebook
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>
                        <img src="/assets/linkedin.png" />
                      </span>
                      Linkedin
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>
                        <img src="/assets/instragram.png" />
                      </span>
                      Instagram
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>
                        <img src="/assets/tiktok.png" />
                      </span>
                      Tiktok
                    </li>
                    <li>
                      <span style={{ marginRight: "10px" }}>
                        <img src="/assets/youtube.png" />
                      </span>
                      Youtube
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-down-section">
              <img src="/assets/footer-text.png" alt="footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="bootom-footer">
        <p>© 2024 All rights reserved. Renie Tech Trading LLC</p>
        <p>Country : Qatar | Saudi Arabia | United Arab Emirates</p>
      </div>
    </>
  );
};

export default Footer;

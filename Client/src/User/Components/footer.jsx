import {} from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="main">
          <div className="text-center mb-4">
            <h2 className="footer-title text-uppercase color-white mb-16">
              Find Your Dream Home Today with Our <br />
              Extensive Property Collection
            </h2>
            <Link to={"/properties"} className="real-btn dark mb-lg-0 mb-32">
              View Properties
            </Link>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-12 mb-5 order-lg-1 order-2">
              <h4 className="title">Location</h4>
              <p className="fs-19 lh-130 color-gray mb-12 font-sec">
                TC 44/780, Jagathy, Kochar Road
              </p>
              <p className="fs-19 lh-130 color-gray mb-24 font-sec mb-5">
                Thiruvananthapuram, Kerala, 695014
              </p>
              <h4 className="title">Timing</h4>
              <p className="fw-5 fs-19 lh-130 ls-2 color-gray mb-12 font-sec">
                Mon-Sat, 9AM - 5.30PM
              </p>
              <p className="fw-5 fs-19 lh-130 ls-2 color-gray mb-0 font-sec">
                Sunday Off
              </p>
            </div>
            {/* <div className="col-xl-4 col-lg-4 mb-5 newsletter order-lg-2 order-1">
              <h2 className="title">Subscribe Our Newsletter</h2>
              <form action="./index.html">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                  />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div> */}
            <div className="col-xl-3 col-lg-3 col-12 mb-5 order-3">
              <h4 className="title">Contact Us</h4>
              <a
                href=""
                className="fw-6 fs-19 color-gray mb-12 d-block color-hover font-sec"
              >
                0471 4607022
              </a>
              <a
                href=""
                className="fw-6 fs-19 color-gray mb-12 d-block color-hover font-sec"
              >
                +91 9072552100
              </a>
              <a
                href=""
                className="fw-6 fs-19 color-gray mb-12 d-block color-hover font-sec"
              >
                +91 9072559100
              </a>
              <a
                href=""
                className="fw-4 fs-19 color-gray mb-24 color-hover text-lowercase font-sec mb-5"
              >
                support@onedealsrealty.in
              </a>
              <h4 className="title">Follow Us</h4>
              <ul className="footer-social-icon list-unstyled">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61557362571499&mibextid=ZbWKwL"
                    className="ms-lg-0"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/onedealsreality?igsh=YTJydWdlODltMmE1">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="fw-4 fs-19 color-gray font-sec m-0 text-center">
            ©2024 Onedeals Realty, All Rights Reserved. <br />
            Designed by Eleva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

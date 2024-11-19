import React from "react";
import Face from "../../images/facebook-logo.png";
import Inst from "../../images/instagram-logo.png";
import LinkIn from "../../images/linkedin-logo.png";
import Twit from "../../images/twitter-logo.png";
import BottomToTopBtn from "./BottomToTopBtn";
import Logo from "../../images/logo.jpg";
import "./style.css";

const Index = () => {
  return (
    <>
      <footer className="pt-5 text-center text-lg-start text-white bg-black">
        <section>
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase text-start fw-bold mb-2 text-white">
                  <i className="fas fa-gem me-3"></i>Company Name
                </h5>
                <div className="ms-3">
                  <img src={Logo} alt="facebook-img" width={100} />
                </div>
                <h5 className="text-uppercase text-start fw-bold mb-2 mt-4 text-white">
                  <i className="fas fa-gem me-3"></i>Follow Us
                </h5>
                <div className="social_icons_img ms-3">
                  <div className="image-container">
                    <img
                      src={Face}
                      alt="instagram-img"
                      className="zoom-image"
                      width={65}
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={Inst}
                      alt="instagram-img"
                      className="zoom-image"
                      width={65}
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={LinkIn}
                      alt="linkedin-img"
                      className="zoom-image"
                      width={65}
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={Twit}
                      alt="twitter-img"
                      className="zoom-image"
                      width={65}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h5 className="text-uppercase text-start fw-bold mb-4 text-white">
                  Quick Links
                </h5>
                <div className="d-flex justify-content-between">
                  <div className="location_hover1">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">Home</p>
                  </div>
                  <div className="location_hover1 me-2 me-lg-5">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">Services</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="location_hover1">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">About</p>
                  </div>
                  <div className="location_hover1 me-2 me-lg-5">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">Portfolio</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="location_hover1">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">Blogs</p>
                  </div>
                  <div className="location_hover1 me-2 me-lg-5">
                    <i className="bi bi-sign-turn-slight-right-fill me-2 fs-5"></i>
                    <p className="para_move fw-bold">Contacts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                <div className="ms-2 ms-lg-5">
                  <h5 className="text-uppercase text-white text-start fw-bold mb-4">
                    Our Offices
                  </h5>
                  <p className="location_hover w-100">
                    <i className="bi bi-geo-alt me-2"></i>New York, NY 10012, US
                  </p>
                  <br />
                  <p className="location_hover w-100">
                    <i className="bi bi-envelope-at-fill me-2"></i>
                    business@gmail.com
                  </p>
                  <br />
                  <p className="location_hover w-100">
                    <i className="bi bi-telephone-outbound-fill me-2"></i>
                    +92-3045678978
                  </p>
                  <br />
                  <p className="location_hover w-100">
                    <i className="bi bi-telephone-outbound-fill me-2"></i>
                    +92-3045678978
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="justify-content-center align-items-baseline p-2 ali border-top border-white text-white d-flex foot_bottom">
          <div>
            <h6 className="mt-3 me-2">
              Copyright @ MUA. All Rights Reserved .
            </h6>
          </div>
          {/*  Back to Top  */}
          <BottomToTopBtn />
        </div>
      </footer>
    </>
  );
};

export default Index;

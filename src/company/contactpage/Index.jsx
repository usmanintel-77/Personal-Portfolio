import React from "react";
import Footer from "../footer/Index";
import Navbar from "../navbarsection/Index";
import "./style.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="container contact_page_cont">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="contact_page_h2 mt-5">Contact Us</h2>
            <h4 className="contact_page_h4 mt-3">DROP A MESSAGE TO US</h4>
            <p className="contact_page_p mt-4">
              Share your queries, discuss your ideas, and understand the power
              of Software Technologies! Your one-stop shop for all Softwares,
              Websites, AI and Metaverse Design & Development Solutions. Contact
              with us today!
            </p>

            <input
              type="text"
              className="contact_input mt-5"
              placeholder="Name..."
            />
            <div className="d-flex gap-4 mt-5">
              <input
                type="text"
                className="contact_input"
                placeholder="Email..."
              />
              <input
                type="text"
                className="contact_input"
                placeholder="Phone No..."
              />
            </div>
            <textarea
              className="contact_input mt-5"
              placeholder="Message..."
              rows="4"
            ></textarea>

            <button className="submit_btn rounded fw-bold mt-4">
              <i className="bi bi-send-check-fill me-2"></i>Submit
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12"></div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className="d-flex justify-content-center">
              <div className="contact_icon_page_box rounded p-2 ps-3 pe-3">
                <i className="bi bi-envelope-paper-fill fs-2 icon_cont"></i>
              </div>
            </div>
            <h2 className="contact_page_h2 mt-2">Email us</h2>
            <p className="contact_page_p mt-2">
            Email us for general queries, including marketing and partnership opportunities.
            </p>

            <h5 className="contact_page_h2 mt-4">info@koderpoint.com</h5>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center"></div>
          <div className="col-lg-5 col-md-5 col-sm-12 text-center">
            <div className="d-flex justify-content-center">
              <div className="contact_icon_page_box rounded p-2 ps-3 pe-3">
                <i className="bi bi-headset fs-2 icon_cont"></i>
              </div>
            </div>
            <h2 className="contact_page_h2 mt-2">Call us</h2>
            <p className="contact_page_p mt-2">
            Call us to speak to a member of our team. We are always happy to help.
            </p>

            <h5 className="contact_page_h2 mt-4">+92 340 4493 417</h5>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-12">
            <div className="nav_patti about_foot_patti  rounded pt-3 pb-3">
              <div className="d-flex justify-content-center ms-4">
                <h4 className="fw-bold text-white about_page_foot pt-2">
                  We are ready! Let's work
                </h4>
              </div>
              <div className="d-flex justify-content-center me-4">
            <Link to="https://wa.me/03404493417" target="_blank" className="text-decoration-none">

                <button className="submit_btn rounded fw-bold p-0 m-0 d-flex align-items-center ps-3 pe-3 pt-1 pb-1">
                  <i className="bi bi-whatsapp me-2 fs-4 p-0 m-0"></i>
                  Connect Whatsapp
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;

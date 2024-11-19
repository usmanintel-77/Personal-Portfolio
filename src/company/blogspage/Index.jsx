import React from "react";
import data from "./data";
import Footer from "../footer/Index";
import Navbar from "../navbarsection/Index";
import "./style.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Blogs */}
      <div className="container blogs_page_cont mt-5">
        <h2 className="text-center blogs_h2">OUR NEW BLOGS</h2>
        <div className="d-flex justify-content-center mt-2">
          <h1 className="fw-bold text-center w-75 blogs_h1">
            LATEST NEW BLOGS
          </h1>
        </div>
        <div className="row mt-5">
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12 mt-4 mb-4">
              <div className="card_back">
                <img
                  src={item.imageUrl}
                  alt="Background"
                  className="card_img_back"
                />
              </div>
              <div className="mt-5">
                <Link className="text-decoration-none" to={item.link}>
                  <h4 className="blog_h3">{item.heading}</h4>
                </Link>
                <p className="blog_p">{item.description}</p>
                <Link className="text-decoration-none" to={item.link}>
                  <div className="mini">
                    <h6 className="blog_h3">
                      Read More
                      <i className="bi bi-arrow-right-short icon_right_arrow"></i>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          ))}
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
                <button className="submit_btn rounded fw-bold p-0 m-0 d-flex align-items-center ps-3 pe-3 pt-1 pb-1">
                  <i className="bi bi-person-lines-fill me-2 fs-4 p-0 m-0"></i>
                  Contact Us
                </button>
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

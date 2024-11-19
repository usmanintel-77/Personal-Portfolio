import React from "react";
import data from "./data";
import Footer from "../../footer/Index";
import Navbar from "../../navbarsection/Index";

const BloackchainBlog = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {data.map((item, index) => (
        <div key={index} className="container blogs_page_cont mt-5">
          <h2 className="text-center blogs_h2">OUR BLOGS</h2>
          <div className="d-flex justify-content-center mt-2">
            <h1 className="fw-bold text-center w-75 blogs_h1">
              {item.blogName}
            </h1>
          </div>
          <img
            src={item.FirstImgUrl}
            alt="blockchain-img"
            className="img-fluid mt-5 mb-4"
          />
          <p className="blog_p">{item.FirstPara}</p>
          <h4 className="blogs_page_h4 mt-5">{item.FirstHead}</h4>
          <p className="blog_p mt-2">{item.SecondPara}</p>
          <div className="row">
            <div className="col-lg-5 colmd-5 col-sm-12">
              <img
                src={item.SecondImgUrl}
                alt="blockchain-img"
                className="img-fluid blogs_page_img_shad mt-5 mb-4"
              />
            </div>
            <div className="col-lg-2 colmd-2 col-sm-12"></div>
            <div className="col-lg-5 colmd-5 col-sm-12">
              <img
                src={item.ThirdImgUrl}
                alt="blockchain-img"
                className="img-fluid blogs_page_img_shad mt-5 mb-4"
              />
            </div>
          </div>
          <h4 className="blogs_page_h4 mt-4">{item.SecondHead}</h4>
          <p className="blog_p mt-2">{item.ThirdPara}</p>
          <h4 className="blogs_page_h4 mt-4">{item.ThirdHead}</h4>
          <p className="blog_p mt-2">{item.FourthPara}</p>
          <h4 className="blogs_page_h4 mt-4">{item.FourthHead}</h4>
          <p className="blog_p mt-2">{item.FifthPara}</p>
          <img
            src={item.FourthImgUrl}
            alt="blockchain-img"
            className="img-fluid mt-5 mb-4"
          />
        </div>
      ))}
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

export default BloackchainBlog;

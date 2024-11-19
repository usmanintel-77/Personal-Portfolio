import React, { useState } from "react";
import Logo from "../../images/apple-1.gif";
import data from "./data";
import "./style.css";

const Index = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 3));
  };

  return (
    <>
      <div className="container pt-5 mt-3">
        <h2 className="text-center blogs_h2">OUR NEW BLOGS</h2>
        <div className="d-flex justify-content-center mt-2">
          <h1 className="fw-bold text-center w-75 blogs_h1">
            LATEST NEW BLOGS
          </h1>
        </div>
        <div className="row mt-5">
          {data.slice(startIndex, startIndex + 3).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12">
              <div className="card_back">
                <img
                  src={item.imageUrl}
                  alt="Background"
                  className="card_img_back"
                />
              </div>
              <div className="mt-5">
                <h4 className="blog_h3">{item.heading}</h4>
                <p className="blog_p">{item.description}</p>
                <div className="mini">
                  <h6 className="blog_h3">
                    Read More
                    <i className="bi bi-arrow-right-short icon_right_arrow"></i>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 mb-5">
        <button
          className="next_blog_btn rounded fw-bold me-2 d-flex m-0 p-0 ps-2 pe-3 align-items-center"
          onClick={handlePrev}
        >
          <i class="bi bi-arrow-left-short fs-3 p-0 m-0 me-1"></i> Prev
        </button>
        <button
          className="next_blog_btn rounded fw-bold me-2 d-flex m-0 p-0 ps-3 pe-2 align-items-center"
          onClick={handleNext}
        >
          Next <i class="bi bi-arrow-right-short fs-3 p-0 m-0"></i>
        </button>
      </div>
    </>
  );
};

export default Index;

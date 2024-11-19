import React from "react";
import data from "./data";
import industries from "./industries";
import Footer from "../footer/Index";
import Navbar from "../navbarsection/Index";
import "./style.css";

const AllServicesPage = () => {
  const insertBrTags = (title) => {
    const words = title.split(" ");
    for (let i = 1; i < words.length; i += 1) {
      words[i] += "<br/>";
    }
    return words.join(" ");
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="container pb-5 services_page_cont">
        <h2 className="text-center services_h2">DEVELOPMENT SERVICES</h2>
        <div className="d-flex justify-content-center mt-2">
          <h5 className="fw-bold text-center w-75 services_h5">
            At AMMAG TECHNOLOGIES , we stand as one of the top blockchain
            development companies in the industry. With our unwavering
            commitment to excellence, we lead the way in transforming businesses
            through cutting-edge blockchain technologies solutions.
          </h5>
        </div>
        <div className="row mt-4">
          {data.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-sm-12 mt-4 mb-4">
              <div className="div_border p-3 m-0">
                <div className="text-center p-0 m-0">
                  <i className={item.iconClass + " icon_hover"}></i>
                  <br />
                  <p
                    className="fw-bold p-0 m-0"
                    dangerouslySetInnerHTML={{
                      __html: insertBrTags(item.title),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Industries */}
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="about_industries rounded">
              <h2 className="text-center about_h2_ind pt-3 pb-3">
                Industries We Work With
              </h2>
              <div className="row pt-4">
                {industries.map((data, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div key={index} className="text-center">
                      <div className="d-flex justify-content-center">
                        <div className="indus_icon rounded-circle">
                          <img src={data.imageUrl} alt="icon" width={80} />
                        </div>
                      </div>
                      <div>
                        <h4 className="pt-3 pb-3 text-white fw-bold">
                          {data.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default AllServicesPage;

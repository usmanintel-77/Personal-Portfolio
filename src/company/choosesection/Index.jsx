import React from "react";
import "./style.css";

const Index = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <h2 className="text-center choose_h1">WHY CHOOSE US?</h2>
        <div className="row mt-4">
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2"></div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-ethernet icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Comprehensive Approach
                </h6>
                <p className="card-text text-start">
                  Our 360-degree approach ensures that every aspect of your
                  blockchain project is meticulously addressed, from concept to
                  deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-ethernet icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Experienced Team
                </h6>
                <p className="card-text text-start">
                  Our team comprises skilled developers, designers, and experts
                  who are well-versed in the nuances of blockchain technology
                  and its applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-ethernet icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Innovation and Creativity
                </h6>
                <p className="card-text text-start">
                  We thrive on innovation, constantly pushing boundaries to
                  create solutions that are not just functional but also
                  groundbreaking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-ethernet icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Client-Centric Focus
                </h6>
                <p className="card-text text-start">
                  Your vision is our priority. We collaborate closely with you
                  to understand your requirements and tailor our solutions
                  accordingly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2">
            <div className="d-flex justify-content-center align-items-end h-100 pb-2">
              <div>
                <div className="d-flex justify-content-center align-items-end">
                  <iframe
                    src="https://lottie.host/embed/cfd9f1c2-9ab5-47f8-9fc3-96abe3cbec70/A3p8lLGIz4.json"
                    width={100}
                    title="Schedule Meeting"
                  ></iframe>
                </div>
                <button className="choose_btn rounded mt-3 p-2 fw-bold d-flex m-0 p-0 align-items-center">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

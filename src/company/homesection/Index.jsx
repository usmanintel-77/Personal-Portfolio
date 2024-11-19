import React from "react";
import Navbar from "../navbarsection/Index"
import "./style.css";

const Index = () => {
  return (
    <>
    <Navbar />
      <div className="container-fluid main_home_img">
        <div className="row g-0">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <div className="home_head vh-100"> */}
            <div className="home_head">
              <div className="container">
                <h3 className="mb-4 mt-5 home_section_text ms-md-5 text-center-md">
                  EMPOWERING PROGRESS WITH TOP BLOCKCHAIN DEVELOPMENT SERVICE
                  PROVIDERS
                </h3>
                <p className="home_section_text1 ms-md-5 text-center-md">
                  We are pioneers in the field of 360 Degree Blockchain
                  Solutions and Enterprise Blockchain Services, dedicated to
                  delivering exceptional technology solutions tailored to your
                  specific needs. Our commitment to excellence is evident in the
                  high-quality blockchain solutions we provide. <br />
                  <br />
                  Become our valued partner for a journey marked by innovation
                  and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box_cube_main">
              <div className="mt-3 cube_mobile">
                <div className="box_header_cube">
                  <div className="cube-container">
                    <div className="cube">
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                    </div>
                  </div>
                  <div className="cube-container2">
                    <div className="cube2">
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                    </div>
                  </div>
                </div>
                <div className="box_header_cube">
                  <div className="cube-container2">
                    <div className="cube2">
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                      <div className="face2"></div>
                    </div>
                  </div>
                  <div className="cube-container">
                    <div className="cube">
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                      <div className="face"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

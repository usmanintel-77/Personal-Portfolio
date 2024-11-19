import React from "react";
import AboutImg from "../../images/about.png";
import Logo from "../../images/LOGOG.png"
import "./style.css";

const Index = () => {
  return (
    <>
        <div className="container about mt-5">
        <img
                src={Logo}
                alt="logo"
                width="100%"
                className="logo_img_com"
              />
          <h2 className="text-center blogs_h2">
            AMMAG BLOCKCHAIN TECHNOLOGY SOLUTIONS
          </h2>
          <div className="d-flex justify-content-center mt-2">
            <h1 className="fw-bold text-center w-75 blogs_h1">
              Innovative Excellence in Blockchain
            </h1>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
             <div className="about_div">
             <img
                className="img-fluid about_img"
                data-wow-delay="0.5s"
                src={AboutImg}
                alt="about-img"
              />
             </div>
            </div>
            <div className="col-lg-6">
              <p className="text-white pt-4">
              Welcome to Bazmizon Technologies, your go-to source for
              cutting-edge Software Technology Solutions. As a pioneer in the
              world of Software development, we provide custom blockchain
              services that transform markets and represent excellence. Through
              Software Technology Development, we create solutions that push the
              envelope of what is possible, demonstrating our spirit of
              innovation.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              For more than ten years, Bazmizon has provided top-notch IT
              solutions to hundreds of companies and businesses. We use
              cutting-edge technology strategies to deliver outstanding services
              with the utmost honesty. Web design and development, mobile app
              design and development, UX/UI design, graphics design, search
              engine optimization, and digital marketing are just a few of the
              many services we offer. Our team of designers, developers, and QA
              engineers is highly skilled, experienced, committed, and
              passionate about what they do. We guarantee timely delivery while
              upholding the best industry standards and quality control.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Index;

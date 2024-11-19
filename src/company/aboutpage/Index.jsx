import React from "react";
import industries from "./industries.js";
import Footer from "../footer/Index";
import Navbar from "../navbarsection/Index";
import "./style.css";

import AboutPageImg1 from "../../images/about.png";
import MON from "../../images/back2.jpeg";

import First from "../../images/method_1.avif";
import Second from "../../images/method_2.avif";
import Third from "../../images/method_3.avif";
import Fourth from "../../images/method_4.avif";
import Fifth from "../../images/method_5.avif";
import Sixth from "../../images/method_6.avif";

import Deploy from "../../images/about_deploy.gif";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* About Me */}
      <div className="container about">
        <h2 className="text-center blogs_h2">
          BAZMIZON SOFTWARE TECHNOLOGY SOLUTIONS
        </h2>
        <div className="d-flex justify-content-center mt-2">
          <h1 className="fw-bold text-center w-75 blogs_h1">
            Innovative Excellence in Software
          </h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="about_div">
              <img
                className="img-fluid about_img"
                data-wow-delay="0.5s"
                src={AboutPageImg1}
                alt="about-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="text-white pt-4 about_p_tag_indu">
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
      {/* Vision & Mission */}
      <div className="container pt-5 pb-5">
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-ethernet icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Our Vision
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  To be a globally recognized tech corporation that integrates
                  technology to offer innovative solutions to revolutionary
                  startups and well-established enterprises brought by
                  professionals of the highest caliber.
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
                  Our Mission
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  <br />
                  Delivering the most impactful and dependable solutions to
                  satisfy you with premium standards, excellence, diligence, and
                  steadfast ethics.
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
      {/* Process */}
      <div className="container pt-3 pb-5">
        <h2 className="text-center about_h2_ind">Our Process</h2>
        <p className="text-white fw-bold pt-3 pb-4 about_p_tag_indu">
          A KodersPoint methodology is successfully used to build brands and
          devise online strategies. Our 6D Process ensures that all steps are
          completed, improving efficiency along the way. The 6D-process is a
          proven method for success. Not only does it keep projects on track,
          but it also ensures results are achieved in the end. Why follow an
          improvement process? The most successful companies and individuals
          never settle with their current status quo; they're constantly looking
          out for innovations that will bring them to new levels of performance,
          even if that means changing skills or routines from time to time. They
          understand how important continual incremental improvements are - no
          matter what area you work in - because without these changes'
          innovation can stagnate as well. 6D Process Includes:
        </p>
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={First}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">1.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Discover</h5>
              <p className="about_p_tag_indu">
                Muhammad Usman We collaborate with you to understand your goals,
                why you want to achieve them, what should be the final outcome,
                and who will benefit from your aims once achieved. Considering
                all these parameters makes things crystal clear, and the whole
                journey becomes convenient.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Define</h5>
              <p className="about_p_tag_indu">
                Right after discovering, we will define a specific problem and
                search for a viable and the most impactful solution tailored to
                your needs. Once the solution becomes clear, and we agree on
                that, our tech experts will present a plan on how to achieve
                this solution.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">2.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={Second}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={Third}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">3.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Design</h5>
              <p className="about_p_tag_indu">
                Once the problem and its solution are clearly defined, and if we
                are on the same page, our skilled designers will play a crucial
                part in making a prototype - before launching the end product -
                to give you an idea of how it looks. Right after your approval,
                we will move on.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Develop</h5>
              <p className="about_p_tag_indu">
                This is the 4th and the most important step towards developing
                the final product, keeping in mind the approved design.
                Considering all functionalities, we will start developing a
                customized solution for your websites and mobile apps to get
                fruitful outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">4.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={Fourth}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={Fifth}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">5.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Deploy</h5>
              <p className="about_p_tag_indu">
                Congratulations! Your design is finalized, and the product is
                developed. The next step is to give it a try and see how it
                works in real-time. Exploring the features of the program will
                let you know how credible the end product is. We’re responsible
                for any revision.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="count_card">
              <img src={Deploy} className="float-end" alt="icon" />
              <h5 className="count_card_h4 mt-2 mb-2">Deliver</h5>
              <p className="about_p_tag_indu">
                Now, you are done with the test drive, and if you are satisfied
                with what is designed, developed, and deployed, we will hand
                over the project keys to you. We always ensure that you have
                complete access and source code because your satisfaction is our
                topmost priority.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-center align-items-center">
            <div className="about_count_cir_main rounded-circle">
              <div className="about_count_cir rounded-circle">
                <p className="fw-bold p-0 m-0">6.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="main_card_about">
              <img
                src={Sixth}
                alt="card"
                className="rounded"
                width="100%"
                style={{ height: "40vh" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Industries */}
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="about_industries rounded">
              <h2 className="text-center about_h2_ind pt-3 pb-3">
                We Create Websites Like This
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
                        <h6 className="pt-3 pb-3 text-white fw-bold">
                          {data.name}
                        </h6>
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
                <Link to="/contact-page" className="text-decoration-none">
                  <button className="submit_btn rounded fw-bold p-0 m-0 d-flex align-items-center ps-3 pe-3 pt-1 pb-1">
                    <i className="bi bi-person-lines-fill me-2 fs-4 p-0 m-0"></i>
                    Contact Us
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

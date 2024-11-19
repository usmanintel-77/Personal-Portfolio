import React, { useEffect, useState } from "react";
import industries from "./industries";
import Footer from "../footer/Index";
import Navbar from "../navbarsection/Index";
import "../aboutpage/style.css";

import AboutPageImg1 from "../../images/mern.webp";
import Fee from "../../images/Fee.png";
import FeeSmall from "../../images/Fee Mobile.png";

import Second from "../../images/method_2.avif";
import Third from "../../images/method_3.avif";
import Fourth from "../../images/method_4.avif";
import Fifth from "../../images/method_5.avif";
import Sixth from "../../images/method_6.avif";

import Deploy from "../../images/about_deploy.gif";
import { Link } from "react-router-dom";

const MernStack = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* About Me */}
      <div className="container about">
        <h2 className="text-center blogs_h2 pt-5">
          Mastering Full Stack Development with MERN
        </h2>
        <div className="d-flex justify-content-center mt-2">
          <h3
            className="text-center w-75 blogs_h1"
            style={{ fontStyle: "italic" }}
          >
            "Become a proficient full-stack developer by mastering MongoDB,
            Express, React, and Node.js!"
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="about_div">
              <img
                className="img-fluid about_img rounded-4"
                data-wow-delay="0.5s"
                src={AboutPageImg1}
                alt="about-img"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                What is the MERN Stack?
              </h4>
              <p className="text-white pt-2 about_p_tag_indu">
                The MERN stack is a powerful combination of four open-source
                technologies—MongoDB, Express.js, React.js, and Node.js—that
                work together to help developers build full-stack web
                applications. Each technology plays a crucial role in the
                overall structure, allowing for a seamless development process
                from the frontend to the backend.
                <br />
                <br />
                By combining these four technologies, developers can build
                full-stack applications where the frontend (React) communicates
                directly with the backend (Node.js + Express), and the backend
                manages data storage and retrieval through MongoDB. This unified
                JavaScript environment ensures faster development cycles,
                efficient data flow, and robust application performance.
                <br />
                <br />
                In this course, students will learn how to leverage each part of
                the MERN stack to build dynamic, modern web applications from
                scratch, gaining hands-on experience in both frontend and
                backend development.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Vision & Mission */}
      <div className="container pt-5 pb-5">
        <div className="row mt-4">
          {/* React.js Card */}
          <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-code-slash icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  React.js
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  React.js is a popular JavaScript library for building user
                  interfaces, particularly for single-page applications (SPAs).
                  It allows developers to build dynamic and interactive user
                  interfaces by using a component-based architecture, which
                  enhances the reusability of code and optimizes performance.
                </p>
              </div>
            </div>
          </div>

          {/* Node.js Card */}
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-box-seam icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Node.js
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  Node.js is a JavaScript runtime that allows developers to use
                  JavaScript on the server side. It enables the creation of
                  scalable backend services and APIs that can handle high
                  volumes of requests efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex justify-content-end">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-layers icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  Express.js
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  Express.js is a lightweight web framework for Node.js that
                  simplifies the development of server-side logic. It provides
                  robust tools for creating APIs, managing HTTP requests, and
                  handling routing, making it easier to manage backend
                  operations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 mt-2">
            <div className="card_port1 text-start rounded p-3">
              <div className="bg-white circle-container1">
                <i className="bi bi-database icon_hover3"></i>
              </div>
              <div className="card-body">
                <h6 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
                  MongoDB
                </h6>
                <p className="card-text text-start about_p_tag_indu">
                  MongoDB is a NoSQL database that stores data in JSON-like
                  documents, providing flexibility and scalability. Unlike
                  traditional relational databases, MongoDB is schema-less,
                  making it a great fit for applications with dynamic data
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Express.js Card */}
      </div>

      <img 
        src={isSmallScreen ? FeeSmall : Fee} 
        alt="fee" 
        className="img-fluid" 
      />

      {/* Outline */}
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h1
            className="blogs_h1 fw-bold text-uppercase d-inline-flex"
            style={{ fontSize: "60px", borderBottom: "3px solid white" }}
          >
            Course Outline
          </h1>
        </div>
        <div className="row mt-4">
          {/* Module 1 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 1:
            </h2>
            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Getting Started with MongoDB"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              This module introduces MongoDB, a NoSQL database, and its key
              concepts such as collections, documents, and CRUD operations.
              Students will learn how to set up a MongoDB database and perform
              basic operations.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Introduction to NoSQL
              </li>
              <li className="about_p_tag_indu text-white">
                MongoDB Setup and Installation
              </li>
              <li className="about_p_tag_indu text-white">CRUD Operations</li>
              <li className="about_p_tag_indu text-white">
                Connecting MongoDB with Node.js
              </li>
            </ul>
          </div>

          {/* Module 2 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 2:
            </h2>

            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Building the Backend with Node.js and Express"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              In this module, students will dive into the backend development
              process, learning how to build APIs using Node.js and Express.
              We'll also cover routing, middleware, and connecting the backend
              to MongoDB.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Introduction to Node.js
              </li>
              <li className="about_p_tag_indu text-white">
                Creating APIs with Express
              </li>
              <li className="about_p_tag_indu text-white">
                RESTful API Design
              </li>
              <li className="about_p_tag_indu text-white">
                Middleware and Routing
              </li>
              <li className="about_p_tag_indu text-white">
                Connecting APIs to MongoDB
              </li>
            </ul>
          </div>

          {/* Module 3 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 3:
            </h2>

            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Frontend Mastery with React.js"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              This module focuses on the frontend part of the stack. Students
              will learn how to use React to build fast, responsive, and modular
              user interfaces. Topics will include components, state, props, and
              handling events in React.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Introduction to React
              </li>
              <li className="about_p_tag_indu text-white">
                JSX and Component Structure
              </li>
              <li className="about_p_tag_indu text-white">State and Props</li>
              <li className="about_p_tag_indu text-white">
                Handling Events in React
              </li>
              <li className="about_p_tag_indu text-white">
                Building Dynamic UI
              </li>
            </ul>
          </div>

          {/* Module 4 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 4:
            </h2>
            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Full Stack Integration"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              In this module, students will learn how to integrate the frontend
              React application with the backend API. They will cover handling
              requests, managing state in React, and fetching data from APIs
              using tools like Axios or Fetch.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Frontend-Backend Communication
              </li>
              <li className="about_p_tag_indu text-white">
                HTTP Methods: GET, POST, PUT, DELETE
              </li>
              <li className="about_p_tag_indu text-white">
                State Management in React
              </li>
              <li className="about_p_tag_indu text-white">
                Using Axios to Fetch Data from API
              </li>
            </ul>
          </div>

          {/* Module 5 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 5:
            </h2>

            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "User Authentication and Authorization"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              This module introduces students to user authentication techniques,
              including session management, password hashing with bcrypt, and
              using JWT (JSON Web Tokens) for securing APIs.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                User Authentication Overview
              </li>
              <li className="about_p_tag_indu text-white">
                JWT: JSON Web Tokens
              </li>
              <li className="about_p_tag_indu text-white">
                Password Hashing with Bcrypt
              </li>
              <li className="about_p_tag_indu text-white">
                Role-Based Access Control
              </li>
            </ul>
          </div>

          {/* Module 6 */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Module 6:
            </h2>
            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Deploying Your MERN Application"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              In this final module, students will learn about deploying their
              applications on platforms like Heroku and Netlify. We will cover
              setting up environments, managing databases, and ensuring smooth
              deployment.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Topics Covered:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Hosting Frontend on Netlify
              </li>
              <li className="about_p_tag_indu text-white">
                Deploying Backend on Heroku
              </li>
              <li className="about_p_tag_indu text-white">
                Environment Variables
              </li>
              <li className="about_p_tag_indu text-white">
                Connecting to MongoDB Atlas
              </li>
            </ul>
          </div>

          {/* Final Project */}
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              Final Project:
            </h2>
            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Build Your Full-Stack MERN Application"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              The final project gives students the opportunity to apply
              everything they have learned by building a complete full-stack
              MERN application, incorporating authentication, API integration,
              and frontend-backend communication.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Key Components:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Full-Stack App Design
              </li>
              <li className="about_p_tag_indu text-white">
                Frontend Development with React
              </li>
              <li className="about_p_tag_indu text-white">
                API Creation with Node.js and Express
              </li>
              <li className="about_p_tag_indu text-white">
                Data Management with MongoDB
              </li>
              <li className="about_p_tag_indu text-white">
                User Authentication and Deployment
              </li>
            </ul>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-2 rounded-4 ps-3"
            style={{ border: "1px dashed var(--main-color)" }}
          >
            <h2
              className="blogs_h1 fw-bold pt-5 d-inline-flex"
              style={{
                borderBottom: "3px solid var(--main-color)",
                color: "var(--main-color)",
              }}
            >
              CTO Training: Starting a Business
            </h2>
            <div className="mt-2">
              <h3 className="blogs_h1" style={{ fontStyle: "italic" }}>
                "Essential Training for CTO's"
              </h3>
            </div>
            <h4 className="card-title pt-4 pb-2 text-uppercase fw-bold choose_h6">
              Description:
            </h4>
            <p className="text-white about_p_tag_indu">
              This training program is designed for CTOs who aspire to lead
              their own tech-driven businesses. It covers essential steps like
              conceptualizing a business, leading technical teams, developing a
              product, securing investments, and scaling the company for growth.
            </p>
            <h4 className="card-title pt-3 pb-2 text-uppercase fw-bold choose_h6">
              Key Components:
            </h4>
            <ul>
              <li className="about_p_tag_indu text-white">
                Business Ideation and Strategy
              </li>
              <li className="about_p_tag_indu text-white">
                Leading and Managing Technical Teams
              </li>
              <li className="about_p_tag_indu text-white">
                Product Development and Launch
              </li>
              <li className="about_p_tag_indu text-white">
                Securing Investments and Funding
              </li>
              <li className="about_p_tag_indu text-white">
                Scaling the Business for Growth
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Process */}
      <div className="container pt-3 pb-5">
        <div className="text-center">
          <h1
            className="blogs_h1 fw-bold text-uppercase d-inline-flex"
            style={{ fontSize: "60px", borderBottom: "3px solid white" }}
          >
            Our Process
          </h1>
        </div>
        <p className="text-white pt-3 pb-4 about_p_tag_indu">
          A IOM methodology is successfully used to build brands and
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
        <div className="row mt-4 d-flex justify-content-end">
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
        </div>
        <div className="row mt-4">
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
        <div className="row mt-4 d-flex justify-content-end">
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
        </div>
        <div className="row mt-4">
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
        <div className="row mt-4 d-flex justify-content-end">
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

export default MernStack;

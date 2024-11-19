import React from "react";
import ClientLogoSlider from "./ClientSlider";
import First from "../../images/logo.jpg"; // Example import
import Second from "../../images/ADAdAD.png"; // Example import

const Index = () => {
  const logos = [
    First, // Example image import
    // require("../../images/logo2.png").default, // Example import using require
    Second,
    First,
    First,
    First,
    First,
    First,
    First,
    First,
    First,
    First,
    // Add more logo paths as needed
  ];
  return (
    <>
      <div className="container mt-5 mb-5">
      <h2 className="text-center blogs_h2">OUR CLIENTS</h2>
        <div className="d-flex justify-content-center mt-2">
          <h1 className="fw-bold text-center w-75 blogs_h1">
            SUCCESSFUL CLIENTS
          </h1>
        </div>
        <div className="row mt-5 pb-5">
          <div className="col-12">
            <ClientLogoSlider logos={logos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
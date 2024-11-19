import React from "react";
import data from "./data";
import "./style.css";

const Index = () => {
  const insertBrTags = (title) => {
    const words = title.split(" ");
    for (let i = 1; i < words.length; i += 1) {
      words[i] += "<br/>";
    }
    return words.join(" ");
  };
  return (
    <>
      <div className="container pt-5 pb-5 mt-3">
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
    </>
  );
};

export default Index;

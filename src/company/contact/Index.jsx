import React, { useState } from "react";
import ContactImg from "../../images/Contact.png";
import "./style.css";

// Phone Input Library
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Index = () => {
  const [phone, setPhone] = useState(""); // Phone Input Library State
  return (
    <>
      <div className="main_cont_div pt-3 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-4 col-sm-12">
              <div className="d-flex justify-content-center justify-content-md-start">
                <img
                  src={ContactImg}
                  alt="contact-img"
                  className="contact_img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="text-center p-2">
                <h2 className="contact_h3_1 fw-bold">TALK TO OUR EXPERTS</h2>
              </div>
              <div className="contact_box pb-2">
                <div className="text-center p-2 pt-4">
                  <h4 className="contact_h3_2 fw-bold">Talk to our Experts</h4>
                </div>
                <div className="pb-2 ps-3 pe-3 d-flex gap-3 justify-content-between">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control-1"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control-1"
                  />
                </div>
                <div className="ps-3 pe-3 pt-2 pb-2">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(newPhone) => setPhone(newPhone)}
                  />
                </div>
                <div className="pt-2 pb-2 ps-3 pe-3">
                  <textarea
                    className="form-control-1"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                  <div className="d-flex justify-content-center mt-3 mb-3 gap-3">
                  <button className="submit_btn rounded fw-bold">
                    <i className="bi bi-whatsapp me-2"></i>Whatsapp
                  </button>
                  <button className="submit_btn rounded fw-bold">
                    <i className="bi bi-send-check-fill me-2"></i>Submit
                  </button>
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

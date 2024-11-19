// ScrollToTopButton.js
import React from "react";
import "./style.css"

const BottomToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="top_arrow_btn_div">
      <div className="top_arrow_btn rounded">
        <i className="bi bi-airplane fs-5"></i>
      </div>
    </button>
  );
};

export default BottomToTopBtn;

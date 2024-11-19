import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientLogoSlider = ({ logos }) => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 2000, // Adjust the speed of auto movement
    slidesToShow: 5, // Display 5 logos at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="d-flex justify-content-center">
            <img
              src={logo}
              alt={`Client Logo ${index}`}
              width={150}
              height={100}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientLogoSlider;

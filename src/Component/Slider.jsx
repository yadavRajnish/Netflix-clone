import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ title, array = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-auto p-4 bg-main">
      <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
      <Slider {...settings}>
        {array.map((item, index) => (
          <div key={index} className="px-2">
            <Card
              img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              title={item.title}
              id={item.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;

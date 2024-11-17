// src/components/SliderSection.js

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SliderWrapper = styled.div`
  margin: 40px auto;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderSection;

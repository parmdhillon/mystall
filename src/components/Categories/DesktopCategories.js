import React from 'react';
import Slider from 'react-slick';
import DesktopCategory from './DesktopCategory';

const DesktopCategories = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="my-2">
      <Slider {...settings}>
        <DesktopCategory selected>Veggies</DesktopCategory>
        <DesktopCategory>Fruits</DesktopCategory>
        <DesktopCategory>Meat</DesktopCategory>
        <DesktopCategory>Dairy</DesktopCategory>
        <DesktopCategory>Snacks</DesktopCategory>
        <DesktopCategory>Beverages</DesktopCategory>
      </Slider>
    </div>
  );
};

export default DesktopCategories;

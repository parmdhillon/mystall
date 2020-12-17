import React, { useState } from 'react';
import Slider from 'react-slick';
import DesktopCategory from './DesktopCategory';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../actionTypes/categoryActionTypes';

const DesktopCategories = () => {
  const [leftOffset, setLeftOffset] = useState('28');
  const { catName } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const setCategoryHandler = (catName) => {
    dispatch({ type: actionTypes.SET_CATEGORY, payload: catName });
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const setBgHandler = (el) => {
    const { left } = el.getBoundingClientRect();
    setLeftOffset(left);
  };

  const categories = [
    'Veggies',
    'Fruits',
    'Snacks',
    'Meat',
    'Dairy',
    'Beverages',
  ];
  return (
    <div className="my-2">
      <div
        style={{
          left: `${leftOffset}px`,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55',
        }}
        className="w-28 h-8 bg-sea-green-500 rounded-full absolute transition-all duration-500"
      ></div>
      <Slider {...settings}>
        {categories.map((category, key) => (
          <DesktopCategory
            name={category}
            key={key}
            selected={catName === category}
            setBg={setBgHandler}
            setCat={setCategoryHandler}
          />
        ))}
      </Slider>
    </div>
  );
};

export default DesktopCategories;

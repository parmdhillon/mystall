import React, { useState } from 'react';
import Slider from 'react-slick';
import DesktopCategory from './DesktopCategory';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../actionTypes/categoryActionTypes';

const DesktopCategories = ({ categories }) => {
  //SET/GET Current Category
  const [leftOffset, setLeftOffset] = useState({ left: '0', width: '0' });
  const { catName } = useSelector((state) => state.currentCategory);
  const dispatch = useDispatch();
  const setCategoryHandler = (catName, _id) => {
    dispatch({
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: { catName, _id },
    });
  };
  const setBgHandler = (el) => {
    const { left, width } = el.getBoundingClientRect();
    setLeftOffset({ left, width });
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="my-2">
      <div
        style={{
          left: `${leftOffset.left}px`,
          width: `${leftOffset.width}px`,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55',
        }}
        className="h-8 bg-sea-green-500 rounded-full absolute transition-all duration-500"
      ></div>
      {categories && (
        <Slider {...sliderSettings}>
          {categories.map((category, index) => (
            <DesktopCategory
              name={category.name}
              index={index}
              key={category._id}
              id={category._id}
              selected={catName === category.name}
              setBg={setBgHandler}
              setCat={setCategoryHandler}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default DesktopCategories;

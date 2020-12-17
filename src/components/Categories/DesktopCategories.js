import React, { useState } from 'react';
import Slider from 'react-slick';
import DesktopCategory from './DesktopCategory';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../actionTypes/categoryActionTypes';

const DesktopCategories = ({categories}) => {
  //SET/GET Current Category
  const [leftOffset, setLeftOffset] = useState('28');
  const { catName } = useSelector((state) => state.currentCategory);
  const dispatch = useDispatch();
  const setCategoryHandler = (catName, _id) => {
    dispatch({
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: { catName, _id },
    });
  };
  const setBgHandler = (el) => {
    const { left } = el.getBoundingClientRect();
    setLeftOffset(left);
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
          left: `${leftOffset}px`,
          transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55',
        }}
        className="w-28 h-8 bg-sea-green-500 rounded-full absolute transition-all duration-500"
      ></div>
      {categories && (
        <Slider {...sliderSettings}>
          {categories.map((category, key) => (
            <DesktopCategory
              name={category.name}
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

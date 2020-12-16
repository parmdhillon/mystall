import React from 'react';
import Slider from 'react-slick';
import DesktopCategory from './DesktopCategory';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../actionTypes/categoryActionTypes';

const DesktopCategories = () => {
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
      <Slider {...settings}>
        {categories.map((category, key) => (
          <DesktopCategory
            name={category}
            selected={catName === category}
            key={key}
            setCat={setCategoryHandler}
          />
        ))}
      </Slider>
    </div>
  );
};

export default DesktopCategories;

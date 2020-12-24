import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageLazy from '../ImageLazy/ImageLazy';
import './MobileCategory.css';
import * as actionTypes from '../../actionTypes/categoryActionTypes';

const MobileCategory = ({ name, img, id }) => {
  const slug = name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  let imgURI;
  img.includes('http')
    ? (imgURI = img)
    : (imgURI = `/img/categories/${img}.png`);

  const dispatch = useDispatch();
  const setCategoryHandler = (catName, _id) => {
    dispatch({
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: { catName, _id },
    });
  };
  return (
    <div className="w-1/2 p-2">
      <Link
        to={`/category/${slug}`}
        onClick={() => {
          setCategoryHandler(name, id);
        }}
      >
        <div className="bg-white rounded-3xl p-3 w-full shadow flex flex-col items-center hover:bg-gray-200 ">
          <div className="w-28 h-28 flex justify-center items-center">
            <ImageLazy src={imgURI} />
          </div>
          <span className="block mt-3 text-gray-500 font-bold">{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default MobileCategory;

import React from 'react';
import ImageLazy from '../ImageLazy/ImageLazy';
import './MobileCategory.css';

const Category = ({ name, img }) => {
  return (
    <div className="bg-white rounded-3xl p-3 w-full m-2 shadow perRow flex flex-col items-center">
      <div className="w-32 h-28 flex justify-center items-center">
        <ImageLazy src={img} />
      </div>
      <span className="block mt-3 text-gray-500 font-bold">{name}</span>
    </div>
  );
};

export default Category;

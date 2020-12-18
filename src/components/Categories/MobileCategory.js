import React from 'react';
import ImageLazy from '../ImageLazy/ImageLazy';
import './MobileCategory.css';

const Category = ({ name, img }) => {
  let imgURI;
  if (
    img.includes('http')
      ? (imgURI = img)
      : (imgURI = `/img/categories/${img}.png`)
  )
    return (
      <div className="w-1/2 p-2">
        <div className="bg-white rounded-3xl p-3 w-full m-2 shadow flex flex-col items-center hover:bg-gray-200 ">
          <div className="w-full h-28 flex justify-center items-center">
            <ImageLazy src={imgURI} />
          </div>
          <span className="block mt-3 text-gray-500 font-bold">{name}</span>
        </div>
      </div>
    );
};

export default Category;

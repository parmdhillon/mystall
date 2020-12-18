import React from 'react';
import ImageLazy from '../ImageLazy/ImageLazy';

const Product = ({img,name,price,qtyType}) => {
  return (
    <div className="w-full p-2 h-36 sm:h-56 sm:w-1/3">
      <div className="w-full h-full bg-white rounded-3xl shadow flex flex-row sm:flex-col p-2 hover:bg-gray-200 cursor-pointer">
        <div className="bg-gray-100 w-5/12 sm:w-full h-full sm:h-36 p-2 flex justify-center items-center rounded-3xl overflow-hidden">
          <ImageLazy
            src={img}
            alt={name}
          />
        </div>
        <div className="ml-4 flex justify-center sm:items-center flex-col">
          <span className="text-black font-bold">{name}</span>
          <span className="font-bold text-sea-green-500 text-lg">
            ${price}
            <span className="text-gray-500 text-sm font-normal ">/{qtyType}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;

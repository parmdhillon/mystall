import React from 'react';
import { Link } from 'react-router-dom';
import ImageLazy from '../ImageLazy/ImageLazy';

const Product = ({ img, name, price, qtyType, id, catName }) => {
  const categorySlug = catName
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return (
    <div className="w-full py-2 sm:px-2 h-36 sm:h-56 sm:w-1/3">
      <Link to={`/item/${categorySlug}/${id}`}>
        <div className="w-full h-full bg-white rounded-3xl shadow flex flex-row sm:flex-col p-2 hover:bg-gray-200 cursor-pointer overflow-hidden ">
          <div
            className="bg-white w-2/5 sm:w-28 sm:m-auto h-full sm:h-36 p-2 flex justify-center items-center rounded-3xl overflow-hidden"
          >
            <ImageLazy src={img} alt={name} />
          </div>
          <div className="ml-4 sm:ml-0 w-3/5 sm:w-full block my-auto">
            <span
              className="text-black font-bold sm:text-center block sm:overflow-hidden sm:overflow-ellipsis sm:whitespace-nowrap"
            >
              {name}
            </span>
            <div className="sm:text-center overflow-hidden overflow-ellipsis whitespace-nowrap px-1">
              <span className="font-bold text-sea-green-500 text-lg">
              ${price}
              <span className="text-gray-500 text-sm font-normal ">
                /{qtyType}
              </span>
            </span>
            </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

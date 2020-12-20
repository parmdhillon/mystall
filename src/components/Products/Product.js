import React from 'react';
import { Link } from 'react-router-dom';
import ImageLazy from '../ImageLazy/ImageLazy';

const Product = ({ img, name, price, qtyType, id, catName }) => {
  const categorySlug = catName
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return (
    <div className="w-full p-2 h-36 sm:h-56 sm:w-1/3">
      <Link to={`/item/${categorySlug}/${id}`}>
        <div className="w-full h-full bg-white rounded-3xl shadow flex flex-row sm:flex-col p-2 hover:bg-gray-200 cursor-pointer overflow-hidden">
          <div
            style={{ flex: '0 0 7em' }}
            className="bg-white sm:w-full h-full sm:h-36 p-2 flex justify-center items-center rounded-3xl overflow-hidden"
          >
            <ImageLazy src={img} alt={name} />
          </div>
          <div className="ml-4 w-full flex justify-center sm:items-center flex-col overflow-hidden">
            <span
              style={{ textOverflow: '"...     "' }}
              className="text-black font-bold overflow-ellipsis	sm:text-center overflow-hidden block w-full whitespace-nowrap"
            >
              {name}
            </span>
            <span className="font-bold text-sea-green-500 text-lg">
              ${price}
              <span className="text-gray-500 text-sm font-normal ">
                /{qtyType}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

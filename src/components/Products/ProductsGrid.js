import React from 'react';
import { Link } from 'react-router-dom';
import ImageLazy from '../ImageLazy/ImageLazy';

const ProductsGrid = ({ img, name, id, catName }) => {
  const categorySlug = catName
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return (
    <div className="my-1 px-2 py-1 w-1/2 overflow-hidden">
      <Link to={`/item/${categorySlug}/${id}`}>
        <div className="bg-white shadow h-44 rounded-2xl">
          <div className="bg-white w-full h-36 p-2 flex justify-center items-center rounded-3xl overflow-hidden">
            <ImageLazy src={img} alt={name} />
          </div>
          <div className="w-full px-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
            <span className="font-bold">{name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsGrid;

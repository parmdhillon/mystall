import React from 'react';
// import { useSelector } from 'react-redux';
import Product from './Product';
import { useMediaQuery } from 'react-responsive';

const Products = ({ isHome }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  //const { catName, _id: catID } = useSelector((state) => state.currentCategory);
  return (
    <>
      {isHome || <h1>Category</h1>}
      {isHome && isMobile ? (
        ''
      ) : (
        <div className="w-full flex flex-wrap">
          <Product />
          <Product />
          <Product />
        </div>
      )}
    </>
  );
};

export default Products;

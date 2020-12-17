import React from 'react';
import { useSelector } from 'react-redux';

const Products = ({ isHome }) => {
  const { catName, _id: catID } = useSelector((state) => state.currentCategory);
  return (
    <>
      {isHome || (
        <h2>
          {catName}
          {catID}
        </h2>
      )}
    </>
  );
};

export default Products;

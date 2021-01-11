import React from 'react';
import Products from '../components/Products/Products';

const CategoryScreen = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 overflow-hidden">
      <Products paginate />
    </div>
  );
};

export default CategoryScreen;

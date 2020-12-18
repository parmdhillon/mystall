import React from 'react';
import MobileCategory from './MobileCategory';

const MobileCategories = ({ categories }) => {
  return (
    <div className="flex flex-wrap my-3">
      {categories &&
        categories.map((category) => (
          <MobileCategory
            img={category.img}
            name={category.name}
            key={category._id}
            id={category._id}
          />
        ))}
    </div>
  );
};

export default MobileCategories;

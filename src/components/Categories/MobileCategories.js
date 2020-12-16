import React from 'react';
import MobileCategory from './MobileCategory';

const MobileCategories = () => {
  return (
    <div className="flex flex-wrap my-3">
      <MobileCategory img="/img/categories/veggies.png" name="Veggies" />
    </div>
  );
};

export default MobileCategories;

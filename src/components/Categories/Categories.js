import React from 'react';
import './Categories.css';
import Category from './Category';

const Categories = () => {
  return (
    <div>
      <h2 className="text-gray-500 text-xl font-display">Categories</h2>
      <div className="flex flex-wrap">
        <Category img="/img/categories/veggies.png" name="Veggies" />
      </div>
    </div>
  );
};

export default Categories;

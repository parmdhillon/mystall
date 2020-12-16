import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopCategories from './DesktopCategories';
import MobileCategories from './MobileCategories';
const Categories = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  return (
    <>
      <h2 className="text-gray-500 text-xl font-display">Categories</h2>
      {isMobile ? <MobileCategories /> : <DesktopCategories/>}
    </>
  );
};

export default Categories;

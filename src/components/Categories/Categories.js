import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { loadCategories } from '../../actions/categoriesActions';
import DesktopCategories from './DesktopCategories';
import MobileCategories from './MobileCategories';
const Categories = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.allCategories);
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <>
      <h2 className="text-gray-500 text-xl font-display">Categories</h2>
      {isMobile ? (
        <MobileCategories categories={categories} />
      ) : (
        <DesktopCategories categories={categories} />
      )}
    </>
  );
};

export default Categories;

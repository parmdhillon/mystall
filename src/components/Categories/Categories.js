import React, { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { loadCategories } from '../../actions/categoriesActions';
import Loading from '../Loading/Loading';
import DesktopCategories from './DesktopCategories';
import MobileCategories from './MobileCategories';
const Categories = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector(
    (state) => state.allCategories
  );
  useEffect(() => {
    dispatch(loadCategories(isMobile));
  }, [dispatch, isMobile]);

  return (
    <>
      <h2 className="text-gray-500 text-xl font-display">Categories</h2>
      {loading ? (
        isMobile && <Loading />
      ) : error ? (
        <h1>Error</h1>
      ) : categories.length ? (
        isMobile ? (
          <MobileCategories categories={categories} />
        ) : (
          <DesktopCategories categories={categories} />
        )
      ) : (
        <div className="font-bold text-xl flex justify-center items-center">
          <FaExclamationTriangle /> &nbsp;No Categories Found!
        </div>
      )}
    </>
  );
};

export default Categories;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { loadProducts } from '../../actions/productActions';
import { useMediaQuery } from 'react-responsive';
import Loading from '../Loading/Loading';
import ErrorBox from '../ErrorBox/ErrorBox';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

const Products = ({ isHome, history }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  const { catName, _id: catID } = useSelector((state) => state.currentCategory);
  const { loading, products, error } = useSelector(
    (state) => state.allProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (catID) {
      dispatch(loadProducts(catID));
    }
  }, [catID, dispatch]);

  let loadOnMobile = isHome && isMobile ? false : true;

  return (
    <>
      {isHome || (
        <div className="my-3 p-2 bg-sea-green-500 rounded-full relative flex justify-between items-center">
          <div className="sm:hidden absolute w-2/5 h-full bg-sea-green-400 rounded-full -right-12 top-0 float-right"></div>
          <h1 className="text-white text-xl ml-2 font-display my-2">
            {catName}
          </h1>
          <FaChevronCircleLeft
            className="text-sea-green-800 text-3xl cursor-pointer z-10"
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
      )}
      {loadOnMobile ? (
        loading ? (
          <Loading />
        ) : error ? (
          <div className="h-56 flex flex-col justify-center items-center">
            <ErrorBox showBackToHome message={error} />
          </div>
        ) : (
          <div className="w-full flex flex-wrap">
            {products.map((product) => (
              <Product
                name={product.name}
                key={product._id}
                catName={catName}
                id={product._id}
                img={product.img}
                price={product.price.toFixed(2)}
                qtyType={product.qtyType}
              />
            ))}
          </div>
        )
      ) : (
        ''
      )}
    </>
  );
};

export default withRouter(Products);

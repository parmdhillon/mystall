import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { loadProducts } from '../../actions/productActions';
import { useMediaQuery } from 'react-responsive';
import Loading from '../Loading/Loading';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = ({ isHome }) => {
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

  const loadOnMobile = !(isHome && isMobile);

  return (
    <>
      {isHome || (
        <div className="my-3 p-2 bg-sea-green-500 block rounded-l-full relative">
          <div className="absolute w-1/3 h-full bg-sea-green-400 rounded-full -right-10 top-0 float-right"></div>
          <h1 className="text-white text-xl font-display my-2">{catName}</h1>
        </div>
      )}
      {loadOnMobile && (
        <>
          {loading ? (
            <Loading />
          ) : error ? (
            <h1>error</h1>
          ) : products.length ? (
            <div className="w-full flex flex-wrap">
              {products.map((product) => (
                <Product
                  name={product.name}
                  key={product._id}
                  img={product.img}
                  price={product.price.toFixed(2)}
                  qtyType={product.qtyType}
                />
              ))}
            </div>
          ) : (
            <>
              <div className="font-bold h-screen text-xl flex flex-col justify-center items-center">
                <FaExclamationTriangle /> &nbsp;No Products Found!
                {!isHome && (
                  <div className="block text-center my-3">
                    <Link
                      to="/"
                      className=" px-3 py-2 rounded-full bg-sea-green-500 text-white font-bold"
                    >
                      Back to Home
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { loadProducts, searchProducts } from '../../actions/productActions';
import { useMediaQuery } from 'react-responsive';
import Loading from '../Loading/Loading';
import ErrorBox from '../ErrorBox/ErrorBox';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Link, withRouter } from 'react-router-dom';

const Products = ({ isHome, history, location, keyword, paginate }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
  const { catName, _id: catID } = useSelector((state) => state.currentCategory);
  const { loading, products, totalProducts, error } = useSelector(
    (state) => state.allProducts
  );
  const params = new URLSearchParams(location.search);
  const page = Number(params.get('page') || 1);
  const maxLimit = Number(totalProducts) / 12 < page; //if Products less than pages (negative approch)
  let loadOnMobile = isHome && isMobile ? false : true;

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (keyword) {
      dispatch(searchProducts(keyword, page));
    } else if (loadOnMobile && catID) {
      dispatch(loadProducts(catID, page));
    }
  }, [catID, dispatch, loadOnMobile, keyword, page]);

  return (
    <>
      {isHome || (
        <div className="my-3 p-2 bg-sea-green-500 rounded-full relative flex justify-between items-center">
          <div className="sm:hidden absolute w-2/5 h-full bg-sea-green-400 rounded-full -right-12 top-0 float-right"></div>
          <h1 className="text-white text-xl ml-2 font-display my-2">
            {keyword || catName}
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
            <ErrorBox showBackToHome={!isHome} message={error} />
          </div>
        ) : (
          <>
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
            {paginate && (
              <div className="my-5 max-w-md m-auto flex justify-evenly items-center">
                <Link
                  className={`py-2 px-4 rounded-lg text-white ${
                    page === 1
                      ? `bg-gray-300 cursor-not-allowed`
                      : `bg-sea-green-500`
                  }`}
                  to={`?page=${page === 1 ? 1 : page - 1}`}
                >
                  Back
                </Link>
                <Link
                  className={`py-2 px-4 rounded-lg text-white ${
                    maxLimit
                      ? `bg-gray-300 cursor-not-allowed`
                      : `bg-sea-green-500`
                  }`}
                  to={`?page=${maxLimit ? page : page + 1}`}
                >
                  Next
                </Link>
              </div>
            )}
          </>
        )
      ) : null}
    </>
  );
};

export default withRouter(Products);

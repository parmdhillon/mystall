import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { randomProducts } from '../../actions/productActions';
import Loading from '../Loading/Loading';
import ErrorBox from '../ErrorBox/ErrorBox';
import { withRouter } from 'react-router-dom';

const RelatedProducts = () => {
  const { loading, products, error } = useSelector(
    (state) => state.allProducts
  );

  const shouldRender = useRef(false);
  if (loading) {
    shouldRender.current = true;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomProducts());
  }, [dispatch]);

  const content = shouldRender.current && (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="h-56 flex flex-col justify-center items-center">
          <ErrorBox message={error} />
        </div>
      ) : (
        <div className="w-full flex flex-wrap">
          {products.map((product) => (
            <Product
              name={product.name}
              key={product._id}
              catName={product.category.name}
              id={product._id}
              img={product.img}
              price={product.price.toFixed(2)}
              qtyType={product.qtyType}
            />
          ))}
        </div>
      )}
    </>
  );
  return content;
};

export default withRouter(RelatedProducts);

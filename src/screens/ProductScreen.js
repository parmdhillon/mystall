import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSingleProduct } from '../actions/productActions';
import ErrorBox from '../components/ErrorBox/ErrorBox';
import Loading from '../components/Loading/Loading';

const ProductScreen = ({ history, match }) => {
  const { loading, product, error } = useSelector(
    (state) => state.singleProduct
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSingleProduct('item', match.params.prodID));
  }, [dispatch, match.params.prodID]);
  return (
    <div className="max-w-screen-lg mx-auto max-h-screen px-5 overflow-hidden">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorBox />
      ) : (
        <>
          <h1>{product.name}</h1>
        </>
      )}
    </div>
  );
};

export default withRouter(ProductScreen);

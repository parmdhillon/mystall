import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSingleProduct } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
  const { loading, product, error } = useSelector(
    (state) => state.singleProduct
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSingleProduct('item', match.params.prodID));
  }, [dispatch, match.params.prodID]);
  return (
    <div className="max-w-screen-lg mx-auto px-5 overflow-hidden">
      <h1>{product.name}</h1>
    </div>
  );
};

export default withRouter(ProductScreen);

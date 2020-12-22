import React, { useEffect } from 'react';
import { FaCartPlus, FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSingleProduct } from '../actions/productActions';
import ErrorBox from '../components/ErrorBox/ErrorBox';
import ImageLazy from '../components/ImageLazy/ImageLazy';
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
        <ErrorBox showBackToHome message={error} />
      ) : (
        <>
          <div className="md:flex  my-4">
            <div className="bg-white shadow rounded-3xl p-4 w-full md:inline-block mb-4 md:mb-0 md:mr-4">
              <button
                onClick={() => {
                  history.goBack();
                }}
                className="rounded-xl border-gray-400 text-gray-400 border-2 border-solid py-1 px-3"
              >
                <FaChevronLeft className="inline -mt-1 text-sm" /> Back
              </button>
              <div className="flex flex-col justify-center items-center">
                <div className="w-64 h-64">
                  <ImageLazy src={product.img} alt={product.name} />
                </div>
              </div>
            </div>
            <div className="inline-block md:w-8/12 p-1">
              <div className="flex justify-between text-xl font-display ">
                <h1 className="text-gray-500">{product.name}</h1>
                <span className="text-sea-green-500">${product.price}</span>
              </div>
              <span className="block text-gray-400 my-1">{product.qtyType}</span>
              <p className="text-black my-2 block">{product.description}</p>
              <button className="rounded-full w-full py-4 my-3 bg-sea-green-500 text-white text-xl font-display"><FaCartPlus className="inline -mt-1"/> Add to Basket</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(ProductScreen);

import React, { useEffect } from 'react';
import { FaCartPlus, FaChevronLeft, FaShoppingBag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Notify from '../components/Notify/Notify';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { loadSingleProduct } from '../actions/productActions';
import ErrorBox from '../components/ErrorBox/ErrorBox';
import ImageLazy from '../components/ImageLazy/ImageLazy';
import Loading from '../components/Loading/Loading';
import RelatedProducts from '../components/Products/RelatedProducts';

const ProductScreen = ({ history, match }) => {
  const { loading, product, error } = useSelector(
    (state) => state.singleProduct
  );

  const { cartItems } = useSelector((state) => state.cart);
  const itemInCart = cartItems?.length
    ? cartItems.find((item) => item.id === product._id)
    : false;

  const qtyMore = itemInCart?.qty + 1 || 1;
  const qtyLess = itemInCart?.qty - 1 || 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSingleProduct('item', match.params.prodID));
  }, [dispatch, match.params.prodID]);

  const addToCartHandler = () => {
    Notify('Added To Cart', 'success', 'Add_To_Cart');
    dispatch(addToCart(product._id, qtyMore));
  };

  const removeFromCartHandler = () => {
    if (qtyLess === 0) {
      dispatch(removeFromCart(product._id));
    } else {
      dispatch(addToCart(product._id, qtyLess)); //Update Cart Items // qtyLess is number items to be set
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorBox showBackToHome message={error} />
      ) : (
        <div>
          <ToastContainer />
          <div className="md:flex  my-4">
            <div className="bg-white shadow rounded-3xl p-4 w-full md:inline-block mb-4 md:mb-0 md:mr-4">
              <button
                onClick={() => {
                  history.goBack();
                }}
                className="rounded-xl border-gray-100 text-gray-500 border-2 border-solid py-1 px-3"
              >
                <FaChevronLeft className="inline -mt-1 text-sm" /> Back
              </button>
              <div className="w-full h-64 flex flex-col justify-center items-center">
                <ImageLazy src={product.img} alt={product.name} />
              </div>
            </div>
            <div className="inline-block md:w-8/12 p-1">
              <div className="flex justify-between text-xl font-display ">
                <h1 className="text-gray-500">{product.name}</h1>
                <span className="text-sea-green-500">${product.price}</span>
              </div>
              <span className="block text-gray-400 my-1">
                <FaShoppingBag className="inline -mt-1" /> &nbsp;
                {product.qtyType}
              </span>
              <p className="text-black mt-6 block">{product.description}</p>
              <div className="mb-6">
                {itemInCart && (
                  <Link
                    to="/cart"
                    className="underline text-sea-green-500 font-bold inline-block mt-2"
                  >
                    Checkout Cart &#8594;
                  </Link>
                )}
              </div>

              {itemInCart ? (
                <div className="flex justify-between items-center m-auto max-w-sm">
                  <button
                    onClick={() => removeFromCartHandler()}
                    className="bg-sea-green-500 py-1 px-4 rounded text-2xl text-white"
                  >
                    -
                  </button>
                  <span className="inline-block bg-sea-green-500 text-white py-2 px-4 rounded-full">
                    <FaShoppingBag className="inline -mt-1" /> &nbsp;
                    {itemInCart?.qty}
                  </span>
                  <button
                    onClick={() => addToCartHandler()}
                    className="bg-sea-green-500 py-1 px-4 rounded text-2xl text-white"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCartHandler()}
                  className="rounded-full w-full py-4 my-3 bg-sea-green-500 text-white text-xl font-display focus:outline-none"
                >
                  <FaCartPlus className="inline -mt-1" /> Add to Basket
                </button>
              )}
            </div>
          </div>
          <div className="my-6">
            <span className="font-display text-gray-500 mb-1 block text-xl">
              Related Items
            </span>
            <RelatedProducts />
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ProductScreen);

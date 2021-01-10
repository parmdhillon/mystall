import React from 'react';
import {
  FaPlus,
  FaShoppingBag,
  FaShoppingBasket,
  FaTimes,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import ImageLazy from '../components/ImageLazy/ImageLazy';

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice =
    cartItems?.length &&
    Number(
      cartItems
        .map((item) => (item.price * item.qty).toFixed(2))
        .reduce(
          (accumulator, currentValue) => accumulator * 1 + currentValue * 1
        )
    );
  const tax = totalPrice && (Number(totalPrice) * 13) / 100;
  const grandTotal = totalPrice && Number(totalPrice) + 11 + Number(tax);

  const dispatch = useDispatch();

  const addToCartHandler = (id) => {
    const itemInCart = cartItems?.length
      ? cartItems.find((item) => item.id === id)
      : false;

    const qtyMore = itemInCart?.qty + 1 || 1;
    dispatch(addToCart(id, qtyMore));
  };

  const removeFromCartHandler = (id) => {
    const itemInCart = cartItems?.length
      ? cartItems.find((item) => item.id === id)
      : false;
    const qtyLess = itemInCart?.qty - 1 || 0;
    if (qtyLess === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart(id, qtyLess)); //Update Cart Items // qtyLess is number items to be set
    }
  };
  if (!cartItems?.length)
    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <FaShoppingBasket className="text-5xl text-gray-400 my-2" />
        <span className="font-display text-2xl text-gray-400">Cart Empty</span>
        <Link
          to="/"
          className="text-xl my-4 bg-sea-green-500 text-white rounded-full py-3 px-8"
        >
          Add Grocries <FaPlus className="inline -mt-1" />
        </Link>
      </div>
    );

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <h1 className="my-5 font-display text-2xl text-gray-500">
        <FaShoppingBasket className="inline -mt-1" /> Your Cart
      </h1>
      <div className="block md:flex justify-start items-start">
        <div className="w-full md:w-1/2 md:inline-block md:border-r md:border-gray-200 md:border-solid">
          {cartItems.map((product, index) => (
            <div
              key={index}
              className="w-full my-8 flex justify-center items-center"
            >
              <div className="w-1/4 inline-block align-middle bg-white rounded-xl shadow p-1">
                <div className="w-full h-20 flex flex-col justify-center items-center">
                  <ImageLazy src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="w-3/4 inline-block px-5">
                <span className="font-bold truncate">{product.name}</span>
                <div className="flex justify-between items-center mt-2">
                  <FaShoppingBag className="inline-block text-gray-300 mr-3" />
                  <div className="flex justify-between items-center w-20 bg-gray-200 px-3 rounded-full">
                    <button
                      onClick={() => removeFromCartHandler(product.id)}
                      className="text-gray-400 font-bold text-xl outline-none border-none focus:outline-none"
                    >
                      -
                    </button>
                    <span className="inline-block text-gray-600 font-bold">
                      {product.qty}
                    </span>
                    <button
                      onClick={() => addToCartHandler(product.id)}
                      className="text-gray-400 font-bold text-xl outline-none border-none focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sea-green-500 font-bold inline-block px-2">
                    ${(product.qty * product.price).toFixed(2)}
                  </span>
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-gray-400 px-2"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 md:inline-block py-8 md:pl-8">
          <div className="flex justify-between font-bold my-1">
            <span>Sub Total</span>
            <span className="text-sea-green-500">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold my-1">
            <span>Delivery Fees</span>
            <span>$11.00</span>
          </div>
          <div className="flex justify-between font-bold my-1">
            <span>Tax (GST/PST)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 border-solid my-5"></div>
          <div className="flex justify-between font-display text-2xl">
            <span>Total</span>
            <span className="text-sea-green-500">${grandTotal.toFixed(2)}</span>
          </div>
          <div className="my-5 w-full">
            <div className="w-1/2 inline-block pr-2">
              <Link
                to="/"
                className="w-full py-2 border-2 rounded-2xl border-sea-green-500 inline-block text-center bg-sea-green-100 font-bold text-sea-green-500"
              >
                Shop More
              </Link>
            </div>
            <div className="w-1/2 inline-block pl-2">
              <Link
                to="/checkout"
                className="w-full py-2  border-2 rounded-2xl border-sea-green-500 inline-block text-center bg-sea-green-500 font-bold text-sea-green-900"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

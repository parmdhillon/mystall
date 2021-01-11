import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

const CheckoutScreen = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <FaShoppingBasket className="text-7xl text-sea-green-500" />
      <h1 className="text-gray-500 text-3xl text-center">
        Thanks for <br/><span className="font-display">Shopping with us</span>
      </h1>
    </div>
  );
};

export default CheckoutScreen;

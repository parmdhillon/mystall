import React from 'react';
import ImageLazy from '../ImageLazy/ImageLazy';
const HomeBanner = () => {
  return (
    <div className="w-full bg-sea-green-500 rounded-2xl p-4 mt-5 sm:mt-2 flex flex-col sm:flex-row sm:justify-between shadow-md">
      <div>
        <div className="text-center sm:text-left">
          <h1 className="text-white font-display text-2xl">Fresh Groceries</h1>
          <span className="text-white text-2xl">
            at your
            <br />
            Doorstep
          </span>
        </div>
        <span className="text-sea-green-700 hidden sm:block my-5 text-sm">
          Easy & Smart Grocery
        </span>
        <button className="hidden sm:block bg-white rounded-full py-2 px-4 text-xs text-sea-green-500 font-bold">
          Browse Groceries
        </button>
      </div>
      <div className="hidden sm:block bg-white w-40 overflow-hidden rounded-2xl">
        <ImageLazy src="/img/mainBanner.png" alt="Veggies"/>
      </div>
    </div>
  );
};

export default HomeBanner;

import React from 'react';
import Products from '../components/Products/Products';

const SearchScreen = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const keyword = params.get('q');
  return (
    <div className="max-w-screen-lg mx-auto px-5 overflow-hidden">
      <Products keyword={keyword} />
    </div>
  );
};

export default SearchScreen;

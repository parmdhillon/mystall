import React from 'react';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';

const SearchScreen = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const keyword = params.get('q');
  return (
    <div className="max-w-screen-lg mx-auto px-5 py-1 overflow-hidden">
      {keyword ? <Products keyword={keyword} /> : <Search mobile />}
    </div>
  );
};

export default SearchScreen;

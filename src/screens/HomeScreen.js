import React from 'react';
import BannerCards from '../components/BannerCard/BannerCards';
import Categories from '../components/Categories/Categories';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Products from '../components/Products/Products';
import Search from '../components/Search/Search';

const HomeScreen = () => {
  return (
    <div className="max-w-screen-lg min-h-screen mx-auto px-5">
      <Search mobile />
      <HomeBanner />
      <BannerCards />
      <Categories />
      <Products isHome paginate />
    </div>
  );
};

export default HomeScreen;

import React from 'react';
import BannerCards from '../components/BannerCard/BannerCards';
import Categories from '../components/Categories/Categories';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Search from '../components/Search/Search';

const HomeScreen = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Search mobile />
      <HomeBanner />
      <BannerCards />
      <Categories />
    </div>
  );
};

export default HomeScreen;

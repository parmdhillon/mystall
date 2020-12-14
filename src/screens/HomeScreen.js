import React from 'react';
import { MobileView } from 'react-device-detect';
import BannerCards from '../components/BannerCard/BannerCards';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Search from '../components/Search/Search';

const HomeScreen = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Search mobile />
      <HomeBanner />
      <BannerCards />
    </div>
  );
};

export default HomeScreen;

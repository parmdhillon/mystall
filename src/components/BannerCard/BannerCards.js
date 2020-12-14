import React from 'react';
import MobileSlick from '../utils/MobileSlick/MobileSlick';
import BannerCard from './BannerCard';

const BannerCards = () => {
  return (
    <div className="my-5">
      <MobileSlick>
        <BannerCard bg="#FFEBDA"></BannerCard>
        <BannerCard bg="#DAEFFF"></BannerCard>
        <BannerCard bg="#DAFFE3"></BannerCard>
      </MobileSlick>
    </div>
  );
};

export default BannerCards;

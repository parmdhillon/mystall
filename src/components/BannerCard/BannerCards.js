import React from 'react';
import MobileSlick from '../utils/MobileSlick/MobileSlick';
import BannerCard from './BannerCard';
import banner1 from '../../assets/img/banners/banner1.png';
import banner2 from '../../assets/img/banners/banner2.png';
import banner3 from '../../assets/img/banners/banner3.png';
import banner4 from '../../assets/img/banners/banner4.png';

const BannerCards = () => {
  return (
    <div className="my-5">
      <MobileSlick>
        <BannerCard bg="#FFEBDA" img={banner1}>
          <span style={{color:'#F59A4D'}}className="font-bold">30% OFF</span>
          <span className="text-gray-600 block mt-3">
            <span className="text-xs">SELECTED</span>
            <span className="block font-bold text-lg">Fruits</span>
          </span>
        </BannerCard>
        <BannerCard bg="#DAEFFF" img={banner2}>
        <span style={{color:'#4D85F5'}}className="font-bold">10% OFF</span>
          <span className="text-gray-600 block mt-3">
            <span className="text-xs">SELECTED</span>
            <span className="block font-bold text-lg">Veggies</span>
          </span>
        </BannerCard>
        <BannerCard bg="#DAFFE3" img={banner3}>
        <span style={{color:'#00CD32'}}className="font-bold">15% OFF</span>
          <span className="text-gray-600 block mt-3">
            <span className="text-xs">SPECIAL</span>
            <span className="block font-bold text-lg">DEALS</span>
          </span>
        </BannerCard>
        <BannerCard bg="#EFDAFF" img={banner4}>
        <span style={{color:'#CF4DF5'}}className="font-bold">10% OFF</span>
          <span className="text-gray-600 block mt-3">
            <span className="text-xs">FRESH</span>
            <span className="block font-bold text-lg">Butter</span>
          </span>
        </BannerCard>
      </MobileSlick>
    </div>
  );
};

export default BannerCards;

import React from 'react';

const BannerCard = ({ bg, img, children }) => {
  return (
    <div className="px-3">
      <div
        className={`flex justify-between items-center w-full h-28 mx rounded-2xl px-4 my-1 overflow-hidden shadow`}
        style={{ background: `${bg}` }}
      >
        <div className="flex flex-col">{children}</div>
        <div className="w-2/4">
          <img src={img} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

import React from 'react';

const BannerCard = ({ bg }) => {
  return (
    <div className="px-3">
      <div
        className={`w-full h-28 mx rounded-2xl px-4 py-2`}
        style={{ background: `${bg}` }}
      >
        <h1>Parm</h1>
      </div>
    </div>
  );
};

export default BannerCard;

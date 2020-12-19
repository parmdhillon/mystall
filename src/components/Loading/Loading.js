import React from 'react';
import './Loading.css';
const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

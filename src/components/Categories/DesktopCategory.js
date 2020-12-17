import React from 'react';

const DesktopCategory = ({ setBg, setCat, selected, name,id }) => {
  const selectedStyle = 'text-white';
  return (
    <div
      onClick={(e) => {
        setBg(e.target);
        setCat(name,id);
      }}
      className={`text-center transition-all duration-500 font-bold mx-2 py-1 ${
        selected && selectedStyle
      }`}
    >
      {name}
    </div>
  );
};

export default DesktopCategory;

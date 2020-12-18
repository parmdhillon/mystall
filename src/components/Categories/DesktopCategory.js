import React from 'react';

const DesktopCategory = ({ setBg, setCat, selected, name, id, index }) => {
  const selectedStyle = `text-white ${
    index === 0 && `bg-sea-green-500 rounded-full`
  }`;
  return (
    <div
      onClick={(e) => {
        setBg(e.target);
        setCat(name, id);
      }}
      className={`text-center transition-all font-bold mx-2 py-1 cursor-pointer hover:bg-sea-green-200 rounded-full ${
        selected && selectedStyle
      }`}
    >
      {name}
    </div>
  );
};

export default DesktopCategory;

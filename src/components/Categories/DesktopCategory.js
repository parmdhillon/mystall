import React from 'react';

const DesktopCategory = ({ setCat, selected, name }) => {
  const selectedStyle = 'bg-sea-green-500 rounded-full text-white align-middle';
  return (
    <div
      onClick={() => {
        setCat(name);
      }}
      className={`text-center font-bold mx-2 py-1 ${selected && selectedStyle}`}
    >
      {name}
    </div>
  );
};

export default DesktopCategory;

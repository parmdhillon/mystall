import React from 'react';

const DesktopCategory = ({ selected,children }) => {
  const selectedStyle = 'bg-sea-green-500 rounded-full text-white align-middle';
  return (
    <div className={`text-center font-bold py-1 ${selected && selectedStyle}`}>
      {children}
    </div>
  );
};

export default DesktopCategory;

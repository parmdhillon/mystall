import React, { useEffect, useRef } from 'react';

const DesktopCategory = ({ setBg, setCat, selected, name, id }) => {
  const selectedStyle = useRef(
    `text-white ${selected && `bg-sea-green-500 rounded-full`}`
  );
  useEffect(() => {
    console.log('useeffect');
    // selectedStyle.current = 'text-white bg-red-500';
  }, []);
  return (
    <div
      onClick={(e) => {
        setBg(e.target);
        setCat(name, id);
      }}
      className={`text-center transition-all font-bold mx-2 py-1 cursor-pointer ${
        selected && selectedStyle.current
      }`}
    >
      {name}
    </div>
  );
};

export default DesktopCategory;

import React from 'react';

const MenuButton = ({ toggleMenuHandler, menuIsOpen }) => {
  return (
    <div className="w-6 my-2 md:hidden" onClick={toggleMenuHandler}>
      <span
        className={`${
          menuIsOpen && `transform translate-y-2 rotate-45`
        } transition duration-500 h-1 w-full block rounded-full bg-gray-300 my-1`}
      ></span>
      <span
        className={`${
          menuIsOpen && `opacity-0`
        } transition duration-500 h-1 w-full block rounded-full bg-gray-300 my-1`}
      ></span>
      <span
        className={`${
          menuIsOpen && `transform -translate-y-2 -rotate-45`
        } transition duration-500 h-1 w-full block rounded-full bg-gray-300 my-1`}
      ></span>
    </div>
  );
};

export default MenuButton;

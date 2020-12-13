import React, { useState } from 'react';
import Logo from '../assets/img/Logo.png';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <header className="w-full px-5 py-3">
        <nav className="w-full flex flex-row justify-between items-center">
          <div className="w-full md:w-auto flex flex-row justify-between">
            <img src={Logo} className="w-28 sm:w-32 h-9 md:h-10" alt="Logo" />
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

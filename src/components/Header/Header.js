import React, { useState } from 'react';
import Logo from '../../assets/img/Logo.png';
import './Header.css';
import { FaClipboardList, FaShoppingCart, FaUser } from 'react-icons/fa';

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
          <div
            className={`${
              menuIsOpen && `scale-y-100`
            } transform origin-top duration-300 scale-y-0 z-10 md:scale-y-100 transition-all absolute m-auto w-11/12 top-16 rounded-2xl flex flex-col p-4 bg-sea-green-700 md:static md:w-auto md:m-0 md:p-0 md:flex-row md:bg-opacity-0 md:justify-end`}
          >
            <a
              className="font-bold block p-2 text-white text-left rounded-3xl hover:bg-sea-green-600 md:text-black md:px-6  md:hover:bg-opacity-0 md:rounded-none border-b-4 border-solid border-gray-200 border-opacity-0 md:hover:border-opacity-100"
              href="/"
            >
              <FaUser className="inline-block align-middle text-sea-green-900 md:hidden" />{' '}
              <span className="align-middle inline-block px-2">Account</span>
            </a>
            <a
              className="font-bold block p-2 text-white text-left rounded-3xl hover:bg-sea-green-600 md:text-black md:px-6  md:hover:bg-opacity-0 md:rounded-none border-b-4 border-solid border-gray-200 border-opacity-0 md:hover:border-opacity-100"
              href="/"
            >
              <FaClipboardList className="inline-block align-middle text-sea-green-900 md:hidden" />{' '}
              <span className="align-middle inline-block px-2">Orders</span>
            </a>
            <a
              className="font-bold badge block p-2 text-white text-left rounded-3xl hover:bg-sea-green-600 md:text-black md:px-6  md:hover:bg-opacity-0 md:rounded-none border-b-4 border-solid border-gray-200 border-opacity-0 md:hover:border-opacity-100"
              href="/"
              data-badge="27"
            >
              <FaShoppingCart className="inline-block align-middle text-sea-green-900 md:hidden" />{' '}
              <span className="align-middle inline-block px-2">Cart</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

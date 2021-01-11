import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/img/Logo.png';
import './Header.css';
import { FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import MenuButton from '../utils/MenuButton';
import NavItem from '../utils/NavItem';
import { IconContext } from 'react-icons';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const menu = useRef(null);
  const toggleMenuHandler = (e) => {
    if (e.target === menu.current) return;
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('click', toggleMenuHandler);
    }
    return () => {
      document.removeEventListener('click', toggleMenuHandler);
    };
  });

  return (
    <IconContext.Provider
      value={{
        className: 'inline-block align-middle text-sea-green-900 md:hidden',
      }}
    >
      <header className="w-full px-5 py-3">
        <nav className="w-full flex flex-row justify-between items-center">
          <div className="w-full md:w-auto flex flex-row justify-between items-center">
            <Link to="/">
              <img src={Logo} className="w-auto h-8 sm:h-10" alt="Logo" />
            </Link>
            <Search />
            <div className="flex md:hidden items-center">
              <Link to="/search">
                <FaSearch
                  style={{ color: '#D1D5DB' }}
                  className="inline-block text-xl mr-6"
                />
              </Link>
              <Link to="/cart">
                <div className="badge top" data-badge={cartItems.length}>
                  <FaShoppingCart
                    style={{ color: '#D1D5DB' }}
                    className="inline-block text-2xl mr-8 relative"
                  />
                </div>
              </Link>
              <MenuButton
                toggleMenuHandler={toggleMenuHandler}
                menuIsOpen={menuIsOpen}
              />
            </div>
          </div>
          <div
            ref={menu}
            className={`${
              menuIsOpen && `scale-y-100`
            } transform origin-top duration-300 scale-y-0 z-20 md:scale-y-100 transition-all absolute m-auto w-11/12 top-16 rounded-2xl flex flex-col p-4 bg-sea-green-700 md:static md:w-auto md:m-0 md:p-0 md:flex-row md:bg-opacity-0 md:justify-end`}
          >
            <NavItem link="/" icon={<FaHome />} name="Grocery" />
            <NavItem
              link="/cart"
              icon={<FaShoppingCart />}
              name="Cart"
              badge={cartItems.length}
            />
          </div>
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default Header;

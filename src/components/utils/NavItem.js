import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ link, icon, name, badge }) => {
  return (
    <Link
      to={link}
      className={`${
        badge && `badge`
      } font-bold block p-2 text-white text-left rounded-3xl hover:bg-sea-green-600 md:text-black md:px-4 lg:px-6  md:hover:bg-opacity-0 md:rounded-none border-b-4 border-solid border-gray-200 border-opacity-0 md:hover:border-opacity-100`}
      data-badge={badge && badge}
    >
      {icon}
      <span className="align-middle inline-block px-2">{name}</span>
    </Link>
  );
};

export default NavItem;

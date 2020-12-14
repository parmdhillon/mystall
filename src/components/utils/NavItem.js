import React from 'react';

const NavItem = ({link,icon,name,badge}) => {
  return (
    <a
      className={`${badge && `badge`} font-bold block p-2 text-white text-left rounded-3xl hover:bg-sea-green-600 md:text-black md:px-4 lg:px-6  md:hover:bg-opacity-0 md:rounded-none border-b-4 border-solid border-gray-200 border-opacity-0 md:hover:border-opacity-100`}
      href={link}
      data-badge={badge && badge}
    >
     {icon}
      <span className="align-middle inline-block px-2">{name}</span>
    </a>
  );
};

export default NavItem;

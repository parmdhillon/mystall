import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({mobile}) => {
    return (
        <div className={`${mobile ? `flex sm:hidden`:`hidden`} sm:flex bg-white p-1 pl-2 justify-between items-center rounded-full sm:ml-0 md:ml-4 lg:ml-10 shadow`}>
            <FaSearch style={{color:'#BBC4C3',display:'block'}}/>
            <input type="text" className={`${mobile && `flex-1`} outline-none ml-2`}/>
            <button className="bg-sea-green-500 text-white py-2 px-4 rounded-full">Search</button>
        </div>
    );
};

export default Search;
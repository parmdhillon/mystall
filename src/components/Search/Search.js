import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';

const Search = ({ mobile, history }) => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    history.push(`/search?q=${encodeURI(data.keyword)}`);
  };
  return (
    <div
      className={`${
        mobile ? `flex sm:hidden` : `hidden`
      } sm:flex bg-white p-1 pl-2 justify-between items-center rounded-full sm:ml-0 md:ml-4 lg:ml-10 shadow`}
    >
      <FaSearch style={{ color: '#BBC4C3', display: 'block' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="keyword"
          ref={register({ required: true })}
          className={`${mobile && `flex-1`} outline-none ml-2`}
        />
        <button
          type="submit"
          className="bg-sea-green-500 text-white py-2 px-4 rounded-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default withRouter(Search);

import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorBox = ({ showBackToHome, message }) => {
  return (
    <div className="font-bold my-4 text-xl flex flex-col justify-center items-center">
      <FaExclamationTriangle /> &nbsp;{message}
      {showBackToHome && (
        <div className="block text-center my-3">
          <Link
            to="/"
            className=" px-3 py-2 rounded-full bg-sea-green-500 text-white font-bold"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorBox;

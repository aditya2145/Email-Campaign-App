import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

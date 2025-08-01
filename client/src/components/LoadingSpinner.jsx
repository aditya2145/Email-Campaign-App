import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full p-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;

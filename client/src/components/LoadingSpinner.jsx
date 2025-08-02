import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm text-gray-500">
        Please wait, fetching data from backend...
        <br />
        Since we're using <strong>Render</strong> for backend hosting (free tier),
        it might take <strong>10–15 seconds</strong> if the server is waking up.
      </p>
    </div>
  );
};

export default LoadingSpinner;

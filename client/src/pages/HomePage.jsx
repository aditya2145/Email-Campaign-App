import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4">
        Automate Your <span className="text-blue-600">Email Campaigns</span>
      </h1>

      <p className="text-gray-500 text-lg md:text-xl text-center max-w-xl mb-10">
        Build smart, behavior-based email flows to engage users effectively.
        Create, track, and improve campaigns effortlessly.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/create"
          className="bg-blue-600 text-white text-md px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          🚀 Create Campaign
        </Link>
        <Link
          to="/campaigns"
          className="bg-gray-100 text-blue-600 text-md px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          📊 View Campaigns
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

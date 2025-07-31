import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard';


const AllCampaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log("BASE:", import.meta.env.VITE_BASE_URL);
    const fetchAllCampaigns = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/campaign/`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Something went wrong');
        }
        setAllCampaigns(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAllCampaigns();
  }, []);

  const filteredCampaigns = allCampaigns?.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-6 mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
        📋 All Email Campaigns
      </h1>

      { 
        error && 
        <div className="text-red-500 text-center">{error}</div>
      }

      {
        allCampaigns.length === 0 && !error && 
        (
          <div className="text-gray-600 text-center">No campaigns available right now.</div>
        )
      }

      {
        allCampaigns.length !== 0 && !error && 
        (
          <div className="flex items-center gap-3">
            <label htmlFor="searchbar" className="text-gray-600 text-sm">
              🔍 Search by campaign name
            </label>
            <input
              id="searchbar"
              type="text"
              className="w-full sm:w-64 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Type campaign name..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )
      }

      {
        filteredCampaigns.length === 0 && searchTerm && 
        (
          <div className="text-center text-gray-500 italic">No campaigns match your search.</div>
        )
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {
          filteredCampaigns.map((campaign) => (
            <div key={campaign._id}>
              <CampaignCard campaign={campaign} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AllCampaigns;

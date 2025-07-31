import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserProgressCard from '../components/UserProgressCard';

const TrackCampaign = () => {
  const { campaignId } = useParams();
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState([]);
  const [activeFilter, setActiveFilter] = useState('pending');
  const navigate = useNavigate();
  const pendingCount = progress.filter(user => user.status === 'pending').length;
  const interestedCount = progress.filter(user => user.status === 'interested').length;
  const notInterestedCount = progress.filter(user => user.status === 'not_interested').length;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchCampaignProgress = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/campaign/${campaignId}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setProgress(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCampaignProgress();
  }, [campaignId]);

  const filteredProgress = progress.filter(user => user.status === activeFilter)

  return (
    <div className="w-full flex flex-col gap-2 mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mb-6 text-left text-blue-600 font-medium hover:underline"
      >
        ← Go Back
      </button>

      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">📈 Campaign Progress</h1>

      {error && <div className="text-red-500 text-center">{error}</div>}

      { 
        progress.length === 0 && 
        (
          <div className="text-center text-gray-600">No progress data found.</div>
        )
      }

      {progress.length !== 0 && !error && (
        <div className="flex gap-3 justify-center mb-6">
          <button
            onClick={() => setActiveFilter('pending')}
            title="Users who haven't completed the campaign yet"
            className={`cursor-pointer px-4 py-2 border rounded transition font-medium 
        ${activeFilter === 'pending'
                ? 'bg-yellow-400 text-yellow-900 border-yellow-500'
                : 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200'
              }`}
          >
            ⏳ Pending ({pendingCount})
          </button>

          <button
            onClick={() => setActiveFilter('interested')}
            title="Users who showed interest by opening or interacting"
            className={`cursor-pointer px-4 py-2 border rounded transition font-medium 
        ${activeFilter === 'interested'
                ? 'bg-green-400 text-green-900 border-green-500'
                : 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200'
              }`}
          >
            ✅ Interested ({interestedCount})
          </button>

          <button
            onClick={() => setActiveFilter('not_interested')}
            title="Users who did not engage with the campaign"
            className={`cursor-pointer px-4 py-2 border rounded transition font-medium 
        ${activeFilter === 'not_interested'
                ? 'bg-red-400 text-red-900 border-red-500'
                : 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200'
              }`}
          >
            ❌ Not Interested ({notInterestedCount})
          </button>
        </div>
      )}

      {filteredProgress.length === 0 && !error && (
        <div className="text-center text-gray-600 italic">
          {activeFilter === 'pending' && '📭 No users are currently pending.'}
          {activeFilter === 'interested' && '✅ No users have shown interest yet.'}
          {activeFilter === 'not_interested' && '❌ No users marked as not interested.'}
        </div>
      )}


      {filteredProgress.length !== 0 && !error && (
        <div className="text-center text-gray-600 mb-4 font-medium">
          👥 Filtered Audience: {filteredProgress.length}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {
          filteredProgress.map((user) => (
            <div key={user._id}>
              <UserProgressCard user={user} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TrackCampaign;

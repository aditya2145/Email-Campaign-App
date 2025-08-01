import React, { useState } from 'react';
import { createCampaign } from '../services/campaignServices';
import emailCampaignSteps from '../data/emailCampaignSteps';
import emailStepDescription from '../data/emailStepDescription';
import toast from 'react-hot-toast';

const CreateEmailCampaign = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSteps, setShowSteps] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [steps] = useState(emailCampaignSteps);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleUserChange = (index, value) => {
    const updated = [...users];
    updated[index] = value;
    setUsers(updated);
  };

  const handleAddEmail = () => {
    if (!email) return;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
    setUsers([...users, email]);
    setEmail('');
    setError(null);
  };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!name || !description || users.length === 0) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const data = await createCampaign({ name, description, users, steps });
      console.log(data);
      setName('');
      setDescription('');
      setUsers([]);
      toast.success('Campaign Created Successfully!');
    } catch (error) {
      console.error(error.message);
      setError(error.message || "Something went wrong");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-6 bg-white flex justify-center items-center">
      <div className="w-full max-w-xl bg-white m-auto shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          📧 Create Email Campaign
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleCreateCampaign}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Campaign Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="e.g. Welcome Flow"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Short summary about this campaign..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Target Emails
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="Enter email to add"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="button"
                onClick={handleAddEmail}
                className="text-sm px-3 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition"
              >
                + Add
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {users.map((email, i) => (
                <input
                  key={i}
                  type="email"
                  placeholder={`Email ${i + 1}`}
                  className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  value={email}
                  onChange={(e) => handleUserChange(i, e.target.value)}
                  required
                />
              ))}
            </div>
          </div>

          {error && <div className="text-red-600 text-sm mt-1">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {loading ? 'Creating...' : 'Create Campaign'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowSteps((prev) => !prev)}
            className="text-indigo-700 hover:underline font-medium"
          >
            {showSteps ? '🔽 Hide Campaign Steps' : '📋 View Steps in This Campaign'}
          </button>
        </div>

        {showSteps && (
          <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              🔄 Steps Overview
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-700">
              {Object.entries(emailStepDescription).map(([key, desc]) => (
                <li key={key}>
                  {desc}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEmailCampaign;
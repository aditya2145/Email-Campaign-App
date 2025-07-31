import React from 'react'
import { Link } from 'react-router-dom'

const CampaignCard = ({campaign}) => {
    return (
        <div
            key={campaign._id}
            className="flex flex-col gap-2 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
        >
            <h3 className="text-lg font-semibold text-blue-600 mb-1">{campaign.name}</h3>
            <p className="text-gray-700 text-sm line-clamp-4">{campaign.description}</p>
            <p className="text-sm text-gray-500">
                Created At: {new Date(campaign.createdAt).toLocaleString()}
            </p>
            <Link
                to={`/campaign/${campaign._id}`}
                className="mt-2 px-3 w-fit py-1 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
                Track Progress
            </Link>
        </div>
    )
}

export default CampaignCard
const Campaign = require("../models/campaign.model");
const CampaignProgress = require("../models/campaignProgress.model");
const { asyncHandler } = require("../utils/asyncHandler");
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');

const createCampaignController = asyncHandler(async(req, res) => {
    const { name, description, schema, users } = req.body;

    const campaign = await Campaign.create({
        name,
        description,
        schema,
    });

    for(const user of users) {
        await CampaignProgress.create({
            campaignId: campaign._id,
            email: user,
            currentStep: schema[0].id,
            lastActionAt: new Date(),
        });
    }

    res.status(201).json(new ApiResponse(201, campaign._id, "Campaign Created"));
});

const getAllCampaignsController = asyncHandler(async(req, res) => {
    const campaigns = await Campaign.find();

    if(!campaigns) {
        throw new ApiError(404, "No campaigns currently.");
    }

    res.status(200).json(new ApiResponse(200, campaigns, "All Campaigns fetched successfully"));
});

const trackCampaignProgressController = asyncHandler(async(req, res) => {
    const { campaignId } = req.params;

    const progresses = await CampaignProgress.find({ campaignId });

    if(!progresses) {
        throw new ApiError(404, "Campaign Not Found.");
    }

    res.status(200).json(new ApiResponse(200, progresses, "Campaign Progress fetched successfully."));
});

module.exports = {
    createCampaignController,
    getAllCampaignsController,
    trackCampaignProgressController,
}
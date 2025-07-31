const CampaignProgress = require("../models/campaignProgress.model");
const { asyncHandler } = require("../utils/asyncHandler");

const trackEmailOpen = asyncHandler(async(req, res) => {
    const { progressId, stepId } = req.params;

    await CampaignProgress.findByIdAndUpdate(
        progressId,
        { $addToSet: { opened: stepId } },
    );

    const pixel = Buffer.from(
      "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
      "base64"
    );
    res.set("Content-Type", "image/gif");
    res.send(pixel);
});

module.exports = {
    trackEmailOpen,
}
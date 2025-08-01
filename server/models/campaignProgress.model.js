const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign", required: true },
  email: { type: String, required: true },
  currentStep: { type: String },
  opened: { type: Boolean, default: false },
  status: { type: String, default: 'pending' },
  completed: { type: Boolean, default: false },
  lastActionAt: { type: Date, default: Date.now }
}); 

const CampaignProgress = mongoose.model("CampaignProgress", progressSchema);

module.exports = CampaignProgress;

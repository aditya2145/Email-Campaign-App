const express = require('express');
const { createCampaignController, getAllCampaignsController, trackCampaignProgressController } = require('../controllers/campaign.controller.js');

const router = express.Router();

router.post('/create', createCampaignController);
router.get('/', getAllCampaignsController);
router.get('/:campaignId', trackCampaignProgressController);

module.exports = router;
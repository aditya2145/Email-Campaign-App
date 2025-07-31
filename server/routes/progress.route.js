const express = require('express');
const { trackEmailOpen } = require('../controllers/progress.controller');

const router = express.Router();

router.get('/open/:progressId/:stepId', trackEmailOpen);

module.exports = router;
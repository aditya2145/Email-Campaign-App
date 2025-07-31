const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler.js');
const campaignRoute = require('./routes/campaign.route.js');
const progressRoute = require('./routes/progress.route.js');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'https://email-campaign-app.vercel.app' }));

app.use('/api/campaign', campaignRoute);
app.use('/api/progress', progressRoute);

app.use(errorHandler);

module.exports = app;
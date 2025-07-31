const nodemailer = require('nodemailer');
const CampaignProgress = require('../models/campaignProgress.model');
const Campaign = require('../models/campaign.model');
const { asyncHandler } = require('./asyncHandler');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

const emailRunner = asyncHandler(async(req, res) => {
    const progresses = await CampaignProgress.find({ completed: false });

    for(const progress of progresses) {
        const campaign = await Campaign.findById(progress.campaignId);

        if(!campaign) {
            continue;
        }

        const step = campaign.schema.find(s => s.id === progress.currentStep);
        if(!step) {
            continue;
        }

        if(step.type === 'email') {
            await transporter.sendMail({
                to: progress.email,
                from: process.env.EMAIL,
                subject: step.heading || "Campaign Email",
                html: `
                    <p>${step.template}</p>
                    <img src="${process.env.BASE_URL}/api/progress/open/${progress._id}/${step.id}" width="1" height="1" />
                `
            });

            progress.currentStep = step.next;
            progress.lastActionAt = new Date();
            if(!progress.currentStep) {
                progress.status = 'interested';
                progress.completed = true;
            }
            await progress.save();
        }

        if(step.type === "wait") {
            const diff = (Date.now() - new Date(progress.lastActionAt)) / (1000*60*60*24);
            if(diff >= step.days) {
                progress.currentStep = step.next;
                await progress.save();
            }
        }

        if(step.type === "condition") {
            let goTo = step.ifFalse;
            if(step.condition === "opened" && progress.opened.includes(step.id)) {
                goTo = step.ifTrue;
            }

            progress.currentStep = goTo || null;
            if(!goTo) {
                progress.status = 'not_interested';
                progress.completed = true;
            }
            await progress.save();
        }
    }
});

module.exports = {
    emailRunner,
}
const emailCampaignSteps = [
    {
        id: 'step1',
        type: 'email',
        template: `👋 Welcome aboard!<br><br>
        We're thrilled to have you join our community.<br>
        Discover tools, tips, and resources tailored just for you.<br><br>
        Start exploring now — your journey begins here! 🚀`,
        next: 'step2',
    },
    {
        id: 'step2',
        type: 'wait',
        days: 0.0013,
        next: 'step3',
    },
    {
        id: 'step3',
        type: 'condition',
        condition: 'opened',
        ifTrue: 'step4',
        ifFalse: 'step5',
    },
    {
        id: 'step4',
        type: 'email',
        template: `👏 Thanks for checking us out!<br><br>
        We hope you found something exciting. We're always adding new features and updates — stay tuned!<br><br>
        Got questions or feedback? We're just a reply away.`,
        next: null,
    },
    {
        id: 'step5',
        type: 'email',
        template: `Hey there! 👋<br><br>
      We noticed you haven't checked out our platform yet. 
      Don't miss out on what we have in store for you!<br><br>
      Click below and take the first step toward something amazing 🚀`,
        next: 'step6',
    },
    {
        id: 'step6',
        type: 'wait',
        days: 0.0013,
        next: 'step7',
    },
    {
        id: 'step7',
        type: 'condition',
        condition: 'opened',
        ifTrue: 'step4',
        ifFalse: null,
    },
];

export default emailCampaignSteps;
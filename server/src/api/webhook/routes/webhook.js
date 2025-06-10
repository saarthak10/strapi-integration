module.exports = {
   routes: [
    {
      method: 'POST',
      path: '/webhook-handler',
      handler: 'webhook.handle',
      config: {
        auth: false, // change to true if you want to secure it later
      },
    },
  ],
};

// src/api/webhook/controllers/webhook.js

module.exports = {
  async handle(ctx) {
    try {
      const body = ctx.request.body;
      // Example: Extract data from the incoming webhook payload
      const { eventType, entityId, message } = body;

      // Call the logs API internally to create a new log
      // await strapi.entityService.create('api::programs.programs', {
      //   data: {
      //     message: `[${eventType}] Entity ${entityId} triggered: ${message}`,
      //     meta: body,
      //   },
      // });
    // Emit to frontend via socket
    strapi.io.emit("webhook_event", {
      message: "Programs updated",
      timestamp: new Date(),
    });
    
    return ctx.send({ received: true });
    } catch (err) {
      console.error('Webhook error:', err);
      ctx.status = 500;
      ctx.send({ error: 'Webhook failed' });
    }
  },
};

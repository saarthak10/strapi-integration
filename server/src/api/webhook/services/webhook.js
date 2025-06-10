'use strict';

/**
 * webhook service
 */

module.exports = () => ({
  routes: require('./routes/webhook'),
  controllers: require('./controllers/webhook'),
});

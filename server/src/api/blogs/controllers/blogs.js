'use strict';

/**
 * blogs controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blogs.blogs');

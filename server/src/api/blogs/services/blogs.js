'use strict';

/**
 * blogs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogs.blogs');

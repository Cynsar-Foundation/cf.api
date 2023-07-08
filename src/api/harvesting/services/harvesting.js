'use strict';

/**
 * harvesting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::harvesting.harvesting');

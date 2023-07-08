'use strict';

/**
 * processing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processing.processing');

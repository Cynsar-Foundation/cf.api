'use strict';

/**
 * processing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::processing.processing');

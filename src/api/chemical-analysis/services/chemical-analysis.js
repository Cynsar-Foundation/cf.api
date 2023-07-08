'use strict';

/**
 * chemical-analysis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chemical-analysis.chemical-analysis');

'use strict';

/**
 * yarn-dealership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yarn-dealership.yarn-dealership');

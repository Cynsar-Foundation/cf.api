'use strict';

/**
 * yarn-supplier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yarn-supplier.yarn-supplier');

'use strict';

/**
 * spinning-of-yarn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spinning-of-yarn.spinning-of-yarn');

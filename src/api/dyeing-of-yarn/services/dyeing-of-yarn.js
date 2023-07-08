'use strict';

/**
 * dyeing-of-yarn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dyeing-of-yarn.dyeing-of-yarn');

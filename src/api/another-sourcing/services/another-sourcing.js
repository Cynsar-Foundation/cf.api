'use strict';

/**
 * another-sourcing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::another-sourcing.another-sourcing');

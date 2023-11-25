"use strict";

/**
 * guest service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::guest.guest", ({ strapi }) => ({
  // async test(userId, params = {}) {
  //   console.log("guest service");
  // },
}));

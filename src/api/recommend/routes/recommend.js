"use strict";

/**
 * recommend router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::recommend.recommend');

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home",
      handler: "recommend.homeResources",
      config: {
        // auth: false,
      },
    },
  ],
};

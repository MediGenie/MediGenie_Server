"use strict";

/**
 * guest router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::guest.guest", {
//   prefix: "",
//   only: ["find"],
//   config: {
//     find: {
//       auth: false,
//     },
//   },
// });

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/guests/merge",
      handler: "guest.merge",
      config: {},
    },
    {
      method: "POST",
      path: "/guests/new",
      handler: "guest.new",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/guests/me",
      handler: "guest.update",
      config: {},
    },
    {
      method: "GET",
      path: "/guests/me",
      handler: "guest.me",
      config: {},
    },
  ],
};

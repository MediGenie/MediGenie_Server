"use strict";

/**
 * diagnosis router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::diagnosis.diagnosis');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/diagnosis/:diagnosisId",
      handler: "diagnosis.new",
      config: {},
    },
    {
      method: "POST",
      path: "/diagnosis/:diagnosisId/ai",
      handler: "diagnosis.requestChatGPT",
      config: {},
    },
    {
      method: "GET",
      path: "/stream",
      handler: "diagnosis.testStream",
      config: {},
    },
    {
      method: "POST",
      path: "/stream",
      handler: "diagnosis.testStream",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/me/diagnosis",
      handler: "diagnosis.history",
      config: {},
    },
  ],
};

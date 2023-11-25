"use strict";

/**
 * family-member router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::family-member.family-member');
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/family/members/add",
      handler: "family-member.addMember",
      config: {},
    },
    {
      method: "GET",
      path: "/family/members",
      handler: "family-member.getMembers",
      config: {},
    },
    {
      method: "GET",
      path: "/family/members/:memberId",
      handler: "family-member.getMember",
      config: {},
    },
  ],
};

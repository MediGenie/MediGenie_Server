"use strict";

/**
 * family-member service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::family-member.family-member",
  ({ strapi }) => ({
    async getMemberById(user, memberId) {
      return await strapi.db.query("api::family-member.family-member").findOne({
        where: { id: memberId, user: user },
        select: ["id", "name", "birthDate", "type", "gender"],
        populate: {
          user: {
            select: ["id", "username", "email"],
          },
        },
      });
    },
    async getMembers(user) {
      return await strapi.db
        .query("api::family-member.family-member")
        .findMany({
          where: { user },
          select: ["id", "name", "birthDate", "type", "gender"],
          // populate: {
          //   user: {
          //     select: ["id", "username", "email", "ageCategory", "gender"],
          //   },
          // },
        });
    },
    async createMember(params) {
      console.log("params :>> ", params);
      return await strapi.entityService.create(
        "api::family-member.family-member",
        {
          data: params,
        }
      );
    },
  })
);

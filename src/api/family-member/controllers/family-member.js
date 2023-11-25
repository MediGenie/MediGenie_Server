"use strict";

/**
 * family-member controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { logger } = require("../../../utils/winston");

module.exports = createCoreController(
  "api::family-member.family-member",
  ({ strapi }) => ({
    async addMember(ctx, next) {
      try {
        const { method, url } = ctx.request;
        logger.info(`${method} ${url}`);
        const { body } = ctx.request;
        logger.info("body :>> ", body);
        const { user } = ctx.state;
        logger.info("user :>> ", user);

        const { type, name, birthDate, gender } = body;
        // TODO: body 값 validation

        const newMember = await strapi
          .service("api::family-member.family-member")
          .createMember({ user, type, name, birthDate, gender });
        const members = await strapi
          .service("api::family-member.family-member")
          .getMembers(user);
        logger.info("members :>> ", members);

        return { newMember, members };
      } catch (err) {
        logger.error(err.toString());
        // ctx.body = err;
        return ctx.badRequest(err);
      }
    },
    async getMembers(ctx, next) {
      const { method, url } = ctx.request;
      logger.info(`${method} ${url}`);
      try {
        const { user } = ctx.state;
        logger.info("user :>> ", user);

        const members = await strapi
          .service("api::family-member.family-member")
          .getMembers(user);
        logger.info("members :>> ", members);

        return members;
      } catch (err) {
        logger.error(err.toString());
        return ctx.badRequest(err);
      }
    },
    async getMember(ctx, next) {
      const { method, url } = ctx.request;
      logger.info(`${method} ${url}`);
      try {
        const { user } = ctx.state;
        const { memberId } = ctx.params;
        logger.info("memberId :>> ", memberId);

        const members = await strapi
          .service("api::family-member.family-member")
          .getMemberById(user, memberId);
        logger.info("members :>> ", members);

        return members;
      } catch (err) {
        logger.error(err.toString());
        return ctx.badRequest(err);
      }
    },
  })
);

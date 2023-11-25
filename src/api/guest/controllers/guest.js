"use strict";

/**
 * guest controller
 */

const { sanitize } = require("@strapi/utils");
const { logger } = require("../../../utils/winston");

const getService = (name) => {
  return strapi.plugin("users-permissions").service(name);
};
const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");
  return sanitize.contentAPI.output(user, userSchema, { auth });
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::guest.guest", ({ strapi }) => ({
  /**
   * @description uuid 를 통하여 guest 접근권한을 가져옵니다
   */
  async new(ctx, next) {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      const { body } = ctx.request;
      logger.info("body", body);
      const { uuid } = body;
      // todo: uuid 값 체크
      // todo: uuid 값으로 사용자 검색
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { uuid } });
      logger.info("user", user);
      // console.log("strapi", strapi);

      // Guest Role 아이디 검색
      const defaultRole = await strapi
        .query("plugin::users-permissions.role")
        .findOne({ where: { type: "guest" } });
      // 이미 UUID 로 사용자 존재시, 사용자 정보 반환
      if (user) {
        user.role = defaultRole;
        user.isFirst = false;
        logger.info("user", user);
        return ctx.send({
          jwt: getService("jwt").issue({ id: user.id }),
          user: await sanitizeUser(user, ctx),
        });
      }

      try {
        const payload = {
          uuid,
          username: uuid,
          password: uuid,
          email: `${uuid}@guest.com`,
          confirmed: true,
          uuid,
          isGuest: true,
          provider: "local",
        };

        payload.role = defaultRole.id;
        logger.info("payload", payload);
        const newUser = await getService("user").add(payload);
        logger.info("newUser", newUser);
        newUser.isFirst = true;
        return ctx.send({
          jwt: getService("jwt").issue({ id: newUser.id }),
          user: await sanitizeUser(newUser, ctx),
        });
      } catch (error) {
        logger.error(error.toString());
        return ctx.badRequest(error);
      }
    } catch (err) {
      logger.error(err.toString());
      return ctx.badRequest(err);
    }
  },
  async update(ctx, next) {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      // console.log("ctx.state :>> ", ctx.state);
      const { body } = ctx.request;
      logger.info("body", body);
      const { interests, ...updateData } = body;
      logger.info("interests :>> ", interests);
      const { user } = ctx.state;
      if (!user) throw new Error("사용자 정보가 없습니다.");

      // TODO: 업데이트 할수있는 필드만 받도록 제한처리

      // 관심사 값 있을경우 업데이트
      if (interests) {
        const interestArr = Array.isArray(interests) ? interests : [interests];
        const res = await Promise.all(
          interestArr.map((interest) => {
            logger.info("interest :>> ", interest);
            // todo: interests 테이블에 저장하기
            return strapi
              .service("api::interest.interest")
              .addIfNotExist({ user, category: interest });
          })
        );
        logger.info("res :>> ", res);
      }

      // 사용자 정보 업데이트 처리
      await strapi
        .plugin("users-permissions")
        .service("user")
        .edit(user.id, updateData);

      const updatedUser = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: user.id },
          populate: {
            role: true,
            interests: {
              select: ["id", "category"],
            },
          },
        });

      return ctx.send({
        user: updatedUser,
      });
    } catch (err) {
      logger.error(err.toString());
      return ctx.badRequest(err);
    }
  },
  async me(ctx, next) {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      const { user } = ctx.state;
      if (!user) throw new Error("사용자 정보가 없습니다.");
      const userData = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: user.id },
          populate: {
            role: true,
            interests: {
              select: ["id", "category"],
            },
          },
        });
      logger.info("userData :>> ", userData);
      return ctx.send({
        user: userData,
      });
    } catch (err) {
      logger.error(err.toString());
      return ctx.badRequest(err);
    }
  },
  async merge(ctx, next) {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      const { user } = ctx.state;
      const { body } = ctx.request;
      logger.info("body :>> ", body);
      const { uuid } = body;
      if (!uuid) {
        return ctx.badRequest("Invalid UUID:uuid is empty");
      }
      console.log("uuid :>> ", uuid);

      const guestList = await strapi
        .plugin("users-permissions")
        .service("user")
        .fetchAll({ filters: { uuid } });
      if (!guestList || guestList.length === 0) {
        return ctx.badRequest("Invalid UUID:guest is empty");
      }
      const guest = guestList[0];
      console.log("guest :>> ", guest);
      // TODO: guest 관심사 이동
      const interestIds = await strapi
        .service("api::interest.interest")
        .copyData(guest, user);

      // TODO: guest 문진 결과
      const resultIds = await strapi
        .service("api::diagnosis-result.diagnosis-result")
        .copyData(guest, user);

      logger.info("resultIds :>> ", resultIds);
      logger.info("interestIds :>> ", interestIds);

      const response = {
        diagnosisResultIds: resultIds,
        interestIds: interestIds,
      };
      logger.info("guestMerge response :>>", response);
      return response;
    } catch (err) {
      logger.error(err.toString());
      return ctx.badRequest(err);
    }
  },
}));

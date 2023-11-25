"use strict";

/**
 * interest service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::interest.interest", ({ strapi }) => ({
  async new(params = {}) {
    // console.log("strapi.entityService :>> ", strapi.entityService);
    // console.log("strapi :>> ", strapi);
    try {
      console.log("params :>> ", params);
      const res = await strapi.entityService.create("api::interest.interest", {
        data: params,
      });
      console.log("res :>> ", res);
      return res;
    } catch (err) {
      console.log("err :>> ", err);
      return err;
    }
  },
  async edit(userId, params = {}) {
    // console.log("strapi.entityService :>> ", strapi.entityService);
    // console.log("strapi :>> ", strapi);
    try {
      console.log("userId, params :>> ", userId, params);
      const res = await strapi.entityService.update(
        "api::interest.interest",
        userId,
        {
          data: params,
          populate: ["user"],
        }
      );
      console.log("res :>> ", res);
      return res;
    } catch (err) {
      console.log("err :>> ", err);
      return err;
    }
  },
  async addIfNotExist(params = {}) {
    const count = await this.count(params);
    console.log("addIfNotExist count :>> ", count);
    if (count) return;
    return this.new(params);
  },
  async copyData(guest, targetUser) {
    const interestList = await strapi.entityService.findMany(
      "api::interest.interest",
      {
        filters: {
          user: guest,
        },
      }
    );
    if (!interestList || interestList.length === 0) return;

    const Ids = [];
    for await (const interest of interestList) {
      const params = { user: targetUser, category: interest.category };
      const res = await this.addIfNotExist(params);
      if (res?.id) Ids.push(res?.id);
    }
    return Ids;
  },
  count(params) {
    return strapi.query("api::interest.interest").count({ where: params });
  },
}));

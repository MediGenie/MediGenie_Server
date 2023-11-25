"use strict";

/**
 * diagnosis service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = ({ strapi }) => ({
  async process(ctx, department, result = {}) {
    try {
      // console.log("department, result :>> ", department, result);

      // INFO: 추후에 다른 과가 생기면 분기처리할수 있도록 구분
      switch (department.toUpperCase()) {
        case "OTOLARYNGOLOGY":
          return strapi.service("api::diagnosis.otolaryngology").process(ctx);
        case "PEDIATRICS":
          return strapi.service("api::diagnosis.pediatrics").process(ctx);
      }
      // if (department.toUpperCase() === "OTOLARYNGOLOGY") {
      //   return this.processORL(result);
      // }
    } catch (err) {
      console.log("err :>> ", err);
      return err;
    }
  },
  async getDiagnosisById(id) {
    return strapi.entityService.findOne("api::diagnosis.diagnosis", id);
  },
  async calculateAgeCategory(user, familyMemberId) {
    let birthDate = user?.birthDate;
    let gender = user?.gender;
    if (familyMemberId) {
      const familyMember = await strapi
        .service("api::family-member.family-member")
        .getMemberById(user, familyMemberId);
      birthDate = familyMember?.birthDate;
      gender = familyMember?.gender;
    }
    return [birthDate, gender];
  },
});

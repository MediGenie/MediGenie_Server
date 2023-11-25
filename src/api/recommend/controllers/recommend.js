"use strict";

/**
 * recommend controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const _ = require("lodash");

module.exports = createCoreController(
  "api::recommend.recommend",
  ({ strapi }) => ({
    /**
     * @description 홈에 필요한 리소스를 가져옵니다.
     */
    async homeResources(ctx, next) {
      try {
        const recommends = await strapi.entityService.findMany(
          "api::recommend.recommend",
          {
            fields: ["id", "title"],
            populate: { diagnosis: true },
          }
        );
        console.log("recommends", recommends);
        const diagnoses = await strapi.entityService.findMany(
          "api::diagnosis.diagnosis",
          {
            fields: [
              "id",
              "department",
              "diagnosisCategory",
              "jsonLink",
              "diagnosisDuration",
              "subject",
            ],
          }
        );
        console.log("diagnoses", diagnoses);
        const groupBy = _.groupBy(diagnoses, "diagnosisCategory");
        console.log("groupBy", groupBy);

        return ctx.send({ recommends, diagnoses: groupBy });
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);

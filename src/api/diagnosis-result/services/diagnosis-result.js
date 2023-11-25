"use strict";

/**
 * diagnosis-result service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::diagnosis-result.diagnosis-result",
  ({ strapi }) => ({
    async saveResult(result) {
      console.log("result :>> ", result);
      try {
        const newResult = await strapi.entityService.create(
          "api::diagnosis-result.diagnosis-result",
          {
            data: result,
            populate: ["user", "diagnosis", "prescriptions"],
          }
        );
        return await strapi.db
          .query("api::diagnosis-result.diagnosis-result")
          .findOne({
            where: { id: newResult.id },
            select: ["id", "createdAt", "updatedAt", "softmaxResult"],
            populate: {
              familyMember: {
                select: ["id", "name", "birthDate", "type", "gender"],
              },
              diagnosis: {
                select: [
                  "id",
                  "department", // "diagnosisCategory", // "jsonLink", // "diagnosisDuration",
                ],
              },
              prescriptions: {
                select: [
                  "id",
                  "name",
                  "code",
                  "department",
                  "severityLevel",
                  // "description",
                  // "prescriptions",
                  // "mgExplanation",
                ],
              },
              // user: {
              //   select: ["id", "username", "email", "ageCategory", "gender"],
              // },
            },
          });
      } catch (err) {
        console.log("err :>> ", err);
        return err;
      }
    },
    async getResultById(id) {
      return await strapi.db
        .query("api::diagnosis-result.diagnosis-result")
        .findOne({
          where: { id },
          select: [
            "id",
            "createdAt",
            "updatedAt",
            "softmaxResult",
            "questionResult",
          ],
          populate: {
            prescriptions: {
              select: [
                "id",
                "name",
                "description",
                "code",
                "prescriptions",
                "mgExplanation",
                "severityLevel",
                "department",
              ],
            },
            diagnosis: {
              select: [
                "id",
                "department",
                "diagnosisCategory",
                "jsonLink",
                "diagnosisDuration",
              ],
            },
            user: {
              select: ["id", "username", "email", "ageCategory", "gender"],
            },
            familyMember: {
              select: ["id", "name", "birthDate", "type", "gender"],
            },
          },
        });
    },
    async getResultByUser(
      user,
      options,
      select = [
        "id",
        "createdAt",
        "updatedAt",
        "softmaxResult",
        "questionResult",
      ],
      prescriptionSelect = [
        "id",
        "name",
        "description",
        "code",
        "prescriptions",
        "mgExplanation",
        "severityLevel",
        "department",
      ],
      diagnosisSelect = [
        "id",
        "department",
        "diagnosisCategory",
        "jsonLink",
        "diagnosisDuration",
      ]
    ) {
      console.log("diagnosisSelect :>> ", diagnosisSelect);
      return await strapi.db
        .query("api::diagnosis-result.diagnosis-result")
        .findMany({
          where: { user },
          select,
          populate: {
            prescriptions: {
              select: prescriptionSelect,
            },
            diagnosis: {
              select: diagnosisSelect,
            },
            familyMember: {
              select: ["id", "name"],
            },
          },
          ...options,
        });
    },
    async savePrompt(diagnosisResultId, prompt) {
      return strapi.db.query("api::diagnosis-result.diagnosis-result").update({
        where: { id: diagnosisResultId },
        data: {
          prompt,
        },
      });
    },
    count(params) {
      return strapi
        .query("api::diagnosis-result.diagnosis-result")
        .count({ where: params });
    },
    async copyData(guest, targetUser) {
      const diagnosisResults = await strapi.entityService.findMany(
        "api::diagnosis-result.diagnosis-result",
        {
          filters: {
            user: guest,
          },
          populate: {
            diagnosis: true,
            prescriptions: true,
          },
        }
      );
      if (!diagnosisResults || diagnosisResults.length === 0) return;

      // console.log("diagnosisResults :>> ", diagnosisResults);
      const Ids = [];
      for await (const result of diagnosisResults) {
        delete result.id;
        const params = { user: targetUser, ...result };
        // console.log("params :>> ", params);
        const res = await this.saveResult(params);
        console.log("res :>> ", res);
        Ids.push(res?.id);
      }
      return Ids;
    },
  })
);

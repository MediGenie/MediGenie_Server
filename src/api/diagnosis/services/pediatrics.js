"use strict";

/**
 * pediatrics service
 */
const { DEFAULT_PROMPT_1 } = require("./constants/pediatrics");
const { getAgeText } = require("./utils");

module.exports = ({ strapi }) => ({
  async process(ctx, department) {
    try {
      const { body } = ctx.request;
      console.log("body", body);
      const { images, data, earPos, average, right, left, test, memberId } =
        body;

      // const result = await strapi
      //   .service("api::diagnosis.diagnosis")
      //   .processResult(department, {
      //     result: [{ Normal: 0.5 }],
      //     hearingTest: 0,
      //     sliceCnt: 2,
      //   });
      // 소아과는 아직 처리할 prescriptions 이 없음
      return {};
    } catch (err) {
      console.log("err :>> ", err);
      ctx.badRequest(err);
    }
  },
  async createPrompt(result, selectedLang) {
    const { questionResult, prescriptions, user, familyMember } = result;
    // console.log("user.id :>> ", user.id);
    // console.log("familyMember.id :>> ", familyMember.id);
    const questionOutput = questionResult.map(
      (q) => `${q.question} ${q.answer}`
    );
    console.log("questionOutput :>> ", questionOutput);
    const selectedPrompt = DEFAULT_PROMPT_1;
    const ageRange = getAgeText(
      familyMember ? familyMember.birthDate : user?.birthDate
    );
    const gender = user?.gender;
    const name = user?.username;
    return selectedPrompt(questionOutput, ageRange, gender, name, selectedLang);
  },
});

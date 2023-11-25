"use strict";

/**
 * otolaryngology service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const { ORL_CATEGORIES } = require("./constants");
const {
  TEST_SOFT_MAX,
  DEFAULT_SYSTEM_PROMPT_1,
  DEFAULT_SYSTEM_PROMPT_2,
} = require("./constants/otolaryngology");
const {
  getDetailField,
  getAgeText,
  urlToBase64,
  softmax,
  requestInference,
} = require("./utils");

module.exports = ({ strapi }) => ({
  async process(ctx) {
    const { body } = ctx.request;
    console.log("body", body);
    const { images } = body;
    let softmaxResult, result;

    const filterImage = (imgs) => imgs.filter((img) => img !== "");
    if (images && filterImage(images).length) {
      const filteredImages = filterImage(images);
      console.log("filteredImages :>> ", filteredImages);
      body.images = filteredImages;
      const results = await this.imageInference(ctx, body);
      result = results[0];
      softmaxResult = results[1];
    } else {
      // 이미지가 없는 경우 정상인 귀로 추정
      const { right, left } = body.average;
      result = await this.calculatePresecripts({
        result: [{ Normal: 0.5 }],
        hearingTest: right > left ? right : left,
        sliceCnt: 1,
      });
    }
    return { softmaxResult, result };
  },
  async imageInference(ctx, body) {
    const { images, earPos, average, test } = body;
    const imageArr = Array.isArray(images) ? images : [images];
    console.log("imageArr", imageArr);

    const encodedImgs = await Promise.all(
      imageArr.map((img) => urlToBase64(img))
    );
    // console.log("encodedImgs", encodedImgs);
    const inferenceResult = await requestInference(encodedImgs);
    // inferenceResult.result 값이 없는 경우, 에러 처리
    if (!inferenceResult?.result || inferenceResult?.result === "") {
      return ctx.badRequest("Invalid inference result");
    }
    console.log("test :>> ", test);
    const softmaxResult = test
      ? TEST_SOFT_MAX(test)
      : softmax(inferenceResult.result);
    console.log("softmaxResult :>> ", softmaxResult);

    let over50 = [],
      over30 = [];

    Object.keys(softmaxResult).map((k) => {
      const v = softmaxResult[k];
      if (v > 0.5) {
        over50.push({ [k]: softmaxResult[k] });
      } else if (v >= 0.3) {
        over30.push({ [k]: softmaxResult[k] });
      }
    });

    let result;
    if (over50.length) {
      console.log("over50 :>> ", over50);
      result = await this.calculatePresecripts({
        result: over50,
        hearingTest: average ? average[earPos] : 0,
        sliceCnt: 1,
      });
    } else if (over30.length) {
      console.log("over30 :>> ", over30);
      result = await this.calculatePresecripts({
        result: over30,
        hearingTest: average ? average[earPos] : 0,
        sliceCnt: 2,
      });
    } else {
      // 여기는 모든 softmax 의 값이 0.3 이하만 존재하는 경우
      result = await this.calculatePresecripts({
        result: [{ Normal: 0.5 }],
        hearingTest: 0,
        sliceCnt: 2,
      });
    }
    return [result, softmaxResult];
  },
  async calculatePresecripts({ result, hearingTest, sliceCnt }) {
    try {
      // 결과값이 2개 이상이라면, 가장 큰 2개만 남기도록 처리
      if (result.length > 2) {
        result = result
          .sort((a, b) => {
            return Object.values(b)[0] - Object.values(a)[0];
          })
          .slice(0, sliceCnt);
      }
      console.log("result :>> ", result);
      // 결과에 맞는 진단 metaData 조회
      return Promise.all(
        result.map((r) => {
          const searchKey = Object.keys(r)[0].toUpperCase();
          const targetIndex = ORL_CATEGORIES[searchKey];
          const detailField = getDetailField(searchKey, hearingTest);
          console.log("targetIndex :>> ", targetIndex);
          console.log("detailField :>> ", detailField);
          console.log("searchKey :>> ", searchKey);
          const id = targetIndex[detailField];
          console.log("id :>> ", id);
          return strapi.entityService.findOne(
            "api::diagnosis-metadatum.diagnosis-metadatum",
            id
          );
        })
      );
    } catch (err) {
      console.log("err :>> ", err);
      return err;
    }
  },
  async createPrompt(result, selectedLang) {
    console.log("selectedLang1111111 :>> ", selectedLang);
    const { questionResult, prescriptions, user, familyMember } = result;
    console.log("user?.id :>> ", user?.id);
    console.log("familyMember?.id :>> ", familyMember?.id);
    const questionOutput = questionResult.map(
      (q) => `${q.question} ${q.answer}`
    );
    const inferenceOutput = prescriptions.map((p) => p.name);
    const selectedPrompt =
      prescriptions.length === 1
        ? DEFAULT_SYSTEM_PROMPT_1
        : DEFAULT_SYSTEM_PROMPT_2;
    const ageRange = getAgeText(
      familyMember ? familyMember.birthDate : user?.birthDate
    );
    const gender = user?.gender;
    const name = user?.username;
    console.log("selectedLang :>> ", selectedLang);
    return selectedPrompt(
      inferenceOutput,
      questionOutput,
      ageRange,
      gender,
      name,
      selectedLang
    );
  },
});

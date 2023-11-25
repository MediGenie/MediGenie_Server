"use strict";

/**
 * diagnosis controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const _ = require("lodash");
const { logger } = require("../../../utils/winston");

module.exports = createCoreController(
  "api::diagnosis.diagnosis",
  ({ strapi }) => ({
    /**
     * @description 문진표 생성
     */
    async new(ctx, next) {
      try {
        const { method, url, headers } = ctx.request;
        logger.info(`${method} ${url}`);
        const { diagnosisId } = ctx.params;
        const { body } = ctx.request;
        logger.info("body", body);

        const acceptedLanguage = headers["accept-language"] ?? "en_US";
        logger.info("acceptedLanguage :>> ", acceptedLanguage);

        const { images, data, earPos, average, right, left, test, memberId } =
          body;

        const { user } = ctx.state;
        // TODO: body 값 validation

        // diagnosis정보 조회
        const diagnosis = await strapi
          .service("api::diagnosis.diagnosis")
          .getDiagnosisById(diagnosisId);
        logger.info("diagnosis :>> ", diagnosis);
        if (!diagnosis) {
          return ctx.badRequest("Invalid diagnosisId");
        }
        const { department } = diagnosis;

        const { softmaxResult, result } = await strapi
          .service("api::diagnosis.diagnosis")
          .process(ctx, department);
        // console.log("result :>> ", result);
        // TODO: save result

        let [birthDate, gender] = await strapi
          .service("api::diagnosis.diagnosis")
          .calculateAgeCategory(user, memberId);
        logger.info("memberId :>> ", memberId);
        logger.info("birthDate :>> ", birthDate);
        logger.info("gender :>> ", gender);
        const savedResult = await strapi
          .service("api::diagnosis-result.diagnosis-result")
          .saveResult({
            user,
            diagnosis,
            familyMember: checkMemberId(memberId) ? memberId : undefined,
            birthDate,
            gender,
            prescriptions: result,
            hearingTestResult: { right, left },
            softmaxResult,
            questionResult: data,
            images,
            earPos:
              earPos && _.includes(["LEFT", "RIGHT"], earPos)
                ? earPos.toUpperCase()
                : undefined,
          });
        // 언어별 처리
        if (savedResult?.prescriptions) {
          const langPack = await strapi
            .service("api::language-pack.language-pack")
            .getLanguage(acceptedLanguage);
          console.log("langPack :>> ", langPack);
          savedResult.prescriptions = savedResult?.prescriptions.map(
            (prescription) => {
              console.log("prescription?.code :>> ", prescription?.code);
              const {
                description,
                serious,
                treatment,
                medications,
                mgExplanation,
              } = langPack.fields[prescription?.code];
              return {
                ...prescription,
                description,
                prescriptions: { serious, treatment, medications },
                mgExplanation,
              };
            }
          );
        }

        logger.info("savedResult :>> ", savedResult);
        return savedResult;
      } catch (err) {
        logger.error(err.toString());
        ctx.body = err;
        return ctx.badRequest(err);
      }
    },
    /**
     * @description 문진결과 chatGPT 조회
     */
    async requestChatGPT(ctx, next) {
      const { method, url, headers } = ctx.request;
      logger.info(`${method} ${url}`);

      try {
        // console.log("ctx.params :>> ", ctx.params);
        const { diagnosisId } = ctx.params;
        const { body } = ctx.request;
        logger.info("body", body);
        const { diagnosisResultId } = body;

        // TODO: diagnosisId 로 조회하기
        const diagnosis = await strapi
          .service("api::diagnosis.diagnosis")
          .getDiagnosisById(diagnosisId);
        logger.info("diagnosis :>> ", diagnosis);
        if (!diagnosis) {
          return ctx.badRequest("Invalid diagnosisId");
        }
        logger.info("diagnosisResultId :>> ", diagnosisResultId);

        const diagnosisResult = await strapi
          .service("api::diagnosis-result.diagnosis-result")
          .getResultById(diagnosisResultId);
        // console.log("diagnosisResult :>> ", diagnosisResult);
        // diagnosisResult 없으면 에러처리
        if (!diagnosisResult) {
          return ctx.badRequest("Invalid diagnosisResultId");
        }

        // chatGPT 처리가 끝나면 prompt 저장하기
        const onEndedCallback = (prompt) => {
          return new Promise((resolve, reject) => {
            // console.log("onEndedCallback >>", prompt);
            strapi
              .service("api::diagnosis-result.diagnosis-result")
              .savePrompt(diagnosisResultId, prompt)
              .then((res) => {
                logger.info("savePrompt res :>> ", res);
                resolve();
              });
          });
        };

        await strapi
          .service("api::diagnosis.chatgpt")
          .requestChatGPT(ctx, diagnosis, diagnosisResult, onEndedCallback);
      } catch (err) {
        logger.error(err.toString());
        ctx.body = err;
        return ctx.badRequest(err);
      }
    },
    async testStream(ctx, next) {
      const { method, url } = ctx.request;
      logger.info(`${method} ${url}`);
      try {
        const diagnosis = await strapi
          .service("api::diagnosis.diagnosis")
          .getDiagnosisById("6");

        const diagnosisResultId = "177";
        const diagnosisResult = await strapi
          .service("api::diagnosis-result.diagnosis-result")
          .getResultById(diagnosisResultId);
        logger.info("diagnosisResult :>> ", diagnosisResult);

        const onEndedCallback = (prompt) => {
          return new Promise((resolve, reject) => {
            logger.info("onEndedCallback >>", prompt);
            resolve();
          });
        };

        return await strapi
          .service("api::diagnosis.chatgpt")
          .requestChatGPT(ctx, diagnosis, diagnosisResult, onEndedCallback);
      } catch (err) {
        logger.error("err", err);
        ctx.body = err;
        return ctx.badRequest(err);
      }
    },
    /**
     * @description 문진표 히스토리 조회
     */
    async history(ctx, next) {
      const { method, url, headers } = ctx.request;
      console.log("headers :>> ", headers);
      const acceptedLanguage = headers["accept-language"] ?? "en_US";
      console.log("acceptedLanguage :>> ", acceptedLanguage);
      logger.info(`${method} ${url}`);
      try {
        return [];
      } catch (err) {
        logger.error("err", err);
        ctx.body = err;
        return ctx.badRequest(err);
      }
    },
  })
);

const checkMemberId = (memberId) => {
  if (!memberId) return false;
  return memberId !== "" && memberId !== 0 && memberId !== "0";
};

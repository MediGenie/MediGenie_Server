"use strict";

/**
 * chat-gpt service
 */

const { OPENAI_API_KEY } = require("./constants");
const { fetchStreamedChat } = require("./streamedChatGpt");
const { PassThrough } = require("stream");
const { logger } = require("../../../utils/winston");

const selectLanguage = (acceptedLanguage) => {
  switch (acceptedLanguage) {
    case "en_US":
      return "English";
    case "vi_VN":
      return "Vietnamese";
    case "ko_KR":
      return "Korean";
  }
};

const createPrompt = (diagnosis, result, acceptedLanguage) => {
  // console.log('diagnosis :>> ', diagnosis);
  const { department } = diagnosis;
  console.log("department :>> ", department);

  const selectedLang = selectLanguage(acceptedLanguage);
  console.log("selectedLang :>> ", selectedLang);
  switch (department.toUpperCase()) {
    case "OTOLARYNGOLOGY":
      return strapi
        .service("api::diagnosis.otolaryngology")
        .createPrompt(result, selectedLang);
    case "PEDIATRICS":
      return strapi
        .service("api::diagnosis.pediatrics")
        .createPrompt(result, selectedLang);
  }
};

module.exports = ({ strapi }) => ({
  async requestChatGPT(ctx, diagnosis, diagnosisResult, onEndedCallback) {
    const { headers, body } = ctx.request;
    const acceptedLanguage = headers["accept-language"] ?? "en_US";
    logger.info(`acceptedLanguage :>> ${acceptedLanguage}`);

    try {
      const { model = "gpt-4-1106-preview" } = body;
      const stream = new PassThrough();
      ctx.response.status = 200;
      ctx.response.body = stream;
      const prompt = await createPrompt(
        diagnosis,
        diagnosisResult,
        acceptedLanguage
      );
      console.log("prompt :>> ", prompt);
      let completeResponse = "";
      let msgCollected = "";

      let currentRes = "";
      fetchStreamedChat(
        {
          apiKey: OPENAI_API_KEY,
          messageInput: prompt,
          temperature: 0.7,
          // maxTokens: 100,
          model,
        },
        (response) => {
          currentRes = response;
          try {
            // console.log("response :>> ", response);
            const choices = response.choices[0];
            const content = choices.delta.content;
            const finished = choices.finish_reason;
            // console.log("content :>> ", content);
            // console.log("finished :>> ", finished);
            ctx.response.set({
              "Transfer-Encoding": "chunked",
              "Content-Type": "text/event-stream; charset=UTF-8",
              connection: "keep-alive",
            });
            if (content) {
              // chunk 로그
              process.stdout.write(content);
              completeResponse += content;
              msgCollected += content;
              stream.write(content);
              if (msgCollected.length > 60) {
                logger.info(msgCollected);
                msgCollected = "";
              }
            }
            if (finished) {
              logger.info(msgCollected);
              // TODO: 완료시, prompt 저장
              console.log("completeResponse :>> ", completeResponse);
              onEndedCallback(prompt).then(() => {
                stream.end();
              });
            }
          } catch (err) {
            console.log("err :>> ", err);
            logger.info(`에러난 response: ${JSON.stringify(currentRes)}`);
          }
        }
      );
    } catch (err) {
      console.log("err :>> ", err);
    }
  },
});

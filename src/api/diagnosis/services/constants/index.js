"use strict";

// 들어가는 숫자들은 DB-diagnosisMetadata 에 생성한 id 값
const categories = {
  OTOLARYNGOLOGY: {
    TP: {
      NORMAL: 1,
      CAUTIOUS: 2,
      SERIOUS: 3,
    },
    AR: {
      NORMAL: 4,
      CAUTIOUS: 5,
      SERIOUS: 6,
    },
    MYRI: {
      NORMAL: 7,
      CAUTIOUS: 8,
      SERIOUS: 9,
    },
    OME: {
      NORMAL: 10,
      CAUTIOUS: 11,
      SERIOUS: 12,
    },
    TUMOR: {
      NORMAL: 13,
    },
    NORMAL: {
      NORMAL: 14,
      CAUTIOUS: 15,
      SERIOUS: 16,
    },
  },
};

const OPENAI_API_HOST = "https://api.openai.com";
const DEFAULT_TEMPERATURE = "1";
const OPENAI_API_TYPE = "openai";
const OPENAI_API_VERSION = "2023-03-15-preview";
const OPENAI_ORGANIZATION = "";
const OPENAI_API_KEY = "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";

module.exports = {
  CATEGORIES: categories,
  ORL_CATEGORIES: categories["OTOLARYNGOLOGY"],
  OPENAI_API_HOST,
  DEFAULT_TEMPERATURE,
  OPENAI_API_TYPE,
  OPENAI_API_VERSION,
  OPENAI_ORGANIZATION,
  OPENAI_API_KEY,
};

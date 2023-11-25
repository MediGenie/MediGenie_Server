"use strict";
const { faker } = require("@faker-js/faker");

const testSoftMax = ({ normal: normalTest }) => {
  const normal = faker.number.float({
    min: normalTest ? 0.3 : 0.01,
    max: normalTest ? 0.5 : 0.2,
  });
  const maxValue = normal >= 0.3 ? 0.29 : 0.6;
  return {
    Ar: faker.number.float({ min: 0.01, max: maxValue }),
    Myri: faker.number.float({ min: 0.01, max: maxValue }),
    Normal: normal,
    Ome: faker.number.float({ min: 0.01, max: maxValue }),
    Tp: faker.number.float({ min: 0.01, max: maxValue }),
    Tumor: faker.number.float({ min: 0.01, max: maxValue }),
  };
};

const DEFAULT_SYSTEM_PROMPT_1 = (
  inferenceOutput,
  questionOutput,
  ageRange,
  gender,
  name,
  language
) => {
  const inferenceOutputJoined = inferenceOutput.join(", ");
  const questionOutputJoined = questionOutput.join(", ");
  return `Based on the diagnostic results of ${inferenceOutputJoined} and considering ${questionOutputJoined} and ${ageRange}, ${gender}, patient name is ${name},
  can you give an explanation like a medical doctor of the disease to this patient thoroughly, 
  kindly, and sympathetically taking in consideration of their age, gender, life style habits?
  The explanation should be in bullet points and include what the disease is, how the patient might have gotten it,
  how serious the condition is, what is the typical treatment/medication, and what kind of lifestyle the patient can have to prevent this disease.
  Can you make sure that the result is only preliminary and they patient should seek an actual doctor for confirmation. Your name is MediGenie.
  The result should be in ${language}.
  `;
};
const DEFAULT_SYSTEM_PROMPT_2 = (
  inferenceOutput,
  questionOutput,
  ageRange,
  gender,
  name,
  language
) => {
  const inferenceOutputJoined = inferenceOutput.join(" or ");
  const questionOutputJoined = questionOutput.join(", ");
  return `
  Based on the diagnostic results, there is a probability that it can be either one of the disease ${inferenceOutputJoined}
  and considering ${questionOutputJoined} and ${ageRange}, ${gender}, patient name is ${name},
  can you give an explanation like a medical doctor of the disease to this patient thoroughly,
  kindly, and sympathetically taking in consideration of their age, gender, life style habits?
  The explanation should be in bullet points and include what the disease is, how the patient might have gotten it, how serious the condition is,
  what is the typical treatment/medication, and what kind of lifestyle the patient can have to prevent this disease.
  Can you make sure that the result is only preliminary and they patient should seek an actual doctor for confirmation. Your name is MediGenie.
  The result should be in ${language}.
  `;
};

module.exports = {
  DEFAULT_SYSTEM_PROMPT_1,
  DEFAULT_SYSTEM_PROMPT_2,
  TEST_SOFT_MAX: testSoftMax,
};

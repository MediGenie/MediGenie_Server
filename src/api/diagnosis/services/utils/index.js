const axios = require("axios");
const sizeOf = require("image-size");

const getAgeText = (birthDate) => {
  const ageInYears = Math.floor(
    (new Date() - new Date(birthDate)) / (365 * 24 * 60 * 60 * 1000)
  );
  console.log("ageInYears :>> ", ageInYears);

  if (ageInYears <= 13) return "age between 0 to 13";
  if (ageInYears <= 17) return "age between 14 to 17";
  if (ageInYears <= 39) return "age between 18 to 39";
  if (ageInYears <= 69) return "age between 40 to 69";
  return "age between 70 above";
};

async function urlToBase64(url) {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    const contentType = response.headers["content-type"];
    // const base64String = `data:${contentType};base64,${Buffer.from(
    //   response.data
    // ).toString("base64")}`;
    const base64String = `${Buffer.from(response.data).toString("base64")}`;

    const { height, width } = sizeOf(response.data);

    return { w: width, h: height, c: 3, img: base64String, service: "eardrum" };
  } catch (err) {
    console.log(err);
  }
}
async function requestInference(payload) {
  console.log("payload :>> ", payload);
  const res = await axios({
    method: "POST",
    url: "http://103.22.220.93:8000/inference/",
    data: payload,
  });
  console.log("res", res);
  if (res?.data?.msg && res?.data?.result === "") {
    throw new Error(res?.data?.msg);
  }
  // console.log("res.data", res.data);
  // return { payload, res: res?.data };
  return res?.data;
}

const softmax = (result) => {
  const softmaxValues = Object.values(result);
  const expVector = softmaxValues.map(Math.exp);
  const sumExpVector = expVector.reduce((a, b) => a + b, 0);
  const softmaxVector = expVector.map((x) => x / sumExpVector);

  const softmaxResult = {};
  Object.keys(result).forEach(
    (key, i) => (softmaxResult[key] = softmaxVector[i])
  );
  return softmaxResult;
};

const getDetailField = (searchKey, level) => {
  console.log("getDetailField level :>> ", searchKey, level);
  if (!level || level < 15 || searchKey === "TUMOR") return "NORMAL";
  if (level <= 45) return "CAUTIOUS";
  return "SERIOUS";
};

module.exports = {
  getDetailField,
  getAgeText,
  urlToBase64,
  softmax,
  requestInference,
};

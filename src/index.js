"use strict";
const guestOverride = require("./api/guest/documentation/1.0.0/override/guest.json");
const recommendOverride = require("./api/recommend/documentation/1.0.0/override/recommend.json");
const imageOverride = require("./api/image/documentation/1.0.0/override/image.json");
const appleOverride = require("./api/apple/documentation/1.0.0/override/apple.json");
const diagnosisOverride = require("./api/diagnosis/documentation/1.0.0/override/diagnosis.json");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    strapi
      .plugin("documentation")
      .service("override")
      .excludeFromGeneration([
        "guest",
        "diagnosis",
        "recommend",
        "result",
        "interest",
        "diagnosis-metadata",
      ]);
    strapi
      .plugin("documentation")
      .service("override")
      .registerOverride({
        info: { version: "1.0.0" },
        ...guestOverride,
      });
    strapi
      .plugin("documentation")
      .service("override")
      .registerOverride({
        info: { version: "1.0.0" },
        ...recommendOverride,
      });
    strapi
      .plugin("documentation")
      .service("override")
      .registerOverride({
        info: { version: "1.0.0" },
        ...imageOverride,
      });
    strapi
      .plugin("documentation")
      .service("override")
      .registerOverride({
        info: { version: "1.0.0" },
        ...appleOverride,
      });
    strapi
      .plugin("documentation")
      .service("override")
      .registerOverride({
        info: { version: "1.0.0" },
        ...diagnosisOverride,
      });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    // const realLog = console.log;
    // const log_file = fs.createWriteStream(__dirname + "/debug.log", {
    //   flags: "w",
    // });
    // const log_stdout = process.stdout;
    // console.log = function (d) {
    //   // ...your code...
    //   // log_file.write(util.format(d) + "\n");
    //   log_stdout.write(util.format(d) + "\n");
    //   // Pass off to the real one
    //   return realLog.apply(console, arguments);
    // };
  },
};

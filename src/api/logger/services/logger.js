"use strict";

/**
 * logger service
 */

const winston = require("winston");
const SlackHook = require("winston-slack-webhook-transport");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new SlackHook({
      webhookUrl:
        "https://hooks.slack.com/services/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",
    }),
  ],
});
module.exports = () => ({
  getLogger() {
    return logger;
  },
});

"use strict";

/**
 * logger service
 */

const { createLogger, format, transports } = require("winston");
const SlackHook = require("winston-slack-webhook-transport");
const { isObject } = require("lodash");
const { SPLAT } = require("triple-beam");

const { combine, timestamp, label, printf, colorize, align } = format;

function formatObject(param) {
  if (isObject(param)) {
    return JSON.stringify(param);
  }
  return param;
}

// Ignore log messages if they have { private: true }
const all = format((info) => {
  const splat = info[SPLAT] || [];
  const message = formatObject(info.message);
  const rest = splat.map(formatObject).join(" ");
  info.message = `${message} ${rest}`;
  return info;
});

const logger = createLogger({
  // level: "info",
  format: combine(
    // all(),
    // timestamp(),
    // colorize(),
    // align(),
    printf(
      (info) =>
        `${info.timestamp} [${info.label}] ${info.level}: ${formatObject(
          info.message
        )}`
    )
  ),
  transports: [
    new SlackHook({
      webhookUrl:
        "https://hooks.slack.com/services/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",
    }),
  ],
});
const localhostLogger = createLogger({
  // level: "info",
  format: combine(
    // all(),
    // timestamp(),
    // colorize(),
    // align(),
    printf(
      (info) =>
        `${info.timestamp} [${info.label}] ${info.level}: ${formatObject(
          info.message
        )}`
    )
  ),
});
const wrapper = (original) => {
  return (...args) => {
    console.log("args :>> ", args);
    function checkArray(array) {
      function stringifyValue(value) {
        if (Array.isArray(value)) {
          return checkArray(value);
        }
        if (typeof value !== "string") {
          return JSON.stringify(value);
        }
        return value;
      }

      return array.map(stringifyValue);
    }
    args = checkArray(args);
    original(args.join(" "));
  };
};

logger.error = wrapper(logger.error);
logger.warn = wrapper(logger.warn);
logger.info = wrapper(logger.info);
logger.verbose = wrapper(logger.verbose);
logger.debug = wrapper(logger.debug);
logger.silly = wrapper(logger.silly);

module.exports = {
  logger: logger,
  // logger: localhostLogger,
};

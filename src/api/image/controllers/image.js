"use strict";

const _ = require("lodash");
const utils = require("@strapi/utils");
const validateUploadBody = require("./validation/content-api/upload");
const { FILE_MODEL_UID } = require("./constants");
const { logger } = require("../../../utils/winston");

/**
 * A set of functions called "actions" for `image`
 */

const { sanitize } = utils;
const { ValidationError } = utils.errors;
const getService = (name) => {
  return strapi.plugin("upload").service(name);
};
const sanitizeOutput = (data, ctx) => {
  const schema = strapi.getModel(FILE_MODEL_UID);
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(data, schema, { auth });
};
module.exports = {
  async upload(ctx, next) {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      const {
        query: { id },
        request: { files: { files } = {} },
      } = ctx;
      logger.info("ctx.state.user", ctx.state.user);

      if (ctx.state.user) {
        const { id: userId, username, email } = ctx.state.user;
        logger.info("userId", userId);
        logger.info("ctx.request.body.path :>> ", ctx.request.body.path);

        const existPath = ctx.request.body.path;

        ctx.request.body.path = existPath
          ? `${ctx.request.body.path}/${userId}_${username}_${email}`
          : `${userId}_${username}_${email}`;
        logger.info("ctx.request.body", ctx.request.body);
      }

      if (_.isEmpty(files) || files.size === 0) {
        if (id) {
          return this.updateFileInfo(ctx);
        }

        throw new ValidationError("Files are empty");
      }

      await (id ? this.replaceFile : this.uploadFiles)(ctx);
    } catch (err) {
      logger.error(err.toString());
      return ctx.badRequest(err);
    }
  },
  async uploadFiles(ctx) {
    const {
      request: { body, files: { files } = {} },
    } = ctx;

    const data = await validateUploadBody(body, Array.isArray(files));

    const apiUploadFolderService = getService("api-upload-folder");

    const apiUploadFolder = await apiUploadFolderService.getAPIUploadFolder();

    if (Array.isArray(files)) {
      data.fileInfo = data.fileInfo || [];
      data.fileInfo = files.map((_f, i) => ({
        ...data.fileInfo[i],
        folder: apiUploadFolder.id,
      }));
    } else {
      data.fileInfo = { ...data.fileInfo, folder: apiUploadFolder.id };
    }

    const uploadedFiles = await getService("upload").upload({
      data,
      files,
    });

    const response = await sanitizeOutput(uploadedFiles, ctx);
    logger.info(response);
    ctx.body = response;
  },
  async replaceFile(ctx) {
    const {
      query: { id },
      request: { body, files: { files } = {} },
    } = ctx;

    // cannot replace with more than one file
    if (Array.isArray(files)) {
      throw new ValidationError("Cannot replace a file with multiple ones");
    }

    const replacedFiles = await getService("upload").replace(id, {
      data: await validateUploadBody(body),
      file: files,
    });

    const response = await sanitizeOutput(replacedFiles, ctx);
    logger.info(response);
    ctx.body = response;
  },
  async updateFileInfo(ctx) {
    const {
      query: { id },
      request: { body },
    } = ctx;
    const data = await validateUploadBody(body);

    const result = await getService("upload").updateFileInfo(id, data.fileInfo);

    const response = await sanitizeOutput(result, ctx);
    logger.info(response);
    ctx.body = response;
  },
};

"use strict";

/**
 * language-pack service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = ({ strapi }) => ({
  async getLanguage(language) {
    return await strapi.db.query("api::language-pack.language-pack").findOne({
      where: { language },
    });
  },
});

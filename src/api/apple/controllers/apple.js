"use strict";

/**
 * A set of functions called "actions" for `apple`
 */
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const qs = require("querystring");
const { sanitize } = require("@strapi/utils");

const getService = (name) => {
  return strapi.plugin("users-permissions").service(name);
};
const sanitizeUser = (user, ctx) => {
  // const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");
  return sanitize.contentAPI.output(user, userSchema);
};
// const AppleService = strapi.service("api::apple.apple");
module.exports = {
  redirect: async (ctx, next) => {
    try {
      console.log("ctx.request.body :>> ", ctx.request.body);
      const { code, id_token, state: redirectUrl } = ctx.request.body;
      console.log("code :>> ", code);
      console.log("id_token :>> ", id_token);

      const { data } = await strapi
        .service("api::apple.apple")
        .getAppleToken(code);
      console.log("data :>> ", data);
      if (!data) {
        throw new Error("Error processing apple token.");
      }
      const { access_token } = data;

      if (!access_token) {
        throw new Error("No access_token.");
      }

      const { sub: id, email } = jwt.decode(id_token);
      console.log("id, email :>> ", id, email);

      return ctx.redirect(
        `${redirectUrl}?${qs.stringify({ access_token, id, email })}`
      );
    } catch (err) {
      // console.log("err :>> ", err);
      console.log("err.data :>> ", err.data);
      ctx.body = err.data;
    }
  },
  callback: async (ctx, next) => {
    try {
      console.log("ctx.request.body :>> ", ctx.request.body);
      const { access_token, email } = ctx.request.body;
      console.log("access_token :>> ", access_token);
      if (!access_token) {
        throw new Error("No access_token.");
      }
      if (!email) {
        throw new Error("No email.");
      }

      const users = await strapi
        .query("plugin::users-permissions.user")
        .findMany({
          where: { email },
        });

      const pluginStore = await strapi.store({
        type: "plugin",
        name: "users-permissions",
      });
      const advancedSettings = await pluginStore.get({ key: "advanced" });
      const user = _.find(users, { provider: "apple" });
      if (!_.isEmpty(user)) {
        user.isNew = false;
        console.log("user :>> ", user);
        return ctx.send({
          jwt: getService("jwt").issue({ id: user.id }),
          user: await sanitizeUser(user, ctx),
        });
      }
      console.log("user :>> ", user);
      if (users.length && advancedSettings.unique_email) {
        throw new Error("Email is already taken.");
      }

      // Retrieve default role.
      const defaultRole = await strapi
        .query("plugin::users-permissions.role")
        .findOne({ where: { type: advancedSettings.default_role } });

      // Create the new user.
      const newUserPayload = {
        // ...profile,  애플은 프로필 정보를 가져오는 방법이 없음
        email, // overwrite with lowercased email
        provider: "apple",
        role: defaultRole.id,
        confirmed: true,
      };

      const newUser = await strapi
        .query("plugin::users-permissions.user")
        .create({ data: newUserPayload });
      newUser.isNew = true;
      console.log("newUser :>> ", newUser);

      return ctx.send({
        jwt: getService("jwt").issue({ id: newUser.id }),
        user: await sanitizeUser(newUser, ctx),
      });
    } catch (err) {
      console.log("err :>> ", err);
      console.log("err.response.data :>> ", err?.response?.data);
      ctx.body = err.response.data;
    }
  },
};

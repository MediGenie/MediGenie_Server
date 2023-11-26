const _ = require("lodash");
const utils = require("@strapi/utils");
const { logger } = require("../../utils/winston");

const { getAbsoluteAdminUrl, getAbsoluteServerUrl, sanitize } = utils;
const { ApplicationError } = utils.errors;

const getService = (name) => {
  return strapi.plugin("users-permissions").service(name);
};
const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  return sanitize.contentAPI.output(user, userSchema, { auth });
};
const sanitizeQuery = async (query, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.query(query, schema, { auth });
};
const sanitizeOutput = async (user, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};
module.exports = (plugin) => {
  // console.log("plugin.controllers :>> ", plugin.controllers);
  const callback = plugin.controllers.auth.callback;
  plugin.controllers.auth.callback = async (ctx) => {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    const provider = ctx.params.provider || "local";
    if (provider === "local") return await callback(ctx);

    try {
      const user = await connect(provider, ctx.query);

      return ctx.send({
        jwt: getService("jwt").issue({ id: user.id }),
        user: await sanitizeUser(user, ctx),
      });
    } catch (error) {
      throw new ApplicationError(error.message);
    }
  };
  const me = plugin.controllers.user.me;
  plugin.controllers.user.me = async (ctx) => {
    const { method, url } = ctx.request;
    logger.info(`${method} ${url}`);
    try {
      const authUser = ctx.state.user;
      const { query } = ctx;

      if (!authUser) {
        return ctx.unauthorized();
      }

      const sanitizedQuery = await sanitizeQuery(query, ctx);
      // console.log("sanitizedQuery :>> ", sanitizedQuery);
      const user = await getService("user").fetch(authUser.id, sanitizedQuery);
      // 가족 정보 가져오기
      const familyMembers = await strapi
        .service("api::family-member.family-member")
        .getMembers(user, ["id", "name", "type"]);
      // console.log("familyMembers :>> ", familyMembers);

      // 최근에 생성된 5개까지만 조회
      const diagnosisResults = await strapi
        .service("api::diagnosis-result.diagnosis-result")
        .getResultByUser(
          user,
          {
            limit: 15,
            orderBy: {
              createdAt: "DESC",
            },
          },
          ["id"],
          ["id", "name", "severityLevel", "department"],
          ["id", "department"]
        );
      logger.info("diagnosisResults :>> ", diagnosisResults);

      const response = await sanitizeOutput(user, ctx);
      response.familyMembers = familyMembers;
      response.diagnosisResults = diagnosisResults;
      logger.info("response :>> ", response);
      ctx.body = response;
    } catch (error) {
      throw new ApplicationError(error.message);
    }
  };
  return plugin;
};

const getProfile = async (provider, query) => {
  const accessToken = query.access_token || query.code || query.oauth_token;

  const providers = await strapi
    .store({ type: "plugin", name: "users-permissions", key: "grant" })
    .get();

  return getService("providers-registry").run({
    provider,
    query,
    accessToken,
    providers,
  });
};

const connect = async (provider, query) => {
  const accessToken = query.access_token || query.code || query.oauth_token;

  if (!accessToken) {
    throw new Error("No access_token.");
  }

  // Get the profile.
  const profile = await getProfile(provider, query);
  const email = _.toLower(profile.email);

  // We need at least the mail.
  if (!email) {
    throw new Error("Email was not available.");
  }

  const users = await strapi.query("plugin::users-permissions.user").findMany({
    where: { email },
  });

  const advancedSettings = await strapi
    .store({ type: "plugin", name: "users-permissions", key: "advanced" })
    .get();

  const user = _.find(users, { provider });

  if (_.isEmpty(user) && !advancedSettings.allow_register) {
    throw new Error("Register action is actually not available.");
  }

  if (!_.isEmpty(user)) {
    user.isNew = false;
    return user;
  }

  if (users.length && advancedSettings.unique_email) {
    throw new Error("Email is already taken.");
  }

  // Retrieve default role.
  const defaultRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: advancedSettings.default_role } });

  // Create the new user.
  const newUser = {
    ...profile,
    email, // overwrite with lowercased email
    provider,
    role: defaultRole.id,
    confirmed: true,
  };

  const createdUser = await strapi
    .query("plugin::users-permissions.user")
    .create({ data: newUser });

  createdUser.isNew = true;

  return createdUser;
};

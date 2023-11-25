module.exports = {
  routes: [
    {
      method: "POST",
      path: "/apple/redirect",
      handler: "apple.redirect",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/apple/callback",
      handler: "apple.callback",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

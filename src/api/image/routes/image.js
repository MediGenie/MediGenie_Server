module.exports = {
  routes: [
    {
      method: "POST",
      path: "/images/upload",
      handler: "image.upload",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

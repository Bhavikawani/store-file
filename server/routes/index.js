const fileRouter = require("./file");

const initRoutes = (app) => {
  app.use("/api/v1/upload", fileRouter);
};

module.exports = initRoutes;
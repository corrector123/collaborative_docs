const { logger } = require("../../util");
const initLogger = (req, res, next) => {
  req.logger = logger;
  next();
};

module.exports = {
  initLogger,
};

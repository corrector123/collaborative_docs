const path = require("path");
const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../public/dist/index.html"));
});

exports.indexRouter = router;

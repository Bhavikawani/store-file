const express = require("express");
const router = express.Router();
const file = require("../controllers/file");
const { upload, setLocation } = require("../middlewares/file");

router.post(
  "/",
  setLocation("./public/files/"),
  upload.single("file"),
  file.uploadFile
);

router.get("/bot", file.speak);

module.exports = router;

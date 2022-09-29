const express = require("express");
const router = express.Router();
const file = require("../controllers/file");
const { upload, setLocation } = require("../middlewares/file");
const { videoUpload, location} = require("../middlewares/video");

router.post(
  "/",
  setLocation("./public/files/"),
  upload.single("file"),
  file.uploadFile
);

router.get("/bot", file.speak);


  router.post(
    "/video",
    location("./public/videos/"),
    videoUpload.single("video"),
    file.uploadVideo
  );

module.exports = router;


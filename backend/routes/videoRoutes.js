const express = require("express");
const router = express.Router();

const { getVideos, uploadVideo } = require("../controllers/videoController");

router.get("/videos", getVideos);

router.post("/upload-video", uploadVideo);

module.exports = router;
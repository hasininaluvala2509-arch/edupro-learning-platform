const express = require("express");
const router = express.Router();

const { getRecommendations } = require("../controllers/recommendController");

router.get("/recommend/:studentId", getRecommendations);

module.exports = router;
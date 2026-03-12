const express = require("express");
const router = express.Router();

const { markCompleted, getProgress } = require("../controllers/progressController");

router.post("/progress", markCompleted);

router.get("/progress/:studentId", getProgress);

module.exports = router;
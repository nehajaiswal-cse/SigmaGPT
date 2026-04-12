const express = require("express");
const { generateCodeController } = require("../controllers/ai.controller");

const router = express.Router();

router.post("/generate", generateCodeController);

module.exports = router;
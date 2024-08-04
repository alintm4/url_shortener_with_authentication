const express = require("express");
const { handleGivingSHORT_URLS, handleGetUrl } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGivingSHORT_URLS);

router.get("/:shortID", handleGetUrl);

module.exports = router;

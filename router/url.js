const express = require("express");
const { handleGivingSHORT_URLS,
     handleGetUrl,
     handleGetAnalytics
     } = require("../controllers/url");

const router = express.Router();

router.post("/", handleGivingSHORT_URLS);

router.get("/:shortID", handleGetUrl);

router.get("/analytics/:shortID", handleGetAnalytics);

module.exports = router;

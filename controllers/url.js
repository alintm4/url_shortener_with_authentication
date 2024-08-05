const shortid = require("shortid");
const URL = require("../model/url");
async function handleGivingSHORT_URLS(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortiD = shortid();
  await URL.create({
    shortID: shortiD,
    requiredURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  // return res.json({id:shortiD})
  return res.render("home", {
    id: shortiD,
  });
}
async function handleGetUrl(req, res) {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate(
    {
      shortID,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.requiredURL);
}
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortID;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGivingSHORT_URLS,
  handleGetUrl,
  handleGetAnalytics,
};

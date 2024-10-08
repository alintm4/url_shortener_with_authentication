const express = require("express");
const URL = require("../model/url");
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const URLs = await URL.find({ createdBy: req.user._id });

  return res.render("home", {
    urls: URLs,
  });
});

router.get("/signup",(req,res)=>{
   return res.render("userSignup")
})

router.get("/login",(req,res)=>{
  return res.render("login")
})

module.exports = router;

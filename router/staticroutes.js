const express = require("express");
const URL = require("../model/url");
const router = express.Router();

router.get("/", async (req, res) => {
  const URLs = await URL.find({});

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

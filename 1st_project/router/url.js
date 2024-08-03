const express=require("express")
const {handleGivingSHORT_URLS}=require("../controllers/url")
const router=express.Router()

router.post("/",handleGivingSHORT_URLS)

module.exports=router;
const shortid = require('shortid')
const URL=require("../router/url")
async function handleGivingSHORT_URLS(req,res) {

    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'})
  
    const shortiD=shortid()
    await URL.create({

        shortID:shortiD,
        requiredURL:body.url,
        visitHistory:[],


    })
    return res.json({id:shortiD})
}

module.exports={
    handleGivingSHORT_URLS,
}
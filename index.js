const express = require("express");
const urlRoute = require("./router/url");
const app = express();
const path= require("path") //ejs
const { connectToDb } = require("./connectiondb");
PORT = 8001;
const URL=require("./model/url")
const staticRoute=require("./router/staticroutes")

connectToDb('mongodb://127.0.0.1:27017/shorrt-url').then(() =>
  console.log("connected to db")
).catch(err => console.log(err));

// ejs
app.set('view engine', 'ejs')
app.set("views", path.resolve("./views"))

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",staticRoute)

// app.get("/test",async (req,res)=>{
//   const URLs= await URL.find({})
//   return res.render("home",{
// urls:URLs,
//   })
// })




app.use("/url", urlRoute);





app.listen(PORT, () => {
  console.log("Server connected");
});

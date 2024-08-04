const express = require("express");
const app = express();
const cookieParser=require("cookie-parser")
const {restrictToLogin}=require("./middleware/authorization.js")

const urlRoute = require("./router/url");
const staticRoute = require("./router/staticroutes");
const userRoute=require("./router/user")

const URL = require("./model/url");

const path = require("path"); //ejs

//mongoDB
const { connectToDb } = require("./connectiondb");
connectToDb("mongodb://127.0.0.1:27017/shorrt-url")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

  // ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// app.get("/test",async (req,res)=>{
//   const URLs= await URL.find({})
//   return res.render("home",{
// urls:URLs,
//   })
// })
app.use("/url", restrictToLogin, urlRoute);


app.use("/user",userRoute);
app.use("/", staticRoute);

PORT = 8001;
app.listen(PORT, () => {
  console.log("Server connected");
});

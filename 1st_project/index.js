const express = require("express");
const urlRoute = require("./router/url");
const app = express();
const { connectToDb } = require("./connectiondb");
PORT = 8001;

connectToDb('mongodb://127.0.0.1:27017/shorrt-url').then(() =>
  console.log("connected to db")
).catch(err => console.log(err));

//middleware

app.use(express.json())

app.use("/url", urlRoute);



app.listen(PORT, () => {
  console.log("Server connected");
});

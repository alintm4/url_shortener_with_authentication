const USER = require("../model/user");
const {v4 : uuidv4} = require('uuid')
const {setUser}=require("../service/auth")

async function handleSignUp(req, res) {
  const { username, email, password } = req.body;
  await USER.create({
    username,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password});

  if (!user)
    return res.render("login", {
      error: "invalid username or password",
      
    });

    const sessionId =uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId)
    
  return res.redirect("/");
}

module.exports = {
  handleSignUp,
  handleLogin,
};

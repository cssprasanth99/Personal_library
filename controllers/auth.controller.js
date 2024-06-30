const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

//Register
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, email, password: hashedPassword });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).send("Error in sending data to DB");
  }
};

//Login

const 

module.exports = register;

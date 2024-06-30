const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("user", userShema);

module.exports = UserModel;
                                                  
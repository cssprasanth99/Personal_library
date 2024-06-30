const mongoose = require("mongoose");

const bookShcema = mongoose.Schema({
  title: String,
  author: String,
  status: { type: String, enum: ["currently reading", "Read", "Want to Read"],default:"Want to" },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const BookModel = mongoose.model("Book", bookShcema);

module.exports = bookShcema;

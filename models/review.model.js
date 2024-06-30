const mongoose = require("mongoose");
const User = require("../models/user.model");
const Book = require("../models/book.model");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  reviewText: String,
  rating: {
    type: Number,
  },
});

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel;

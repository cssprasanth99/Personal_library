const Book = require("../models/book.model");

const createBook = async (req, res) => {
  const { title, author, status } = req.body;
  const book = new Book({ title, author, status });
  try {
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status.send(error);
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createBook, listBooks };

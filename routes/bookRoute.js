const express = require("express");
const router = express.Router();
const { createBook, listBooks } = require("../controllers/book.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/books", authMiddleware, createBook);
router.get("/books", listBooks);

module.exports = router;

const UserModel = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.send("No token provided");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.send("Invalid token");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token." });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(401).send("Access denied.");
  }
};

module.exports = authMiddleware;

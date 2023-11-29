const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { addUser, createUserTable, getUserByUsername } = require("../models/userModel");

require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUserTable();
  await addUser(username, email, hashedPassword);

  res.status(201).json({ message: "User registered successfully" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await getUserByUsername(username);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
});

module.exports = {
  registerUser,
  loginUser,
};

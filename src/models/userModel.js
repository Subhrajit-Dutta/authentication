const pgp = require("pg-promise")();
const { db } = require("../database");
const createUserTable = async () => {
  try {
    await db.none(
      "CREATE TABLE IF NOT EXISTS newusers (id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL,email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL)"
    );
    console.log("User table created successfully");
  } catch (error) {
    console.error("Error creating user table:", error.message || error);
    throw error;
  }
};

const addUser = async (username, email, password) => {
  try {
    await db.none(
      "INSERT INTO newusers (username, email, password) VALUES ($1, $2, $3)",
      [username, email, password]
    );
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error.message || error);
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await db.oneOrNone(
      "SELECT * FROM newusers WHERE username = $1",
      [username]
    );
    return user;
  } catch (error) {
    console.error("Error getting user by username:", error.message || error);
    throw error;
  }
};

module.exports = {
  createUserTable,
  addUser,
  getUserByUsername,
};

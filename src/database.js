const pgp = require("pg-promise")();
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const sslOptions = {
  rejectUnauthorized: false,
};

const db = pgp({
  connectionString,
  ssl: process.env.NODE_ENV === "production" ? sslOptions : false,
});

const connect = async () => {
  try {
    await db.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message || error);
    process.exit(1);
  }
};

module.exports = {
  connect,
  db,
};

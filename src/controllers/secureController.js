const { getUserByUsername } = require("../models/userModel");

const SecureEndpointHandler = async (req, res) => {
  try {
    res.status(200).json({ message: "This is a secure endpoint" });
  } catch (error) {
    console.error("Error handling secure endpoint:", error.message || error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  SecureEndpointHandler,
};

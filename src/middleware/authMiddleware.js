const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "your-secret-key");

    req.userData = { userId: decodedToken.userId };

    next();
  } catch (error) {
    console.error("Error authenticating user:", error.message || error);
    return res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = authenticateUser;

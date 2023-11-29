const express = require("express");
const rateLimit = require("express-rate-limit");
const { SecureEndpointHandler } = require("../controllers/secureController");

const router = express.Router();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again later.",
});

router.get("/secure-endpoint", apiLimiter, SecureEndpointHandler);

module.exports = router;

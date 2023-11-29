const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const secureRoutes = require("./routes/secureRoutes");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

db.connect();

app.use("/auth", authRoutes);
app.use("/secure", secureRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

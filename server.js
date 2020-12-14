// NPM packages
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Express app
// =============================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
// =============================================================
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// MongoDB connection
// =============================================================
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI)

// Start the server
// =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
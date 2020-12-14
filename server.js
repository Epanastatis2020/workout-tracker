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

// Mongoose models
// =============================================================
const db = require("./models");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// MongoDB connection
// =============================================================
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the server
// =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
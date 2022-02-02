// Imports
const express = require("express");

// Import controllers
const Ctrl = require("./routes/");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Form entry route
  apiRouter.route("//").post();

  // Cookies Data route
  apiRouter.route("//").post();

  return apiRouter;
})();

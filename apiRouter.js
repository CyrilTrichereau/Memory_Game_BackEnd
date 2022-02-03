// Imports
const express = require("express");

// Import controllers
const scoreCtrl = require("./routes/scoreCtrl.js");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Receive new score route
  apiRouter.route("/postScore").post(scoreCtrl.receiveNewScore);

  // Send bests scores route
  apiRouter.route("/bestsScores").get(scoreCtrl.sendBestsResults);

  return apiRouter;
})();

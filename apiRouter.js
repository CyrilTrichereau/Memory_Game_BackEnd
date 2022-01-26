// Imports
const express = require("express");
const cookiesCtrl = require("./routes/cookiesCtrl");

// Import controllers
const formSentCtrl = require("./routes/formSentCtrl");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Form entry route
  apiRouter
    .route(
      "/QRF9Aj7xYXkDibrwFdoa9PnGkhU7j7oYXdwOxIo9PnGkhoXDirwFtdvUkqxE0gBN0cJR/"
    )
    .post(formSentCtrl.storeAndEmail);

  // Cookies Data route
  apiRouter
    .route(
      "/QRkhoXDirwFtdvF9Aj7rwFdoa9PnGkwxYXkDibOxIo9PnGUkqxE0ghU7j7oYXdN0cJR/"
    )
    .post(cookiesCtrl.storeData);

  return apiRouter;
})();

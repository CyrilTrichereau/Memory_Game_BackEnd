// Imports
const express = require("express");

// Import controllers
const formSentCtrl = require("./routes/formSentCtrl");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter
    .route(
      "/QRF9Aj7xYXkDibrwFdoa9PnGkhU7j7oYXdwOxIo9PnGkhoXDirwFtdvUkqxE0gBN0cJR/"
    )
    .post(formSentCtrl.storeAndEmail);
  return apiRouter;
})();

// Imports
const sgMail = require("@sendgrid/mail");
const models = require("../models");
const sendFormToContactCtchDev = require("../utils/sendFormToContactCtchDev.email.js");

// Routes
module.exports = {
  storeAndEmail: async (req, res) => {
    // Params
    const name = req.body.name;
    const email = req.body.email;
    const text = req.body.text;
    let company = "";
    if (req.body.company) {
      company = req.body.company;
    }
    // If One information is missing
    if (name == null || email == null || text == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    try {
      newForm = await models.Form.create({
        name: name,
        email: email,
        company: company,
        text: text,
      });
    } catch (err) {
      return res.status(500).json({ error: "Cannot add form" });
    }
    // if form is well create
    if (newForm) {
      // Send an email to contact@ctch.dev with all informations
      try {
        // Prepare email
        let emailToSend = sendFormToContactCtchDev.email({
          name: name,
          email: email,
          company: company,
          text: text,
        });
        // Send email
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        let response = await sgMail.send(emailToSend);
        return res
          .status(200)
          .json({ message: "email sent !", response: response });
      } catch (err) {
        return res.status(500).json({ error: "Cannot send email " + err });
      }
      // Return new user object
    } else {
      return res.status(500).json({ error: "Cannot add form" });
    }
  },
};

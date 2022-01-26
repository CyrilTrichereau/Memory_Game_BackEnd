// Imports
const models = require("../models");

// Routes
module.exports = {
  storeData: async (req, res) => {
    // Params
    const objectInfos = req.body;

    // If One information is missing
    if (objectInfos == null || objectInfos.cookiesPolicyAccepted == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    // Create cookie in database with infos
    try {
      newCookie = await models.Cookies.create({
        cookiesPolicyAccepted: objectInfos.cookiesPolicyAccepted,
        statusOfRequestToIpApi: objectInfos.status,
        continent: objectInfos.continent,
        country: objectInfos.country,
        countryCode: objectInfos.countryCode,
        region: objectInfos.region,
        regionName: objectInfos.regionName,
        city: objectInfos.city,
        district: objectInfos.district,
        zip: objectInfos.zip,
        lat: objectInfos.lat,
        lon: objectInfos.lon,
        timezone: objectInfos.timezone,
        currency: objectInfos.currency,
        isp: objectInfos.isp,
        org: objectInfos.org,
        as: objectInfos.as,
        mobile: objectInfos.mobile,
        proxy: objectInfos.proxy,
        hosting: objectInfos.hosting,
        query: objectInfos.query,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Cannot create cookie model", err: err });
    }
    // if cookie is well create
    if (newCookie) {
      console.log({ newCookie: newCookie });
      return res.status(200).json({ message: "cookie added" });
      // If not
    } else {
      return res.status(500).json({ error: "Cannot add cookie" });
    }
  },
};

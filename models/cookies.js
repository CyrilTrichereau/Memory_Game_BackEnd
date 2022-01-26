"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cookies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cookies.init(
    {
      cookiesPolicyAccepted: DataTypes.BOOLEAN,
      statusOfRequestToIpApi: DataTypes.STRING,
      continent: DataTypes.STRING,
      country: DataTypes.STRING,
      countryCode: DataTypes.STRING,
      region: DataTypes.STRING,
      regionName: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      zip: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
      timezone: DataTypes.STRING,
      currency: DataTypes.STRING,
      isp: DataTypes.STRING,
      org: DataTypes.STRING,
      as: DataTypes.STRING,
      mobile: DataTypes.BOOLEAN,
      proxy: DataTypes.BOOLEAN,
      hosting: DataTypes.BOOLEAN,
      query: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cookies",
    }
  );
  return Cookies;
};

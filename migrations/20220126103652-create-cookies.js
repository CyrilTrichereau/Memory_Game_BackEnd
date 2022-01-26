"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cookies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cookiesPolicyAccepted: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      statusOfRequestToIpApi: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      continent: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      countryCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      region: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      regionName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      district: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      zip: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lat: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      lon: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      timezone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      currency: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      isp: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      org: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      as: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mobile: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      proxy: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      hosting: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      query: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cookies");
  },
};

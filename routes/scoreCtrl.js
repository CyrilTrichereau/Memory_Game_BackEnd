// This is the javascript engine !
// You can find here all logical

// IMPORTS ---------------------
//  ---------------------
const models = require("../models");

// FUNCTIONS  ---------------------
//  ---------------------
// FUNCTION Format ranking for basic display
const newRanking = (rank) => {
  // Make rank as variable and increment to start at 1
  let rankIncremented = rank;
  rankIncremented++;
  // Create new rank format
  let newRank;
  if (rankIncremented == 1) {
    newRank = "1er";
  } else {
    newRank = rankIncremented + "ème";
  }
  // Return new rank format
  return newRank;
};

// ROUTE CONTROLLERS  ---------------------
//  ---------------------
module.exports = {
  // CONTROLLER Receive New Score to save
  receiveNewScore: async (req, res) => {
    // Params
    const newScore = req.body.newScore;
    let newScoreSaved = null;

    // If One information is missing
    if (!newScore) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    try {
      // Create a new entry with the score received
      newScoreSaved = await models.BoardScore.create({
        score: newScore,
      });
    } catch (error) {
      return res.status(500).json({ error: "Cannot create new score" });
    }

    // If new score is well save
    if (newScoreSaved) {
      // Send a status 200
      return res.status(200).json({ message: "New score added" });
    } else {
      // Else, send a status 500
      return res.status(500).json({ error: "Cannot add score" });
    }
  },

  // CONTROLLER Send bests results
  sendBestsResults: async (req, res) => {
    // Params
    let fiveBestsScore = null;

    try {
      // Ask the database for the five bests score
      fiveBestsScore = await models.BoardScore.findAll({
        attributes: ["score", "createdAt"],
        order: [["score", "DESC"]],
        limit: 5,
      });
    } catch (error) {
      return res.status(500).json({ error: "Cannot get bests scores" + error });
    }

    // If well found
    if (fiveBestsScore) {
      // Format created time before sending and add
      let newResponse = [];

      for (let index = 0; index < fiveBestsScore.length; index++) {
        // Prepare object
        const newFormatScore = {
          ranking: newRanking(index),
          score: fiveBestsScore[index].score,
          createdDate: fiveBestsScore[index].createdAt,
        };
        //Push object in array
        newResponse.push(newFormatScore);
      }

      // Send a status 200 with five bests results
      return res.status(200).json(newResponse);
    } else {
      // Else, end a status 500
      return res.status(500).json({ error: "Cannot get bests scores" });
    }
  },
};

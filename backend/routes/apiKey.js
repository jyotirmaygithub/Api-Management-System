const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const crypto = require('crypto');
const Data = require("../models/Data");
const User = require("../models/User");

// Route: to fetch existing data.
router.put("/createAPI", fetchUserId, async (req, res) => {
    try {
      // Generate a random API key
      const apiKey = crypto.randomBytes(32).toString("hex"); // Generates a 64-character hexadecimal string (32 bytes)
  
      // Update the user document with the generated API key
      const userDocument = await User.findByIdAndUpdate(req.userId, {
        $set: { apiKeys: apiKey },
      },{new : true}).select([ "-password" ]);
      
      if (!userDocument) {
        return res.status(404).send("User not found");
      }
      console.log("userdocument =",userDocument)
      res.send({userDocument});
    } catch (error) {
      console.error("Error creating API key:", error);
      res.status(500).send("Internal server error");
    }
  });

  // Route to delete the api key.
  router.put("/deleteAPI", fetchUserId, async (req, res) => {
    try {
      // Update the user document with the undefined API key
      const userDocument = await User.findByIdAndUpdate(req.userId, {
        $set: { apiKeys: null },
      },{new : true}).select(["-password"]);
  
      if (!userDocument) {
        return res.status(404).send("User not found");
      }
      
      await userDocument.save();
      res.send("Api key deleted successfully");
    } catch (error) {
      console.error("Error deleting API key:", error);
      res.status(500).send("Internal server error");
    }
  });
  
  // Route to fetch user api key.
  router.get("/APIKey", fetchUserId, async (req, res) => {
    try {
      // Update the user document with the undefined API key
      const userDocument = await User.findById(req.userId).select(["-password"]);
      if (!userDocument) {
        return res.status(404).send("User not found");
      }
      res.send({userDocument});
    } catch (error) {
      console.error("Error fetching API key:", error);
      res.status(500).send("Internal server error");
    }
  });
  
module.exports = router;

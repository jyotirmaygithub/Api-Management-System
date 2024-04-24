const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Data = require("../models/Data");
const User = require("../models/User");


// Route: to fetch existing data.
router.get("/fetchData/:id", fetchUserId, async (req, res) => {
  try {
    const foundTask = await User.findOne({apiKeys : req.params.id});
    if (!foundTask) {
      return res.status(404).send("user is not available");
    }

    const existingData = await Data.find();
    if (!existingData) {
        return res.status(404).send("data is not available");
      }
    res.send({existingData});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;

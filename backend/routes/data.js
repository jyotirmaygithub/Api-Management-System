const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Data = require("../models/Data");
const User = require("../models/User");
const dayjs = require("dayjs");
const Request = require("../models/RequestLog");

// Route: to fetch existing data.
router.get("/fetchData/:id", fetchUserId, async (req, res) => {
  try {
    const user = await User.findOne({ apiKeys: req.params.id });
    if (!user) {
      return res.status(404).send("api key is not available");
    }

    const existingData = await Data.find();
    if (!existingData) {
      return res.status(404).send("data is not available");
    }

    const dailyRequestCount = await Request.countDocuments({
      user_id: req.userId,
      timestamp: { $gte: dayjs().startOf("day").toDate() },
    });
    console.log("daily addups = ", dailyRequestCount);

    if (dailyRequestCount >= 50) {
      return res.status(429).json({ error: "Daily request limit exceeded" });
    }

    // Check monthly limit
    const monthlyRequestCount = await Request.countDocuments({
      user_id: req.userId,
      timestamp: { $gte: dayjs().startOf("month").toDate() },
    });
    console.log("monthly addups =  ", monthlyRequestCount);
    if (monthlyRequestCount >= 200) {
      return res.status(429).json({ error: "Monthly request limit exceeded" });
    }
    console.log("for how many times in a request")
    await Request.create({
      user_id: req.userId,
      endpoint: req.path,
      timeStamp: dayjs().toDate(),
    });

    res.send({ existingData });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.get("/api-requests-by-hour", fetchUserId, async (req, res) => {
  try {
    const requests = await Request.find({ user_id: req.userId });

    // console.log("Total number of requests = ", requests);
    res.send({ requests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

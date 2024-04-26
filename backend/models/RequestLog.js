const mongoose = require("mongoose");
const dayjs = require('dayjs');
const Schema = mongoose.Schema;

const requestDetails = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  endpoint: {
    required: true,
    type: String
  },
  timestamp: {
    type: Date,
    default: () => dayjs().toDate() // Use Day.js to get the current date and time
  },
});

const Request = mongoose.model("APIrequest", requestDetails);
module.exports = Request;

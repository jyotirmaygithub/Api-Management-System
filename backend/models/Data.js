const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExistingData = new Schema({
});
const Data = mongoose.model("data", ExistingData);
module.exports = Data;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;

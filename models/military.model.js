const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./base.model");

const militarySchema = new Schema({
  branch: { type: String, required: true },
});

const Military = Profile.discriminator("Military", militarySchema);

module.exports = Military;

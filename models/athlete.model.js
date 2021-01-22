const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = require("./base.model");

const athleteSchema = new Schema({
  sport: { type: String, required: true },
});

const Athlete = Profile.discriminator("Athlete", athleteSchema);

module.exports = Athlete;

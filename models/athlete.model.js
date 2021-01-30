const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = require("./base.model");

const athleteSchema = new Schema({
  sport: {
    type: String,
    required: [true, "Sport is required."],
  },
  position: { type: String },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  achievements: { type: Array },
});

const AthleteModel = Profile.discriminator("athlete", athleteSchema);

module.exports = AthleteModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = require("./base.model");

const athleteSchema = new Schema({
  primarySport: {
    type: String,
    required: [true, "Primary sport is required."],
  },
  secondarySport: { type: String },
  position: { type: String },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  graduationYear: { type: Number },
  achievements: { type: Array },
});

const AthleteModel = Profile.discriminator("Athlete", athleteSchema);

module.exports = AthleteModel;

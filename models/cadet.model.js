const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./base.model");

const cadetSchema = new Schema({
  branch: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  BMI: { type: Number, required: true },
  DesiredMilitaryOccupationalSpecialty: { type: String },
});

const CadetModel = Profile.discriminator("cadet", cadetSchema);

module.exports = CadetModel;

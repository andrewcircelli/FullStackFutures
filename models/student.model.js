const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./base.model");

const studentSchema = new Schema({
  university: { type: String, required: true },
  achievements: { type: Array, required: true },
  GPA: { type: Number },
  SAT: { type: Number },
  ACT: { type: Number },
  extracurriculars: { type: Array },
  priorWorkExperience: { type: Array },
});

const StudentModel = Profile.discriminator("student", studentSchema);

module.exports = StudentModel;

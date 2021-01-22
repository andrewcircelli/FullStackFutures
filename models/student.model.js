const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./base.model");

const studentSchema = new Schema({
  university: { type: String, required: true },
  achievements: { type: Array, required: true },
});

const Student = Profile.discriminator("Student", studentSchema);

module.exports = Student;

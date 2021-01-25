const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Discriminators are a mongoose feature that enable you to store similar documents
// in the same collection with different schema constraints
const baseOptions = {
  discriminatorKey: "profileType",
};
// Configure match built-in validator condition
const reMatch = /[a-zA-z]/;

const Base = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      match: reMatch,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      match: reMatch,
    },
    age: { type: Number, required: [true, "Age is required."] },
    graduationYear: { type: Number },
    phoneNumber: {
      type: Number,
      required: [true, "Phone Number is required."],
    },
    email: { type: String },
    createdOn: { type: Date, default: Date.now() },
    isActive: { type: Boolean, default: true },
    userRef: { type: Schema.Types.ObjectId, ref: "User" },
  },
  baseOptions
);

const Profile = mongoose.model("Profile", Base);

module.exports = Profile;

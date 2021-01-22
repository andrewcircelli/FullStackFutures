const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Discriminators are a mongoose feature that enable you to store similar documents
// in the same collection with different schema constraints
const baseOptions = {
  discriminatorKey: "profileType",
};
const Base = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  baseOptions
);

const Profile = mongoose.model("Profile", Base);

module.exports = Profile;

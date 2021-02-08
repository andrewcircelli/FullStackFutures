const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: [true, "username is required."] },
  password: { type: String, required: [true, "password is required."] },
  createdOn: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
  userProfile: { type: Schema.Types.ObjectId, ref: "Profile" },
  // favoriteProfilesRef: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  favoriteProfiles: { type: Array, default: null },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

import axios from "axios";

export default {
  // Gets all profile
  getProfile: function () {
    return axios.get("/api/profile");
  },
  // Gets the profile with the given id
  getProfile: function (id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the profile with the given id
  deleteProfile: function (id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a post to the database
  saveProfile: function (profileData) {
    return axios.post("/api/profile", profileData);
  },
};

import axios from "axios";

const API = {
  // Gets all profiles
  getProfile: function () {
    return axios.get("/api/profiles");
  },
  // Gets the profile with the given id
  getProfileById: function (id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the profile with the given id
  deleteProfileById: function (id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a post to the database
  saveProfile: function (profileData) {
    return axios.post("/api/profiles/student/create", profileData);
  },
};

export default API;

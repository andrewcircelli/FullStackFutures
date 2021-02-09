import axios from "axios";

const API = {
  // CREATES a user in the database
  saveUser: function (userData) {
    return axios.post("/api/auth/sign-up", userData);
  },
  // SENDS user data for authentification
  sendUser: function (userData) {
    return axios.post("/api/auth/sign-in", userData);
  },
  // GETs all profiles
  getProfiles: function () {
    return axios.get("/api/profiles");
  },
  getProfilesByType: function (profileType) {
    return axios.get("/api/profiles/" + profileType);
  },
  // GETs a profile with the given id
  getProfileById: function (id) {
    return axios.get("/api/profile/" + id);
  },
  // DELETEs a profile with the given id
  deleteProfileById: function (id) {
    return axios.delete("/api/profile/" + id);
  },
  // CREATEs a profile in the database
  saveProfile: function (profileType, profileData) {
    return axios.post("/api/profiles/" + profileType, profileData);
  },
};

export default API;

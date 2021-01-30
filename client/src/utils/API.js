import axios from "axios";

const API = {
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
  // CREATEs a profile to the database
  saveProfile: function (profileData) {
    return axios.post("/api/profiles/student", profileData);
  },
};

export default API;

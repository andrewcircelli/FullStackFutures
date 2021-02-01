import axios from "axios";

export async function getProfiles() {
  const response = await axios.get("/api/profiles");
  if (response.ok) return response.json();
  throw response;
}

export async function getProfilesByType(profileType) {
  const response = await axios.get("/api/profiles/" + profileType);
  if (response.ok) return response.json();
  throw response;
}

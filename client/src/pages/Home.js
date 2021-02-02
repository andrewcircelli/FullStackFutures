import React from "react";
import useAxios from "../utils/useAxios";
import SpinnerPage from "../components/Spinner";

import { useParams } from "react-router-dom";
import AthleteHome from "./AthleteHome";
import StudentHome from "./StudentHome";
import CadetHome from "./CadetHome";
import ProfileHome from "./ProfileHome";

const Home = (props) => {
  const { profileType } = useParams();
  console.log("From Home.js", profileType);

  const { data: profiles, loading, error } = useAxios(profileType);
  console.log("From Home.js", profiles);
  // going to want to move this out to a global store
  // spinner should take up entire page imo
  if (error) throw error;
  if (loading) return <SpinnerPage />;

  return (
    <div>
      {profileType === "athlete" ? (
        <AthleteHome profileType={profileType} profiles={profiles} />
      ) : profileType === "student" ? (
        <StudentHome profileType={profileType} profiles={profiles} />
      ) : profileType === "cadet" ? (
        <CadetHome profileType={profileType} profiles={profiles} />
      ) : (
        <ProfileHome profileType={"all"} profiles={profiles} />
      )}
    </div>
  );
};

export default Home;

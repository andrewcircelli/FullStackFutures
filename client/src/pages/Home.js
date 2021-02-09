import React, { useEffect, useState } from "react";
import { Container } from "../components/Grid";
import SpinnerPage from "../components/Spinner";
import { useParams } from "react-router-dom";
import AthleteHome from "./AthleteHome";
import StudentHome from "./StudentHome";
import CadetHome from "./CadetHome";
import ProfileHome from "./ProfileHome";
import axios from "axios";

const Home = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { profileType } = useParams();
  useEffect(() => {
    // consider moving to globalStore
    if (profileType !== "all") {
      try {
        axios.get("/api/profiles/" + profileType).then((apiResults) => {
          setProfiles(apiResults.data);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        axios.get("/api/profiles/all").then((results) => {
          setProfiles(results.data);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

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
        <div className="border border-info">
          <ProfileHome profileType={"all"} profiles={profiles} />
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Container } from "../components/Grid";
//import useAxios from "../hooks/useAxios";
import SpinnerPage from "../components/Spinner";
import { useParams } from "react-router-dom";
import AthleteHome from "./AthleteHome";
import StudentHome from "./StudentHome";
import CadetHome from "./CadetHome";
import ProfileHome from "./ProfileHome";
import SignUp from "../components/SignUp";
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
        axios.get("/api/profiles/view/" + profileType).then((apiResults) => {
          setProfiles(apiResults.data);
          console.log(apiResults);
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
          console.log(results);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);
  // const { data: profiles, loading, error } = useAxios(profileType);
  if (error) throw error;
  if (loading) return <SpinnerPage />;

  return (
    <div>
      {profileType === "athlete" ? (
        <Container fluid>
          <AthleteHome profileType={profileType} profiles={profiles} />
        </Container>
      ) : profileType === "student" ? (
        <StudentHome profileType={profileType} profiles={profiles} />
      ) : profileType === "cadet" ? (
        <CadetHome profileType={profileType} profiles={profiles} />
      ) : (
        <div className="border border-info">
          <Container fluid>
            <ProfileHome profileType={"all"} profiles={profiles} />
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;

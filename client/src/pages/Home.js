import React from "react";
import { Container, Row, Col } from "../components/Grid";
import useAxios from "../utils/useAxios";
import SpinnerPage from "../components/Spinner";
import { useParams } from "react-router-dom";
import AthleteHome from "./AthleteHome";
import StudentHome from "./StudentHome";
import CadetHome from "./CadetHome";
import ProfileHome from "./ProfileHome";

const Home = (props) => {
  const { profileType } = useParams();

  // consider moving to globalStore
  const { data: profiles, loading, error } = useAxios(profileType);
  if (error) throw error;
  if (loading) return <SpinnerPage />;

  return (
    <div>
      {profileType === "athlete" ? (
        <Container>
          <Row>
            <AthleteHome profileType={profileType} profiles={profiles} />
          </Row>
        </Container>
      ) : profileType === "student" ? (
        <Container>
          <StudentHome profileType={profileType} profiles={profiles} />
        </Container>
      ) : profileType === "cadet" ? (
        <Container>
          <CadetHome profileType={profileType} profiles={profiles} />
        </Container>
      ) : (
        <div className="border border-dark">
          <Container>
            <Row>
              <Col size="12">
                <ProfileHome profileType={"all"} profiles={profiles} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;

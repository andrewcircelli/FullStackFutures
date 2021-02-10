import React from "react";
import { useParams } from "react-router-dom";
import GetRegAthlete from "../components/GetRegAthlete";
import GetRegStudent from "../components/GetRegStudent";
import GetRegCadet from "../components/GetRegCadet";

import { Container } from "../components/Grid";

const Reg = (props) => {
  const { profileType } = useParams();

  return (
    <>
      <Container>
        {profileType === "athlete" ? (
          <GetRegAthlete />
        ) : profileType === "student" ? (
          <GetRegStudent />
        ) : (
          <GetRegCadet />
        )}
      </Container>
    </>
  );
};

export default Reg;

import React from "react";
import { Col, Row, Container } from "../components/Grid";
import StudentRegForm from "../components/StudentRegForm";
import ProfileCarousel from "../components/Carousel";

const StudentHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
      <StudentRegForm profileType={profileType} profiles={profiles} />
    </>
  );
};


export default StudentHome;

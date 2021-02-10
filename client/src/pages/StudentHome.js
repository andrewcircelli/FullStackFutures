import React from "react";
import ProfileCarousel from "../components/Carousel";

const StudentHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
    </>
  );
};

export default StudentHome;

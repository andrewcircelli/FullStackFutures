import React from "react";
import ProfileCarousel from "../components/Carousel";

const AthleteHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
    </>
  );
};

export default AthleteHome;

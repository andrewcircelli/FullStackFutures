import React from "react";
import AthleteRegForm from "../components/AthleteRegForm";
import ProfileCarousel from "../components/Carousel";

const AthleteHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
      <AthleteRegForm profileType={profileType} profiles={profiles} />
    </>
  );
};

export default AthleteHome;

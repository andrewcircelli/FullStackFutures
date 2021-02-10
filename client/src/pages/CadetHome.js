import React from "react";
import ProfileCarousel from "../components/Carousel";

const CadetHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
    </>
  );
};

export default CadetHome;

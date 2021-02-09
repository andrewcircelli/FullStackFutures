import React from "react";
import CadetRegForm from "../components/CadetRegForm";
import ProfileCarousel from "../components/Carousel";

const CadetHome = ({ profileType, profiles }) => {
  return (
    <>
      <ProfileCarousel profileType={profileType} profiles={profiles} />
      <CadetRegForm profileType={profileType} profiles={profiles} />
    </>
  );
};

export default CadetHome;

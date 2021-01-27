import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import AthleteProfileCard from "../AthleteProfileCard";
// import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
// import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";


export default function ProfileCarousel() {
  const [ profiles, setProfiles ] = useState([]);

  useEffect( ()=> {
    API.getProfile().then((profileData) => {
      console.log("From Caraousel", profileData.data);
      setProfiles(profileData.data);
    });
  }, []);

  return (
    <Flicking 
    tag = "div"
    viewportTag = "div"
    // cameraTag = "div"
    // onNeedPanel = {(e: NeedPanelEvent) => {}}
    // onMoveStart = {(e: FlickingEvent) => {}}
    // onMove = {(e: FlickingEvent) => {}}
    // onMoveEnd = {(e: FlickingEvent) => {}}
    // onHoldStart = {(e: FlickingEvent) => {}}
    // onHoldEnd = {(e: FlickingEvent) => {}}
    // onRestore = {(e: FlickingEvent) => {}}
    // onSelect = {(e: SelectEvent) => {}}
    // onChange = {(e: ChangeEvent) => {}}
    classPrefix = "eg-flick"
    deceleration = {0.0075}
    horizontal = {true}
    circular = {true}
    infinite = {false}
    // infiniteThreshold = {0}
    // lastIndex = {Infinity}
    // threshold = {40}
    // duration = {100}
    // panelEffect = {x => 1 - Math.pow(1 - x, 3)}
    defaultIndex = {0}
    inputType = {["touch", "mouse"]}
    // thresholdAngle = {45}
    bounce = {10}
    autoResize = {true}
    adaptive = {false}
    zIndex = {2000}
    bound = {false}
    overflow = {true}
    hanger = {"50%"}
    anchor = {"50%"}
    gap = {20}
    // moveType = {{type: "snap", count: 1}}
    // collectStatistics = {true}
    >
      { profiles.map((profile, index) => {
        console.log(profile)
        return <AthleteProfileCard key={index} profile={profile}/> 
      })}

    </Flicking>
  )
}

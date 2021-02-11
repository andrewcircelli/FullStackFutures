import React from "react";
import CardFlip from "../CardFlip";
import { Container } from "../Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function ProfileCarousel({ deviceType, profiles }) {
  return (
    <Carousel
      partialVisbile
      swipeable={true}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={false}
      // autoPlay={deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      // containerClass="carousel-container"
      // containerClass="container-with-dots"
      // renderDotsOutside={true}
      // focusOnSelect={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={"desktop"}
      // dotListClass="custom-dot-list-style"
      // itemClass="image-item"
    >
      {profiles.map((profile, index) => {
        return <CardFlip key={index} profile={profile} />;
      })}
    </Carousel>
  );
}

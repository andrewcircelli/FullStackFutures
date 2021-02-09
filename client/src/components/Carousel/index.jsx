import React, { Component } from "react";
import CardFlip from "../CardFlip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProfileCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      centerMode: true,
      centerPadding: "40px",
      swipeToSlide: true,
      arrows: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "15px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            speed: 500,
            slidesToShow: 1,
            centerPadding: "15px",
          },
        },
      ],
    };
    return (
      <div className="border border-danger">
        <Slider {...settings}>
          {this.props.profiles.map((profile, index) => {
            return <CardFlip key={index} profile={profile} />;
          })}
        </Slider>
      </div>
    );
  }
}

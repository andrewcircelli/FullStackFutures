import React, { Component } from "react";
import CardFlip from "../CardFlip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProfileCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.profiles.map((profile, index) => {
            return (
              <>
                <CardFlip key={index} profile={profile} />
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}

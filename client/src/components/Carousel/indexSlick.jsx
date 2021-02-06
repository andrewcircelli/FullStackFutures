import React, { Component } from "react";
import CardFlip from "../CardFlip";
import Slider from "react-slick";

export default class ProfileCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            {this.props.profiles.map((profile, index) => {
              return <CardFlip key={index} profile={profile} />;
            })}
          </div>
        </Slider>
      </div>
    );
  }
}

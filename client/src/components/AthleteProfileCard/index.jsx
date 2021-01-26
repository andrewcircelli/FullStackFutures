import React from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "../FrontCard";
import { FaFootballBall } from 'react-icons/fa';

class AthleteProfileCard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("dsfdas", this.props.profile);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <h1>{this.props.profile.firstName}</h1>
      // <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
      //     <div>
      //       <FrontCard profile={this.props.profile} flipCard={this.handleClick}/>
      //     </div>
      //     <div>
      //       <FrontCard flipCard={this.handleClick}/>
      //       <FaFootballBall />
      //     </div>
      // </ReactCardFlip>
    )
  }
}
export default AthleteProfileCard;
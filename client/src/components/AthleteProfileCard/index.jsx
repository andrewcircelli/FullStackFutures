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
    console.log("From AthleteProfileCard", this.props.profile);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
            <FrontCard profile={this.props.profile} flipCard={this.handleClick}/>
          </div>
          <div>
            <FrontCard profile={this.props.profile} flipCard={this.handleClick}/>
            <FaFootballBall />
          </div>
      </ReactCardFlip>
    )
  }
}
export default AthleteProfileCard;
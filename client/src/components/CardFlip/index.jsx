import React from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "../FrontCard";
import BackCard from "../BackCard";

class AthleteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          <FrontCard profile={this.props.profile} flipCard={this.handleClick} />
        </div>
        <div>
          <BackCard profile={this.props.profile} flipCard={this.handleClick} />
        </div>
      </ReactCardFlip>
    );
  }
}
export default AthleteCard;
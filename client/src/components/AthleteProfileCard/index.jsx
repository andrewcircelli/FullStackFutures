import React from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "../Card";

class AthleteProfileCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
            <FrontCard flipCard={this.handleClick}/>
          </div>
 
        {/* <YOUR_BACK_COMPONENT> */}
          <div>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        {/* </YOUR_BACK_COMPONENT> */}
      </ReactCardFlip>
    )
  }
}
export default AthleteProfileCard;
import React from "react";
import ReactCardFlip from 'react-card-flip';

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
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        {/* <YOUR_FRONT_COMPONENT> */}
          <div>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        {/* </YOUR_FRONT_COMPONENT> */}
 
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
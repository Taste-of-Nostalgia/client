import React, { Component } from 'react';
import $ from 'jquery'; // Import jQuery if required by Turn.js
// import 'turn.js';

class FlipBook extends Component {
  componentDidMount() {
    // $('#flipbook').turn();
  }

  componentWillUnmount() {
    // $('#flipbook').turn('destroy');
  }

  render() {
    return (
      <div id="magazine">
        <div className="page">Page 1</div>
        <div className="page">Page 2</div>
        <div className="page">Page 3</div>
        {/* Add more pages as needed */}
      </div>
    );
  }
}

export default FlipBook;
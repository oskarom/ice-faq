import React, { Component } from 'react';

import './SearchBox.css';

export class SearchBox extends Component {
  render() {
    return (
      <div id="search-box">
        <input placeholder="Search for thousands of questions"></input>
      </div>
    )
  }
}
import React, { Component } from 'react';

import './Tag.css';

export class Tag extends Component {
  render() {
    return (
      <div className="tag">
        {this.props.tag}
      </div>
    )
  }
}
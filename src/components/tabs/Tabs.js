import React, { Component } from 'react';

import './Tabs.css';

export class Tabs extends Component {
  render() {
    return (
      <div id="tabs">
          <div className="tab selected"><a href="/">Popular</a></div>
          <div className="tab"><a href="/">Valflokkur #1</a></div>
          <div className="tab"><a href="/">Valflokkur #2</a></div>
          <div className="tab"><a href="/">Valflokkur #3</a></div>
          <div className="tab"><a href="/">Valflokkur #4</a></div>
      </div>
    )
  }
}
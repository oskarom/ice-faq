import React, { Component } from 'react';

import { Tag } from '../tag/Tag';

import './PopularTags.css';

export class PopularTags extends Component {
  render() {
    return (
      <div id="popular-tags">
        <h1>Popular Tags</h1>
        <div id="tags">
          <Tag tag="Facebook"/>
          <Tag tag="Instagram"/>
          <Tag tag="Marketing"/>
          <Tag tag="Facebook"/>
          <Tag tag="Instagram"/>
          <Tag tag="Marketing"/>
          <Tag tag="Facebook"/>
          <Tag tag="Instagram"/>
          <Tag tag="Marketing"/>
          <Tag tag="Facebook"/>
          <Tag tag="Instagram"/>
          <Tag tag="Marketing"/>
        </div>
      </div>
    )
  }
}
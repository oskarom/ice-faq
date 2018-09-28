import React, { Component } from 'react';

import { SearchBox } from '../searchBox/SearchBox';
import { Tabs } from '../tabs/Tabs';
import { Answers } from '../answers/Answers';
import { AskQuestionButton } from '../askQuestionButton/AskQuestionButton';

import './Questions.css';

export class Questions extends Component {
  render() {
    return (
      <div id="questions">
        <div id="search-box-container">
          <SearchBox />
        </div>
        <Tabs />
        <div id="answers-header">
          <h1>Answers</h1>
          <AskQuestionButton />
        </div>
        <Answers />
      </div>
    )
  }
}